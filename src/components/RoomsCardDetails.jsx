import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import MarqueeImage from './MarqueeImage';
import moment from 'moment';

const RoomsCardDetails = () => {
    const {id} = useParams()
    console.log(id)
    const data = useLoaderData()
    console.log(data)
    const onlyData = data.find((specificData) => specificData.id === Number(id));
     console.log(onlyData);
     const {roomOverview,details,category,roomSize,maxOccupancy,bedType,price,roomImage} = onlyData 
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-12 mb-8'>{roomOverview}</h1>
            <div className='max-w-[1480px] mx-auto flex gap-4'>
                <div className='w-3/4'>
                    <img src={roomImage} alt="" />
                </div>
                <div>

                <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h1 className='text-3xl  text-[#b55b02] font-bold p-2'>{roomOverview}</h1>
    <h2 className="text-md text-[#787778]">The Luxury Penthouse offers a truly extravagant experience, featuring a private rooftop terrace, a spacious living room, and a master bedroom with panoramic city views. This penthouse is designed for those who seek privacy, luxury, and exceptional service, combining high-end amenities and sophisticated design in every corner.</h2>
    <div className='flex gap-2 justify-center mt-5'>
    <p className='font-semibold flex'>Details:</p>
    <p className='text-[#787778] text-md'>{details}</p>
    </div>
    <div>
    <p className='font-semibold flex gap-2'>Category : <p className='text-[#787778] text-md'>{category}</p></p>
    
    </div>
    <div>
    <p className='font-semibold flex gap-2'>Room Size : <p className='text-[#787778] text-md'>{roomSize}</p></p>
    
    </div>
    <div>
    <p className='font-semibold flex gap-2'>Max Occupancy : <p className='text-[#787778] text-md'>{maxOccupancy}</p></p>
    
    </div>
    <div>
    <p className='font-semibold flex gap-2'>Bed Type :<p className='text-[#787778] text-md'>{bedType}</p></p>
    
    </div>
    <div>
    <p className='font-semibold flex gap-2'>Price : <p className='text-[#787778] text-md'>{price}</p></p>
    
    </div>
    <div>
    <p className="input input-bordered w-full max-w-xs">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
    <div className="card-actions">
      <motion.button animate={{y:[0,15,0]}} transition={{repeat:Infinity, delay:1,ease:easeOut,duration:3}} className="btn w-full mb-5 text-white mt-4 bg-[#b55b02] ">Book Now</motion.button>
    </div>
  </div>
</div>
          
                </div>
            </div>
            <div className='mb-8 mt-20 max-w-[1480px] mx-auto'>
              <MarqueeImage></MarqueeImage>
            </div>
        </div>
    );
};

export default RoomsCardDetails;