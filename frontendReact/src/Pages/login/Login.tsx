import axios from "axios";
import { useState } from "react";
import keys from "../../../config/keys";
import { IconCheck } from "@tabler/icons";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import "./Login.css"
import imgt from "../../assets/login1.png"
import Popup from 'reactjs-popup';
const numAuth = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

const Login = ({ user }: any) => {
  const navigate = useNavigate();
  let [mobileNumber, setMobileNumber] = useState("");
  let [massage, setMassage] = useState("");



 


  


  async function SendMobile() {
    
    if (numAuth.test(mobileNumber)) {
      // setMassage("");
      try {
        let response = await axios.get(
          `${keys.server_url}/user/find-user/${mobileNumber}`
        );
        if (response.data.success) {
          try {
            let res = await axios.post(`${keys.server_url}/user/send-otp`, {
              mobileNo: Number(response.data.data.phone_number),
              actiontype: "login",
            });
            user(response.data.data);

            navigate(`/login/otp`);

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
      } catch (err: any) {
        if (
          err.response.data.error == "No user found with this phone number."
        ) {
          showNotification({
            title: "No User Found",
            message: "",
            autoClose: 2000,
            color: "red",
            disallowClose: false,
          });
        }
      }
    } else {
      showNotification({
        title: "please enter valid mobile number",
        message: "",
        autoClose: 2000,
        color: "red",
        disallowClose: false,
      });
      // setMassage("please enter valid mobile number");
    }
  }


 

 
 

  return (
    <> 
      <div className="flex-container">
        <div className="style">
          <img className="md:pt-1" src={imgt} />
        </div>
        <div className="styles">


          <div className="Login md:pb-10 my-30 h-fit">
            <div className="container relative flex flex-col justify-center overflow-hidden mx-auto">
              <div className="sm:w-96  mainddivlogin border w-full p-6 m-auto bg-white rounded-md shadow-lg ">
                <h1 className="text-3xl mt-4 loginfont font-semibold text-center text-purple-700 underline">
              Welcome Too  Tranx
                </h1>
                <div className="input-group w-full mt-10">
                  <label className="label">Mobile Number*</label>
                  <input
                    maxLength={10}
                    name="Mobile"
                    id="Mobile"
                    className="block w-full  text-sm text-gray-900 border border-gray-300   bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-1200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    type="tel"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                  {/* {massage && <label className="text-red-700">{massage}</label>} */}
                </div>
                <div className="mt-8">
                  <button
                    className=" loginbtn w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                    // type="submit"
                    onClick={SendMobile}
                  >
                    Send otp
                  </button>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full loginbtn  px-4 py-2 tracking-wide text-purple-600 transition-colors duration-200 transform border-purple-700 rounded-md hover:border-purple-600 focus:outline-none focus:border-purple-600"
                    onClick={() => navigate("/signup")}
                  >
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


    </>
    
  );
};

export default Login;
