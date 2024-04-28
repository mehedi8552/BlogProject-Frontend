import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bxgj6je", "template_6vecemf", form.current, {
        publicKey: "QlEKHdnoSPfusg3of",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="h-fit w-5/6 bg-white p-8 shadow-md rounded-md md:w-96">
        <div className="flex justify-center">
          <form className="space-y-3" ref={form} onSubmit={sendEmail}>
            <p className="text-xl font-semibold pl-20">Send Your Message</p>
            <input
              placeholder=" Name"
              className="w-80 h-10 rounded-md bg-gray-100 focus:outline-amber-200"
              type="text"
              name="u_name"
            />
            <br />
            <input
              placeholder=" Email"
              className=" w-80 h-10 rounded-md bg-gray-100 focus:outline-amber-200"
              type="email"
              name="u_email"
            />
            <br />
            <textarea
              placeholder=" Message"
              className="w-80 h-16 rounded-md bg-gray-100 focus:outline-amber-200"
              name="message"
            />
            <br />
            <input
              className="w-80 h-10 rounded-md hover:shadow-md  bg-green-400 text-white"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
