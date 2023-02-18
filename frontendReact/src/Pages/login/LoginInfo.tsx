import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LoginInfo = () => {
  let navigate = useNavigate();
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone_number, setPhone_Number] = useState("");
  let userdata = { fname, lname, phone_number };
  const [cookies, setCookie] = useCookies(["userdata"]);

  function sendData() {
    setCookie("userdata", userdata, { path: "/login" });
    navigate("/login");
  }

  return (
    <div className="logininfo md:pt-20 h-screen">
      <div className="container relative flex flex-col justify-center mt-10 overflow-hidden mx-auto">
        <div className="sm:w-96 w-full p-6 m-auto bg-white rounded-md shadow-lg my-3">
          <h1 className="md:text-2xl text-xl font-semibold text-center text-purple-700 underline">
            Sign up with mobile number
          </h1>
          <div className="input-group w-full mt-10">
            <label className="label">First Name</label>
            <input
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              name="fname"
              id="fname"
              type="text"
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <label className="label">Last Name</label>
            <input
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              name="lname"
              id="lname"
              type="text"
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <label className="label">Mobile Number</label>
            <input
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              name="mobile"
              id="mobile"
              type="text"
              onChange={(e) => setPhone_Number(e.target.value)}
              required
            />
          </div>
          <div className="mt-6">
            <button
              onClick={sendData}
              className="font-bold md:text-lg text-sm w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Save
            </button>
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-purple-600 transition-colors duration-200 transform border-purple-700 rounded-md hover:border-purple-600 focus:outline-none focus:border-purple-600"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInfo;
