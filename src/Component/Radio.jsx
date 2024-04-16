import React from 'react';

const Radio = () => {
    return (
        <div div className = " md:space-x-40 md:justify-between md:flex md:mx-4">
        <div className='flex justify-center '>
           <div className='h-80 w-96 bg-green-500 rounded-md shadow-md my-10 hover:shadow-xl hover:bg-yellow-300 md:h-96 '>
            <h3 className='flex justify-center my-2 font-light hover:text-white'>Lorem ipsum dolor sit amet.</h3>
            <div className=' flex justify-center'>
                <div className='h-40 w-40 bg-white rounded-full mt-5  '>
                </div>
            </div>
            </div> 
        </div>
                <div className='flex justify-center'>
                <div className='h-80 w-96 bg-green-500 rounded-md shadow-md my-10 hover:shadow-xl hover:bg-yellow-300 md:h-96'>
                 <h3 className='flex justify-center my-2 font-light hover:text-white'>Lorem ipsum dolor sit amet.</h3>
                 <div className=' flex justify-center'>
                     <div className='h-40 w-40 bg-white rounded-full mt-5  '>
                     </div>
                 </div>
                 </div> 
             </div>
             <div className='flex justify-center'>
                <div className='h-80 w-96 bg-green-500 rounded-md shadow-md my-10 hover:shadow-xl hover:bg-yellow-300 md:h-96'>
                 <h3 className='flex justify-center my-2 font-light hover:text-white'>Lorem ipsum dolor sit amet.</h3>
                 <div className=' flex justify-center'>
                     <div className='h-40 w-40 bg-white rounded-full mt-5  '>
                     </div>
                 </div>
                 </div> 
             </div>
             </div>
    );
};

export default Radio;