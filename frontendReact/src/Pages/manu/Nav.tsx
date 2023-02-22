import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar } from "../../Components/nav/Navbar";
import { UserContext } from "../../context/UserContext";

const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser(cookies?.userdata);
  }, [cookies]);

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

  let users = {
    fname: "Vedant",
    lname: "Pandya",
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
