import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar } from "../../Components/nav/Navbar";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import keys from "../../../config/keys";

const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "user",
    "customer_access_token",
  ]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
    setUser(cookies?.user);
  }, []);

  // console.log(cookies.token);

  let link = [
    {
      link: "/sell",
      label: "Sell phobne",
    },
    {
      link: "/buy",
      label: "Buy phone",
    },
    {
      link: "/repair",
      label: "Repair phone",
    },
  ];

  const getUser = async () => {
    if (!cookies) return;
    try {
      let res = await axios.get(`${keys.server_url}/user/profile`, {
        withCredentials: true,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="nav">
      <div className="mx-auto">
        <Navbar links={link} />
      </div>
    </div>
  );
};

export default Nav;
