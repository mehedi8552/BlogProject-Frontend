import React from 'react';
import { GiWorld } from "react-icons/gi";
const ProductCard = () => {
    return (
        <div className='flex justify-center'>
        <div className='h-60 w-52 bg-yellow-300 m-6 rounded-md'>
         <img className='h-2/4 w-52 rounded-t-md' src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/sid-rahman/EpQzEFNxtUgYeWpvZKkmW6zKEiQnkec4VcTrCXgZm9jvt9aKYgRjdA6t6GDQg5mnEY3.jpg" alt="" />  
        <p className='m-1 ml-2'> Attractions & Tourist Spots (2024)</p>
        <span className='ml-2'><span className='font-bold'>Category:</span> Safety</span>
        <div className='ml-2 flex'><span className='mt-1 mr-1'><GiWorld/></span><span className=''>Cox'S Bazar</span></div>
        </div>
        </div>
    );
};

export default ProductCard;