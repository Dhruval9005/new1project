/**
 * OTP VERIFICATION MIDDLEWARE
 */
const verifyOtp = (OTP) => {
  return (req, res, next) => {
    try {
      const { otp } = req.body;
      const upperCaseOtp = otp.toUpperCase();
      // console.log(req.body, "verify otp body");
      if (
        Object.keys(OTP).length === 0 ||
        OTP.actiontype !== "profile-update"
      ) {
        return res.status(404).json({
          success: false,
          message: "OTP not exist for verification",
        });
      }
      console.log(OTP, "OTP");

      if (upperCaseOtp !== OTP.otp) {
        return res
          .status(400)
          .json({ success: false, message: "OTP Verification Failed" });
      }

      const currentTime = Date.now();
      if (OTP.expirationTime < currentTime) {
        return res.status(400).json({ success: false, message: "OTP Expired" });
      }

      next();
    } catch (error) {
      console.log(error);
    }
  };
};

module.exports = verifyOtp;
