import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
                <div className='border-2 border-red-900 w-3/4'>
                    <img src={roomImage} alt="" />
                </div>
                <div>
                <div className=" bg-base-100 w-full shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-3xl text-[#b55b02] font-bold">{roomOverview}</h2>
    <p className='flex'><span className='text-xl font-semibold'>Details: </span><p className='text-[#787778] text-xl'>{details}</p></p>
    <p className='flex items-center justify-center'><span className='text-xl font-semibold'>Category: </span><p className='text-[#787778]'>{category}</p></p>
    <p className='flex'><span className='text-xl font-semibold'>Room Size:</span><p className='text-[#787778]'>{roomSize}</p></p>
    <p className='flex'><span className='text-xl font-semibold'>Max Occupancy: </span><p className='text-[#787778]'>{maxOccupancy}</p></p>
    <p className='flex'><span className='text-xl font-semibold'>Bed Type:</span><p className='text-[#787778]'>{bedType}</p></p>
    <p className='flex'><span className='text-xl font-semibold'>Price:</span><p className='text-[#787778]'>{price}</p></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default RoomsCardDetails;