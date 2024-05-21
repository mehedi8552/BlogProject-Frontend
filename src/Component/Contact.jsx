
import { BiWorld } from "react-icons/bi";
import { FaLocationArrow,FaPhone,FaMailBulk } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bxgj6je", "template_6vecemf", form.current, {
        publicKey: "McwWtiDQswb2V4eyZ",
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
      <div className=' bg-slate-400'>
        <div className="md:justify-center md:flex items-center pt-28">
        <div className=' md:flex md:h-screen md:w-4/6 md:pl-8 pl-14 py-4'>
          <div className='h-96 w-11/12 lg:rounded-l-md bg-black md:h-5/6'>
          <div className="flex justify-center lg:pt-20">
          <form className="space-y-3" ref={form} onSubmit={sendEmail}>
            <p className="text-xl font-semibold pl-20 pt-12 text-white">Send Your Message</p>
            <input
              placeholder=" Name"
              className="w-80 h-10 rounded-md bg-gray-100 focus:outline-amber-200"
              type="text"
              name="u_name"
            />
            <br/>
            <input
              placeholder=" Email"
              className=" w-80 h-10 rounded-md bg-gray-100 focus:outline-amber-200"
              type="email"
              name="u_email"
            />
            <br/>
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
          <div className='h-fit w-11/12 lg:rounded-r-md bg-white p-3 md:h-5/6'>
            <div className='pl-8 lg:pt-20'>
              <h3>Contact us</h3>
            <p className='font-thin'>We're open for any suggestion or just to have a chat</p>
            <div className='flex'> 
            <p className=' mt-2 h-12 w-12 border-indigo-600 rounded-full border '>
              <div className='py-3 px-3'>
              <FaLocationArrow/> 
              </div>
            </p>
             <p className='pl-3 sm:mt-3'> <strong>Address: </strong>mirpur 11,Dhaka bangladesh</p>
             </div>
             <div className='flex '> 
            <p className=' mt-2 h-12 w-12 border-indigo-600 rounded-full border '>
              <div className='py-3 px-3'>
              <FaPhone/> 
              </div>
            </p>
             <p className='pl-3 py-3'><strong>Phone:</strong> +8801770228395</p>
             </div>
             <div className='flex '> 
            <p className=' mt-2 h-12 w-12 border-indigo-600 rounded-full border '>
              <div className='py-3 px-3'>
              <FaMailBulk/> 
              </div>
            </p>
             <p className='pl-3 py-3'><strong>Email:</strong> mehedi193002106@gmail.com</p>
             </div>
             <div className='flex '> 
            <p className=' mt-2 h-12 w-12 border-indigo-600 rounded-full border '>
              <div className='py-3 px-3'>
              <BiWorld/> 
              </div>
            </p>
             <p className='pl-3 py-3'> <strong>Website:</strong> yoursite.com</p>
             </div>
             </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Contact;