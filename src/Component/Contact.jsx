import React from 'react';

const Contact = () => {
    return (
        <div className=" h-screen flex justify-center items-center bg-green-200 p-4 ">
        <div className="flex justify-content-center bg-white rounded-xl shadow-md">
          <div>
            <div className=" p-5">
              <h4 className="text-center font-bold text-2xl my-6">
              Contact Us
              </h4>

              <input
                placeholder=" Name "
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}
              <br />
              <input
                placeholder=" Email"
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}<br/>
               <input
                placeholder=" Phone"
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}<br/>
               <input
                placeholder=" Subject"
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-8 w-80"
              />{" "}<br/>
                <textarea
                placeholder=" Message"
                type="email"
                className=" focus:outline-none focus:ring focus:border-blue-500 rounded-md m-2 bg-yellow-100 h-16 w-80"
               ></textarea> <br/>
              <button className=" rounded-md m-2 bg-yellow-600 h-8 w-80 text-white hover:bg-yellow-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;