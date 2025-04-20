import React from 'react';
import { GiSwirlRing } from 'react-icons/gi';

const CustomerHeading = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center'>
                        <p className='mt-14 text-5xl text-[#b55b02]'><GiSwirlRing />
                        </p>
                        <h1 className='mt-5 mb-4 text-5xl font-semibold'>Customer Reviews</h1>
                       
                        </div>
        </div>
    );
};

export default CustomerHeading;