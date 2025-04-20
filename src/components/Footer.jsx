import React from 'react';
import f from '../assets/f1.jpeg'
import f2 from '../assets/f2.jpg'
import f3 from '../assets/f3.jpeg'
import f4 from '../assets/f4.jpg'
import f5 from '../assets/f5.jpeg'
import f6 from '../assets/f6.jpg'
const Footer = () => {
    return (
       <div className='flex justify-center gap-5 items-center max-w-7xl mx-auto h-[600px] border-2 border-red-700'>

        <div className='flex flex-col  w-1/4'>
        <h1>hotello</h1>
        <p>We always strive for growth and development as StylemixThemes. We don’t want to have a large team, we want to have a team that works in unity. Our slogan is “Every day is the last day”.</p>
        </div>

        <div className='w-1/4'>
            <p>GALLERY</p>
            <div className='grid grid-cols-3 gap-3'>
              <img className='w-36 h-28' src={f} alt="" srcset="" />
              <img className='w-36' src={f2} alt="" srcset="" />
              <img className='w-36' src={f3} alt="" srcset="" />
              <img className='w-36' src={f4} alt="" srcset="" />
              <img className='w-36' src={f5} alt="" srcset="" />
              <img className='w-36' src={f6} alt="" srcset="" />
            </div>
        </div>

        <div className='w-1/4'>
          <p>CONTACT US</p>
          <div>
            <p>1010 Berkler avenue, Brooklyn,</p>
          <p>New York City, NY 10018 US</p>
          </div>
          <div>
            <p>Tel.: +1 998 150 3020
            </p>
            <p>Fax.: +1 998 150 3020</p>
          </div>
          <div>
            <p>info@stylemixthemes.com</p>
          </div>
        </div>

        <div className='w-1/4'>
        <p>Stay in touch</p>
        <input type="email" name="email" placeholder='Your email address' id="" />
       <p>Enter your email address for promotions and news.</p>
        </div>
        <div></div>
       </div>
    );
};

export default Footer;