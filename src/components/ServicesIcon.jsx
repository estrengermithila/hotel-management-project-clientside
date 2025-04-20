import React from 'react';
import { FaAmbulance, FaCar } from 'react-icons/fa';
import { FaCartFlatbed } from 'react-icons/fa6';
import { MdLiveTv } from 'react-icons/md';
import { RiSignalWifi2Fill } from 'react-icons/ri';
import { TbWashDry1 } from 'react-icons/tb';
import { motion } from "motion/react"

const ServicesIcon = () => {
    return (
        <div className='max-w-7xl mx-auto'>
                   <div className='grid grid-cols-3 mt-8 mb-8'>
                   <div className=' flex flex-col justify-center items-center gap-4'>
                        <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><FaCar />

                        </p></div></motion.button>
                        <p className='mt-4 text-[#7a7a7a] text-xl'>Free Transfer</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-4'>
                        <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><FaCartFlatbed  />
        
                        </p></div></motion.button>
                        <p className='mt-4 text-[#7a7a7a] text-xl'>Hotel Porter</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-4'>
                        <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><FaAmbulance  />
                        </p></div></motion.button>
                        <p className='mt-4 text-[#7a7a7a] text-xl'>Safe & Secure</p>
                    </div>
                    
                    
                   </div>
        
        
                   <div className='grid grid-cols-3'>
                   <div className=' flex flex-col justify-center items-center gap-4'>
                        <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><RiSignalWifi2Fill />
        
                        </p></div></motion.button>
                        <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>High-Speed WiFi</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center gap-4'>
                        <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><TbWashDry1 />
                        </p></div></motion.button>
                        <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>Laundry service</p>
                    </div>
                    
                    <div className=' flex flex-col justify-center items-center gap-4'>
                       <motion.button  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}> <div className='rounded-full p-14 border-2 shadow-xl border-solid'>
                            <p className='text-6xl text-center hover:text-[#b55b02]'><MdLiveTv  />
                        </p></div></motion.button>
                        <p className='mt-4 mb-12 text-[#7a7a7a] text-xl'>Cable TV</p>
                    </div>
                   </div>
                </div>
    );
};

export default ServicesIcon;