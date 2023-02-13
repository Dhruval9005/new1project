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
    {
      link: "/community",
      label: "Community",
    },
  ];

  let users = {
    fname: "Vedant",
    lname: "Pandya",
    // email: "Pandyavedant@gmail.com",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
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
