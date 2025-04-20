import React from 'react';
import Banner from './Banner';
import BestHeading from './BestHeading';
import RoomsDetails from './RoomsDetails';
import SaveBooking from './SaveBooking';
import Choose from './Choose';
import BookingEarly from './BookingEarly';
import Customer from './Customer';

const Home = () => {
    return (
        <div>
            <div className=' h-[900px]'>
                <Banner></Banner>
            </div>
            <BestHeading />
            <RoomsDetails></RoomsDetails>
            <SaveBooking></SaveBooking>
            <Choose></Choose>
            <BookingEarly></BookingEarly>
            <Customer></Customer>
        </div>
    );
};

export default Home;