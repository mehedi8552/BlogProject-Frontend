import React from 'react';
import { NavLink } from "react-router-dom";
const Link = () => {
          const Component = [
                    { name: "C-Product", to: "/Create-Product" },
                    { name: "u-Product", to: "/update-product" },
                    { name: "b-login", to: "/blogger-login" },
                    { name: "B-Details", to: "/blog-details" },
                    { name: "B-List", to: "/blog-details" },
                    { name: "U-List", to: "/blog-details" },
                    
          ];

      return (
          <div className='flex justify-center' >
          
                    {
          Component.map((item, i)=>{

          return  (
                    <div className='h-10 w-20 p-1 bg-green-400 my-4 mx-1 rounded-md'>
                    <button key={i}>
                    <NavLink
                      className="no-underline text-black hover:text-yellow-400"
                      to={item.to}
                    >
                      {item.name}
                    </NavLink>
                  </button>
                  </div>
                     )})}
           </div> 
           
          );
};

export default Link;