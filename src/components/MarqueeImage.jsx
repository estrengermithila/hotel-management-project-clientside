import React from 'react';
import m1 from '../assets/f1.jpeg'
import second from '../assets/f2.jpg'
import third from '../assets/f3.jpeg'
import forth from '../assets/f5.jpeg'
import f4 from '../assets/f4.jpg'
import l1 from '../assets/l1.jpg'
import l3 from '../assets/l3.jpg'
import l4 from '../assets/l4.jpg'
import l5 from '../assets/l5.jpg'
import l6 from '../assets/l6.jpg'
import { div } from 'motion/react-client';
import Marquee from 'react-fast-marquee';

const MarqueeImage = () => {
    return (
        <div>
            <div className='flex'>

<Marquee speed={80} className='space-x-5'>
    

            
            <div className='w-[300px]'>
            <img src={l1} alt="" srcset="" />
        </div>
            <div className='w-[300px]'>
            <img src={l3} alt="" srcset="" />
        </div>
            <div className='w-[300px]'>
            <img src={l4} alt="" srcset="" />
        </div>
            <div className='w-[300px]'>
            <img src={l5} alt="" srcset="" />
        </div>
            <div className='w-[300px]'>
            <img src={l6} alt="" srcset="" />
        </div>

</Marquee>

            </div>
        </div>
    );
};

export default MarqueeImage;