import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

const RoomDetails = ({room}) => {
    const {id,roomImage,hotelRoomName,roomDescription,member} = room ||{}
    return (
        <div>
            <div className="card mb-10 bg-base-100 w-96 shadow-xl">
  <figure>
    <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}><img
    className='w-96'
      src={roomImage}
      alt="Shoes" /></motion.button>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{hotelRoomName}</h2>
    <p> <span className='font-semibold'>Member:</span> {member}</p>
    <p className='text-md'>{roomDescription}</p>
    <div className='border my-3'></div>
    <div className="card-actions mt-4">
      <Link to={`${id}`}><button className="btn border-[#b55b02] hover:text-white text-[#b55b02] bg-white hover:bg-[#b55b02] w-full">Book Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default RoomDetails;