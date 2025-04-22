import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import moment from 'moment';


const Banner = () => {
    return (
        <div>
          <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover  bg-center w-full h-screen absolute'>
        <div className='bg-black/50 w-full min-h-screen'>
<motion.div className='relative flex flex-col justify-center items-center top-72'>
    <motion.h1 animate={{scale:1.5}} transition={{duration:3,delay:2}} className='text-white text-7xl mb-12'>Enjoy the Experience</motion.h1 >
    <p className='text-white text-3xl'>Everything you can dream about, available here, just for 50$ per night</p>
</motion.div>



<div className='mx-96'>
<div className='flex lg:py-10 justify-center items-center relative gap-10 bg-white top-96 p-[20px]'>
     <p className="input bg-[#f5f5f5] input-bordered w-full max-w-xs">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    <select className='p-[10px] bg-[#f5f5f5] w-44 border-2 border-solid  border-[#ccc]'>
        <option className=''>Guest</option>
        <option>Guest 1</option>
        <option>Guest 2</option>
    </select>
    <select className='p-[10px] bg-[#f5f5f5] w-44 border-2 border-solid  border-[#ccc]'>
        <option>Children</option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    <button className='bg-black w-44 hover:bg-[#b55b02] hover:text-black text-white p-[10px] border-none cursor-pointer'>Check Rates</button>
</div>
</div>

        </div>
          </div>
      
        </div>
    );
};

export default Banner;