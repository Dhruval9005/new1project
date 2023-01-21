import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");

  async function login() {
    navigate(`/logininfo`);
  }

  return (
    <div className="otp md:pt-40 my-40 h-fit">
      <div className="container relative flex flex-col justify-center mt-10 overflow-hidden mx-auto">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl sm:max-w-fit">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Login
          </h1>
          <div className="input-group w-full mt-10 text-center">
            <label className="label">OTP</label>
            <div className="p-3 flex justify-center">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
              />
            </div>
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
          </div>
          <div className="mt-6">
            <button
              onClick={login}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
