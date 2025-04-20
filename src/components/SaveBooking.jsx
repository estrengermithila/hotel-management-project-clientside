import React from 'react';
import { motion } from "motion/react"

const SaveBooking = () => {
    return (
        <div className='mt-16 h-[550px]'>
            <div className='bg-[url(./src/assets/bannerImage.jpg)] bg-no-repeat bg-cover  bg-center w-full h-[450px] absolute'>
        <div className='bg-black/50 w-full min-h-[450px]'>
        <div className='flex flex-col justify-center items-center relative top-28'>
            <h1 className='text-white text-7xl mb-6'>Book Early & Save</h1>
            <p className='text-white text-md text-center'>Book early and save up to 15% with Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit, sed do eiusmod tempor aliqua.</p>
        </div>
        <div className='flex justify-center items-center relative top-36'>
            <motion.button animate={{y:[0,12,0]}} transition={{repeat:Infinity,duration:4}} className='btn border-[#b55b02] text-white hover:text-[#b55b02] hover:bg-transparent bg-[#b55b02]'>BOOK ON BOOKING.COM</motion.button>
        </div>
        </div>
            </div>
        </div>
    );
};

export default SaveBooking;