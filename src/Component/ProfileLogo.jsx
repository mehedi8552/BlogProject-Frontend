import React from 'react';
import ProductStore from "../Store/ProductStore";
import { useEffect } from "react";
import ReactCardSlider from 'react-card-slider-component';
const ProfileLogo = () => {
    const { ProfileList, ProfileListRequest } = ProductStore();
    useEffect(() => {
        (async () => {
            await ProfileListRequest();
        })();
    }, []);

    return (
        <div>
            <h1 className='flex justify-center mt-4'>Blogger Profile</h1>
            <p className='flex justify-center'>You can able to here all Blogger Profile. </p>
        
        <div className='flex justify-center mt-6'>
            
            {
                ProfileList?.map((item, i) => {
                    return (
                        <div key={i} className=' flex items-center h-20 w-80 bg-yellow-300 m-2 rounded-md'> <div className='pl-4'>
                            <img className=' h-16 w-16 rounded-full p-1' src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/sid-rahman/EpQzEFNxtUgYeWpvZKkmW6zKEiQnkec4VcTrCXgZm9jvt9aKYgRjdA6t6GDQg5mnEY3.jpg" alt="" />
                        </div>
                            <div className='pl-4'>
                                <p className='m-1 ml-2 font-bold'>{item.name}</p>
                                <p className='m-1 ml-2 font-semibold text-cyan-600'>{item.mobile}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
};

export default ProfileLogo;