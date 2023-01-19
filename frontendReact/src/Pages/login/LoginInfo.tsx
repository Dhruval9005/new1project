import React from "react";

export const LoginInfo = () => {
  return (
    <div className="logininfo pt-40 h-screen">
      <div className="container relative flex flex-col justify-center mt-10 overflow-hidden mx-auto">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl sm:max-w-fit">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            User Info
          </h1>
          <div className="input-group w-full mt-10">
            <label className="label">First Name</label>
            <input
              name="fname"
              id="fname"
              className="input w-full"
              type="text"
              required
            />
            <label className="label">Last Name</label>
            <input
              name="lname"
              id="lname"
              className="input w-full"
              type="text"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              id="email"
              className="input w-full"
              type="email"
              required
            />
            <label className="label">Address</label>
            <input
              name="address"
              id="address"
              className="input w-full"
              type="text"
              required
            />
          </div>
          <div className="mt-6">
            <button className="font-bold text-2xl w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
