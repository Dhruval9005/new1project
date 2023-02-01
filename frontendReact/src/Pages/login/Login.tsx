import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const numAuth = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const Login = (props: any) => {
  let naviget = useNavigate();
  let [mobileNumber, setMobileNumber] = useState("");
  let [massage, setMassage] = useState("");
  const [cookies, setCookie] = useCookies(["otp", "user"]);

  async function SendMobile() {
    if (numAuth.test(mobileNumber)) {
      setMassage("");
      try {
        let response = await axios.get(
          `http://localhost:3000/user/find-user/${mobileNumber}`
        );
        if (response.data.success) {
          try {
            let res = await axios.post(`http://localhost:3000/user/send-otp`, {
              mobileNo: Number(response.data.data.phone_number),
              id: response.data.data._id,
            });
            naviget(`/otp`);
            setCookie("user", response, { path: "/" });
            setCookie("otp", res, { path: "/otp" });
          } catch (err) {
            console.log(err);
          }
        } else {
          try {
            let res = await axios.post(`http://localhost:3000/user/send-otp`, {
              mobileNo: mobileNumber,
            });
            naviget(`/logininfo`);
            setCookie("user", response, { path: "/" });
            setCookie("otp", res, { path: "/otp" });
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setMassage("please enter valid mobile number");
    }
  }

  return (
    <div className="Login md:pt-32 my-32 h-fit">
      <div className="container relative flex flex-col justify-center overflow-hidden mx-auto">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl sm:max-w-fit">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Login
          </h1>
          <div className="input-group w-full mt-10">
            <label className="label">Mobile Number</label>
            <input
              name="Mobile"
              id="Mobile"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
