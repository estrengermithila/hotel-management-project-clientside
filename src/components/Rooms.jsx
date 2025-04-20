import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomsCard from './RoomsCard';

const Rooms = () => {
    const data = useLoaderData()
   
    return (
        <div>
           <div className='max-w-[1420px] mx-auto grid grid-cols-3 gap-7'>
            {
                data.map(room => <RoomsCard key={room.id} room={room}></RoomsCard>)
            }
           </div>
        </div>
    );
};

export default Rooms;