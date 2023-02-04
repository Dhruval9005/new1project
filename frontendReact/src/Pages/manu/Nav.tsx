import React, { useEffect, useState } from "react";
import Sidebir from "./Sidebir";
import { useCookies } from "react-cookie";

const Nav = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "userdata"]);
  let [user, setUser] = useState();

  useEffect(() => {
    setUser(cookies?.userdata);
  }, [cookies]);

  function darkmod() {
    document.body.classList.toggle("dark");
  }

  function singOut() {
    removeCookie("userdata");
    removeCookie("user");
  }

  return (
    <div className="nav">
      <div className="mx-auto">
        <Sidebir />
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4  text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <button
              className="text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              aria-controls="offcanvas"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                className="w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
            <a
              className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 ml-5"
              href="/"
            >
              <img src="" style={{ height: 15 }} loading="lazy" />
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                Tran<span className="text-purple-700">x</span>
              </span>
            </a>
            <div
              className="collapse navbar-collapse flex-grow items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav flex flex-col list-style-none ml-40">
                <li className="nav-item p-2">
                  <a
                    className="nav-link text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                    href="/sell"
                  >
                    Sell phone
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                    href="/buy"
                  >
                    Buy phone
                  </a>
                </li>
                <li className="nav-item p-2">
                  <a
                    className="nav-link text-lg text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                    href="/repair"
                  >
                    Repair phone
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center relative">
              {user ? (
                <div className="dropdown relative">
                  <a
                    className="dropdown-toggle flex items-center hidden-arrow right-full"
                    href="#"
                    id="dropdownMenuButton2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <img
                      src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                      className="rounded-full w-32"
                      style={{ height: 50, width: 50 }}
                      alt="Avatar"
                      loading="lazy"
                    /> */}
                    <div className="rounded-full w-12 h-12 bg-purple-700 grid justify-center content-center uppercase font-bold text-2xl text-white">
                      {user.fname.charAt(0)}
                      {user.lname.charAt(0)}
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0 w-40"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <p className="dropdown-item text-2xl text-black px-4 font-bold block w-full whitespace-nowrap bg-transparent">
                      {/* {user.phone_number} */}
                    </p>
                    <p className="dropdown-item text-2xl text-black px-4 font-bold block w-full whitespace-nowrap bg-transparent border-2 border-b-purple-700 py-2">
                      {user.fname}
                    </p>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                        href="/cart"
                      >
                        Cart
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                        href="/profile"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        href="#"
                      ></a>
                    </li>
                    <hr />
                    <li>
                      <button
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                        onClick={singOut}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mx-3">
                  <a href="/login">
                    <button className="text-sm w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                      Login
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
