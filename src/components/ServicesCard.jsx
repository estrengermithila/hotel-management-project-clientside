import React from 'react';
import { motion } from "motion/react"

const ServicesCard = ({service}) => {
    const {servicesName,servicesDescription,price,serviceImage} = service || {}
    return (
        <div>
            <div className="card mb-10 bg-base-100 w-96 shadow-xl">
  <figure>
   <motion.button whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}> <img
      src={serviceImage}
      alt="Shoes" /></motion.button>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{servicesName}</h2>
    <p className='text-[#949892] font-semibold'>{servicesDescription}</p>
    <div className="card-actions">
      <button className="btn bg-[#b55b02] text-xl text-white w-full">Price: {price}$</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;