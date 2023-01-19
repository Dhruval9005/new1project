import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const numAuth = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const Login = () => {
  let naviget = useNavigate();
  let [mobileNumber, setMobileNumber] = useState("");
  let [massage, setMassage] = useState("");

  async function SendMobile() {
    if (numAuth.test(mobileNumber)) {
      setMassage("");
      try {
        // let res = await axios.post("http://localhost:8080/login", {
        //   mobileNumber,
        // });

        naviget(`/otp`);

      } catch (err) {
        console.log(err);
      }
    } else {
      setMassage("please enter valid mobile number");
    }
  }

  return (
    <div className="Login pt-40 h-screen">
      <div className="container relative flex flex-col justify-center mt-10 overflow-hidden mx-auto">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl sm:max-w-fit">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Login
          </h1>
          <div className="input-group w-full mt-10">
            <label className="label">Mobile Number</label>
            <input
              name="Mobile"
              id="Mobile"
              className="input w-full"
              type="text"
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            {massage && <label className="text-red-700">{massage}</label>}
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={SendMobile}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
