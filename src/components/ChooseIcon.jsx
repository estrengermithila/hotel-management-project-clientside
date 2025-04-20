import React from 'react';
import { FaSpa } from 'react-icons/fa';
import { IoIosFitness, IoIosRestaurant } from 'react-icons/io';
import { LuConciergeBell } from 'react-icons/lu';
import { MdPool } from 'react-icons/md';
import { RiDrinks2Fill, RiSignalWifi2Fill } from 'react-icons/ri';
import { TbWashDry1 } from 'react-icons/tb';
import { motion } from "motion/react"

const ChooseIcon = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <div className='grid grid-cols-4 mt-8 mb-8'>
           <div className=' flex flex-col justify-center items-center gap-4'>
                
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}>
    <div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><RiSignalWifi2Fill />
                </p></div>
  </motion.button>
                <p className='mt-4 text-[#7a7a7a] text-xl'>Internet</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><RiDrinks2Fill />

                </p></div></motion.button>
                <p className='mt-4 text-[#7a7a7a] text-xl'>DRINKS</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><LuConciergeBell />
                </p></div></motion.button>
                <p className='mt-4 text-[#7a7a7a] text-xl'>CONCIERGE</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><MdPool />
                </p></div></motion.button>
                <p className='mt-4 text-[#7a7a7a] text-xl'>POOL</p>
            </div>
            
           </div>


           <div className='grid grid-cols-4'>
           <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><IoIosFitness />

                </p></div></motion.button>
                <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>FITNESS</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><TbWashDry1 />
                </p></div></motion.button>
                <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>LOUNDRY</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><IoIosRestaurant />
                </p></div></motion.button>
                <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>RESTAURANT</p>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                    <p className='text-6xl text-center hover:text-[#b55b02]'><FaSpa />
                </p></div></motion.button>
                <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>SPA</p>
            </div>
           </div>
        </div>
    );
};

export default ChooseIcon;