import React from 'react';
import { GiSwirlRing } from 'react-icons/gi';
import { motion } from "motion/react"

const ChooseHeading = () => {
    return (
        <div className=''>
            <div className='flex justify-center flex-col items-center'>
            <p className='mt-14 text-5xl text-[#b55b02]'><GiSwirlRing />
            </p>
            <motion.h1 animate={{ scale:1.1 ,color:'#b55b02' }} transition={{duration:3}} className='mt-5 mb-4 text-5xl font-semibold'>Why Choose Us</motion.h1 >
            <p className='text-[#7a7a7a] mb-7 mt-4 text-lg text-center'>Of is appear in face creeping and whose don’t blessed. <br /> Female our herb you’ll female earth second moveth.</p>
            </div>
        </div>
    );
};

export default ChooseHeading;