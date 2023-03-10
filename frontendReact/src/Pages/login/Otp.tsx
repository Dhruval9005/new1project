import axios from "axios";
import { useState } from "react";
import keys from "../../../config/keys";
import { useCookies } from "react-cookie";
import { IconCheck } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import { showNotification } from "@mantine/notifications";

const Otp = ({ user, setUser }: any) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["customer_access_token"]);
  const [OTP, setOTP] = useState("");

  async function login() {
    if (user._id) {
      let id = user._id;

      try {
        let res = await axios.post(`${keys.server_url}/user/verify-otp`, {
          otp: OTP,
          user: { id },
        });
        if (res.data.success) {
          setUser(null);
          setCookie("customer_access_token", res.data.token, { path: "/" });
          navigate("/");
        }
      } catch (err) {
        console.log(err);
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
          user: user,
        });
        if (res.data.success) {
          setUser(null);
          setCookie("customer_access_token", res.data.token, { path: "/" });
          navigate("/");
        }
        console.log(res);
      } catch (err) {
        console.log(err);
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

      showNotification({
        title: "OTP Send",
        message: "",
        autoClose: 2000,
        color: "green",
        icon: <IconCheck size={16} />,
        disallowClose: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="otp md:pt- my-28 h-fit">
      <div className="container relative flex flex-col justify-center mt-10 overflow-hidden mx-auto">
        <div className="sm:w-96 w-full p-6 m-auto bg-white rounded-md shadow-lg my-3">
          <h1 className="md:text-2xl text-xl font-semibold text-center">
            Otp send to {user.phone_number}
          </h1>
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
          <div className="mt-6">
            <button
              onClick={login}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Verify
            </button>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-purple-600 transition-colors duration-200 transform border-purple-700 rounded-md hover:border-purple-600 focus:outline-none focus:border-purple-600"
              onClick={() => navigate("/login")}
            >
              Go back to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
