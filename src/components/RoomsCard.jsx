import React from 'react';
import { Link } from 'react-router-dom';

const RoomsCard = ({room}) => {
    const {id,roomOverview,details,category,roomSize,maxOccupancy,bedType,price,availability,roomImage} = room || {}
    return (
        <div>
            <Link to={`/roomsCardDetails/${id}`}>
            <div className="card bg-base-100 w-full shadow-xl">
  <figure>
    <img
      src={roomImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-semibold">{roomOverview}</h2>
    <p className='text-[#787778] text-lg mb-3'>{details}</p>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<p className='text-xl font-bold'>{price}BDT</p>

    <div className='border-2'></div>
    <div className="card-actions mt-4">
      <button className="btn bg-[#b55b02] text-white">View More</button>
    </div>
  </div>
        </div>
            </Link>
        </div>
    );
};

export default RoomsCard;