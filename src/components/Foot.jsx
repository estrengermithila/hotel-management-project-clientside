import React from 'react';
import f from '../assets/f1.jpeg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpeg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.jpeg'
import f6 from '../assets/f6.jpg'

const Foot = () => {
    return (
        <div className='max-w-7xl flex flex-col  justify-center mx-auto h-[600px]'>
           
           
            <div className='flex mb-8'>
                <div className='w-1/4'><p className='text-white text-xl font-semibold'>Hotello</p></div>
                <div className='w-1/4'><p className='text-white text-xl font-semibold'>GALLERY</p></div>
                <div className='w-1/4'><p className='text-white text-xl font-semibold'>CONTACT US</p></div>
                <div className='w-1/4'><p className='text-white text-xl font-semibold'>Stay in touch</p></div>
            </div>

            <div className='flex gap-6'>
            <div className='w-1/4'>
     
        <p className='text-[#949892]'>We always strive for growth and development as StylemixThemes. We don’t want to have a large team, we want to have a team that works in unity. Our slogan is “Every day is the last day”.</p>
        </div>

                <div className='grid grid-cols-3 gap-3 w-1/4'>
                              <img className='w-36 h-28' src={f} alt="" />
                              <img className='w-36' src={f2} alt=""  />
                              <img className='w-36' src={f3} alt="" />
                              <img className='w-36' src={f4} alt="" />
                              <img className='w-36' src={f5} alt="" />
                              <img className='w-36' src={f6} alt="" />
                            </div>

                            <div className='flex w-1/4 flex-col'>
                            <div className='mb-4'>
            <p className='text-[#949892]'>1010 Berkler avenue, Brooklyn,</p>
          <p className='text-[#949892]'>New York City, NY 10018 US</p>
          </div>
          <div className='mb-4'>
            <p className='text-[#949892]'>Tel.: +1 998 150 3020
            </p>
            <p className='text-[#949892]'>Fax.: +1 998 150 3020</p>
          </div>
          <div>
            <p className='text-[#949892]'>info@stylemixthemes.com</p>
          </div>
                            </div>


                            <div className='w-1/4'>
       
        <input className='p-1' type="email" name="email" placeholder='Your email address' id="" />
       <p className='text-[#949892] mt-4'>Enter your email address for promotions and news.</p>
        </div>



            </div>
            <div className='border mt-12 mb-7 border-x'></div>
            <div>
                <p className='text-[#949892]'>Copyright © 2025 Hotello Plus Theme by StylemixThemes</p>
            </div>

        </div>
    );
};

export default Foot;