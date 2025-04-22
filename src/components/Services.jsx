import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';
import Choose from './Choose';
import Service from './Service';

const Services = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=''>
            <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover bg-black/50 w-full h-[400px]  bg-center w-full'>
                <div className='bg-black/50 w-full min-h-[400px]'>
                <div className='relative flex flex-col justify-center items-center top-48'> 
                <h1 className='text-white text-4xl font-bold'>Services</h1>
                </div>
                </div>
            </div>
<div className='max-w-7xl mx-auto grid grid-cols-3 mt-20'>
    {
        data.map(service => <ServicesCard service={service}></ServicesCard>)
    }
</div>
<Service></Service>

        </div>
    );
};

export default Services;