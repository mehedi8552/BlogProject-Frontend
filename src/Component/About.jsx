import React from 'react';
import NumberCounter from 'number-counter';
const About = () => {
    return (
        <div className='flex h-screen items-center space-x-4 mx-16'>
            <div className='h-5/6 w-1/2 bg-white shadow-xl rounded-md'>
                <h3 className='m-6 mt-32 ml-8 font-bold'>We Provide <br /><span className='text-yellow-300'>Best Tour Guide</span></h3>
                <p className='m-6 ml-8 font-serif'>Welcome to Happy Tour, your ultimate guide to exploring the world's most captivating destinations! Founded with a passion for travel and a commitment to providing unforgettable experiences, we strive to connect travelers with the wonders of our planet.Welcome to Happy Tour, your ultimate guide to exploring the world's most captivating destinations! Founded with a passion for travel and a commitment to providing unforgettable experiences, we strive to connect travelers with the wonders of our planet.</p>
            </div>
            
            
            <div className='h-5/6 w-1/2 bg-white rounded-md shadow-xl my-3 ml-6'>
                <img className='h-1/2 w-11/12  m-6 ml-8 rounded-md' src="https://cdn.daily-sun.com/public/news_images/2021/10/30/Cox%E2%80%99s_Bazar.jpg" alt="" />
            <div className='flex space-x-4'>
                <div className='h-20 w-80 bg-white rounded-md shadow-md ml-9'>
                    <div className='m-2 pl-5'>
                    <h3 className='font-bold'></h3>
                    <NumberCounter className='font-bold increment text-4xl text-gray-600'  end={3} delay={2} postFix="+"/>
                    <p>Years Exprience</p>
                        </div>
                    </div>
                <div className='h-20 w-72 bg-white rounded-md shadow-md mr-9'>
                <div className='m-2 pl-5'>
                    <NumberCounter className='font-bold increment text-4xl text-gray-600'  end={350} delay={5} postFix="+"/>
                    <p>Positive Review</p>
                        </div>
                </div>
            </div>
            <div className='mr-3 my-4'>
            <div className='h-20 width: auto my-2 ml-9 mr-4 bg-white rounded-md shadow-md'>
            <div className='ml-60'>
             <NumberCounter className='font-bold increment text-4xl text-gray-600'  end={500} delay={2} postFix="+"/>
                    <p>Members</p>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default About;