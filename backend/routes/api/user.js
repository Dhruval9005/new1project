const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const keys = require("../../config/keys");
const { requireUserAuth } = require("../../middleware/auth");
const { red } = require("../../utils/consoleColor");
const { sendSMS } = require("../../utils/smsgateway");

const OTP = {};
const verifyOtp = require("../../middleware/verifyotp")(OTP);

// FIND-USER BY PHONE NO API //
router.get("/find-user/:phone_number", async (req, res) => {
  try {
    console.log(`req data:>>`, req.params);

    const { phone_number } = req.params;

    if (!phone_number) {
      return res.status(400).json({
        success: false,
        error: "You must enter a phone number.",
      });
    }

    const user = await User.findOne(
      { phone_number: phone_number },
      "phone_number"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No user found with this phone number.",
      });
    }
    console.log(`response:>>`, user);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// SEND OTP TO PHONE NO API //
router.post("/send-otp", async (req, res) => {
  const { mobileNo, actiontype } = req.body;

  Object.assign(OTP, generateOTP(actiontype));
  let message;

  switch (actiontype) {
    case "register":
      message = `Your OTP for Singup is ${OTP.otp}. Team- Transx Movers`;
      break;
    case "login":
      message = `Dear customer, your OTP for Login is ${OTP.otp}. Use this to validate your Login on Transx Movers App.`;
      break;
    case "profile-update":
      message = `${OTP.otp} is your verification code for updating your profile information. -Transx Movers`;
      break;
  }

  const response = await sendSMS(mobileNo, message);
  console.log(response);

  if (response.ErrorCode !== "000" || response.ErrorMessage !== "Success") {
    return res.status(400).json({
      success: false,
      smsGatewayErrorCode: response.ErrorCode,
      message:
        response.ErrorMessage || "Failed to send OTP through SMS gateway",
    });
  }

  res.status(200).json({
    success: true,
    message: `Otp sent successfully for ${actiontype}`,
    testVariable: OTP,
  });
});

// OTP VERIFICATION API FOR CUSTOMER LOGIN-SIGNUP //
router.post("/verify-otp", async (req, res) => {
  try {
    const { otp, user } = req.body;
    const upperCaseOtp = otp.toUpperCase();

    if (Object.keys(OTP).length === 0) {
      return res.status(404).json({
        success: false,
        message: "OTP not exist for verification",
      });
    }

    console.log(OTP);
    console.log(user);

    if (upperCaseOtp !== OTP.otp) {
      return res
        .status(400)
        .json({ success: false, message: "OTP Verification Failed" });
    }

    const currentTime = Date.now();

    if (OTP.expirationTime < currentTime) {
      return res.status(400).json({ success: false, message: "OTP Expired" });
    }

    const userData = {};
    let status = "";
    if (user.hasOwnProperty("id")) {
      // LOGIN //
      Object.assign(userData, await login(user.id));
      status = "User logged in successfully";
      console.log(status);
    } else {
      // SIGN UP //
      Object.assign(
        userData,
        await signup(user.fname, user.lname, user.phone_number)
      );
      status = "User successfully registered";
      console.log("user created successfully");
    }

    if (Object.keys(userData).length === 0) {
      return res.status(404).json({
        success: false,
        message: "Error in fetched data",
      });
    }

    ///////////////////////////////
    // set-cookie for testing
    ///////////////////////////////
    // const { token } = userData;
    // console.log(token);
    // res.cookie(keys.cookie_name.customer, token, {
    //   httpOnly: true,
    // });
    ///////////////////////////////

    // SUCCESSFULLY AUTHENTICATION //
    res.status(200).json({
      success: true,
      message: "OTP Verification Successful",
      status,
      ...userData,
      // testVariable: { otp, OTP, userData: userData },
    });

    destroyOTP();
  } catch (error) {
    console.log(red, `Catched Errorr >>> `);
    console.log(error);
    const errorMessage = errorHandler(error);
    res.status(400).json({ success: false, error: errorMessage });
  }
});

// GET CUSTOMER DETAILS API //
router.get("/profile", requireUserAuth, (req, res) => {
  try {
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

// UPDATE CUSTOMER DETAILS API //
router.put("/update", requireUserAuth, verifyOtp, async (req, res) => {
  try {
    console.log(req.body, "update");
    if (!req.user || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }
    const userId = req.user._id;
    const update = req.body;
    const query = { _id: userId };

    const userUpdate = await User.findOneAndUpdate(query, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Your profile is successfully updated",
      user: userUpdate,
    });

    destroyOTP();
  } catch (error) {
    console.log("update error", error);
    res.status(400).json({
      success: false,
      error: "Your request could not be processed. Please try again",
    });
  }
});

// GENERATE OTP //
const generateOTP = (actiontype) => {
  const characters = keys.otp.characters;
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  var generationTime = Date.now();
  var otpValidity = keys.otp.validity;
  var expirationTime = new Date().getTime() + otpValidity * 60 * 1000;

  console.log(`otp generated at:  ${new Date(generationTime)}`);
  console.log(`otp expires at:  ${new Date(expirationTime)}`);

  return { otp, otpValidity, actiontype, generationTime, expirationTime };
};

// DESTROY OTP //
const destroyOTP = () => {
  if (Object.keys(OTP).length !== 0) {
    for (const key in OTP) {
      delete OTP[key];
    }
    console.log(OTP, "otp destroyed");
  }
};

// SEND OTP TO MOBILE NO //
// const sendSMS = async (mobileNo, massage) => {
//   const apikey = keys.sms_gateway.api_key;
//   const apisender = keys.sms_gateway.api_sender;
//   const msg = massage;
//   const num = mobileNo;
//   const encoded_msg = encodeURIComponent(msg);

//   // Check if required parameters are present
//   if (!apikey || !apisender || !msg || !num || !encoded_msg) {
//     return {
//       ErrorCode: "Url Error",
//       ErrorMessage: "Error in required parameters in url of SMS gateway",
//     };
//   }

//   const url = `https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apikey}&senderid=${apisender}&channel=2&DCS=0&flashsms=0&number=${num}&text=${encoded_msg}&route=1`;
//   const { data } = await axios.get(url);
//   return data;
// };

// CREATE TOKEN //
const createToken = (payload) => {
  const maxAge = 3 * 24 * 60 * 60;
  return jwt.sign(payload, keys.secret_key, { expiresIn: maxAge });
};

// FETCH USER-DATA & JWT //
const fetchUserData = (user) => {
  const payload = {
    id: user.id,
  };

  return {
    // id: user.id,
    // fname: user.fname,
    // lname: user.lname,
    // phone_number: user.phone_number,
    // created: user.created,
    // token: createToken(payload),
    user: user._doc,
    token: createToken(payload),
  };
};

// SIGNUP //
const signup = async (fname, lname, phone_number) => {
  // validate input
  if (!fname || !lname || !phone_number) {
    throw new Error("Missing required fields");
  }

  // create new user object
  const user = new User({
    fname,
    lname,
    phone_number,
  });

  // save user to the database
  const registeredUser = await user.save();

  if (!registeredUser) {
    throw new Error("Error in fetching data from Database");
  }
  return fetchUserData(registeredUser);
};

// LOGIN //
const login = async (id) => {
  if (!id) {
    throw new Error("Missing required fields");
  }

  const user = await User.findById(id);

  if (!user) {
    throw new Error("Error in fetching data from Database");
  }
  return fetchUserData(user);
};

/**
 * ERROR HANDLER
 *
 * @param {Error} object - The error object to handle.
 * @returns {string} - The appropriate error message based on the error object.
 */
const errorHandler = (error) => {
  if (error.message.includes("Missing required fields")) {
    return error.message;
  }

  if (error.message.includes("Error in fetching data from Database")) {
    return error.message;
  }

  if (error.code === 11000 && error.name === "MongoServerError") {
    return "Phone number is already linked to a another account";
  }
};
module.exports = router;
