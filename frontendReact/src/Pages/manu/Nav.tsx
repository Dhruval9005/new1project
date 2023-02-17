import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navbar } from "../../Components/esxrComp/Navbar";

const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  let [user, setUser] = useState();

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
        <Navbar links={link} user={user} />
      </div>
    </div>
  );
};

export default Nav;
