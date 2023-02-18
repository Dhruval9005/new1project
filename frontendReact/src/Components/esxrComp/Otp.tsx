import axios from "axios";
import keys from "../../../config/keys";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { showNotification } from "@mantine/notifications";

const Otp = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "otp",
    "user",
    "userdata",
  ]);
  const [OTP, setOTP] = useState("");
  // let [massage, setMassage] = useState("");
  let user = cookies.user.data.data;

  async function login() {
    if (cookies.user.data.success) {
      let id = cookies.user.data.data._id;
      console.log(keys.server_url);
      try {
        let res = await axios.post(`${keys.server_url}/user/verify-otp`, {
          otp: OTP,
          user: { id },
        });
        if (res.data.success) {
          navigate("/");
          removeCookie("otp");
          removeCookie("user");
          setCookie("userdata", res.data.userData, { path: "/" });
        }
      } catch (err) {
        console.log(err);
        // setMassage("OTP Verification Failed");
        showNotification({
          title: "OTP Verification Failed",
          message: "",
          autoClose: 2000,
          color: "red",
          disallowClose: false,
        });
      }
    } else {
      try {
        let res = await axios.post(`${keys.server_url}/user/verify-otp`, {
          otp: OTP,
          user: cookies.userdata,
        });
        if (res.data.success) {
          navigate("/");
          removeCookie("otp");
          removeCookie("user");
          setCookie("userdata", res.data.userData, { path: "/" });
        }
        console.log(res);
      } catch (err) {
        console.log(err);
        // setMassage("OTP Verification Failed");
        showNotification({
          title: "OTP Verification Failed",
          message: "",
          autoClose: 2000,
          color: "red",
          disallowClose: false,
        });
      }
    }
  }

  async function Resendotp() {
    try {
      let res = await axios.post(`${keys.server_url}/user/send-otp`, {
        mobileNo: Number(user.phone_number),
      });
      setCookie("otp", res, { path: "/" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="otp">
      <div className="container relative flex flex-col justify-center overflow-hidden mx-auto">
        <div className="m-auto bg-white rounded-md lg:max-w-xl sm:max-w-fit">
          {/* <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            {cookies.user.data.success ? "Login" : "SignUp"}
          </h1> */}
          <div className="input-group w-full mt-10 text-center">
            <label className="label">OTP</label>
            <div className="p-3 flex justify-center">
              <OTPInput
                inputStyles={{ padding: "0px" }}
                value={OTP.toUpperCase()}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="text"
                disabled={false}
              />
            </div>
            <ResendOTP onResendClick={Resendotp} />
          </div>
          {/* {massage && <label className="text-red-700">{massage}</label>} */}
          {/* <div className="mt-6">
            <button
              onClick={login}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              {cookies.user.data.success ? "Login" : "SignUp"}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Otp;
