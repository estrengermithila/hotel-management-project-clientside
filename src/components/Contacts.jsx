import React from 'react';
import cntct1 from '../assets/contact1.jpg'
import cntct2 from '../assets/contact2.jpg'
import FeedBackForm from './FeedBackForm';
import { motion } from "motion/react"

const Contacts = () => {
    return (
        <div>
            <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover bg-black/50 w-full h-[400px]  bg-center w-full'>
                <div className='bg-black/50 w-full min-h-[400px]'>
                <div className='relative flex flex-col justify-center items-center top-48'> 
                <h1 className='text-white text-4xl font-bold'>Contact</h1>
                </div>
                </div>
            </div>
            <div className='flex justify-between h-[300px] mt-16 max-w-5xl mx-auto'>
                <div className='w-2/4'>
                    <h1 className='mt-12 mb-4 text-[#b55b02] font-semibold text-2xl'>WE WORK ON THE FOREFRONT</h1>
                    <p>To learn more about our service offerings and industry expertise or to have an Consulting professional contact you directly, please fill out the form below or submit an email.</p>
                </div>
                <div>
                    <div className='flex gap-8 mt-8 mb-5'>
                        <div className=''>
                       <motion.button  animate={{scale:1.1}} transition={{repeat:Infinity,duration:3}}
  
 > <img className='w-20 rounded-full' src={cntct1} alt="" srcset="" /></motion.button>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Mithila Farjana</h1>
                            <p>Administrator</p>
                            <p >(33) 745 128 9714</p>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <div>
                        <motion.button  
  animate={{scale:1.1}} transition={{repeat:Infinity,duration:3}}><img className='w-20 rounded-full' src={cntct2} alt="" srcset="" /></motion.button>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Mithila Farjana</h1>
                            <p>Administrator</p>
                            <p>(33) 745 128 9714</p>
                        </div>
                    </div>
                </div>
            </div>
            <FeedBackForm></FeedBackForm>
        </div>
    );
};

export default Contacts;