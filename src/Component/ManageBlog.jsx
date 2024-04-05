import React from "react";
import { FaRegEdit} from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
const ManageBlog = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="flex justify-content-center h-screen w-5/12 bg-white rounded-xl shadow-md">
        <div className=" flex h-24 w-11/12 bg-yellow-300 my-8 rounded-md">
            <img className="h-18 w-30 m-2 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCnubTP8w55xIcEezwm30z9jGti-Sv23AI0-LLUkVPw&s" alt="" />
        <div className="">
            <h6 className="pt-2">Welcome to Happy Tour, your ultimate guide to</h6>
            <span className="">Md.Mehedi Hasan</span>
            <span className='flex space-x-1'><p className='pt-2'><GiWorld/></p> <p className=' text-black'>cox's bazar</p></span>
        </div>
        <div className="ml-16 mt-4 space-x-1">
            <span className="cursor-pointer"><FaRegEdit/></span>
            <span className="cursor-pointer"><MdDelete/></span>
        </div>

        </div>


      </div>
    </div>
  );
};

export default ManageBlog;
