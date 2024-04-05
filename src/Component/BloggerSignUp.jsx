import React from "react";

const BloggerSignUp = () => {
  return (
    <div className="flex justify-center m-20 bg-white ">
      <div className="flex justify-content-center bg-white rounded-xl shadow-md">
        <div>
          <div className=" p-5">
            <h4 className="text-center font-bold text-2xl my-6">
              Blogger Sign Up
            </h4>
            <input
              placeholder=" Name"
              type="email"
              className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
            />{" "}
            <br />
            <input
              placeholder=" Email"
              type="email"
              className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
            />{" "}
            <br />
            <input
              placeholder=" Password"
              type="email"
              className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
            />{" "}
            <br />
            <input
              placeholder=" Repassword"
              type="email"
              className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
            />{" "}
            <br />
            <button className=" rounded-md m-2 bg-yellow-600 h-8 w-80 text-white hover:bg-yellow-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggerSignUp;
