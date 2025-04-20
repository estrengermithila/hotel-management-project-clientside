import React, { useEffect, useState } from 'react';
import RoomDetails from './RoomDetails';

const RoomsDetails = () => {
    const [rooms,setRooms] = useState([]);
    useEffect(() =>{
        fetch('roomQuality.json')
        .then(res=>res.json())
        .then(data =>setRooms(data))
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-3'>
                {
                    rooms.map(room =><RoomDetails key={room.id} room={room}></RoomDetails>)
                }
            </div>
        </div>
    );
};

export default RoomsDetails;