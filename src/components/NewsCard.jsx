import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {id,title,date,content,longDescription,image} = news || {}
    
    return (
        <div className='flex gap-5 hover:shadow-xl mb-5 border-2'>
            <div>
                <Link to={`/cardGalleryDetails/${id}`}><img className='w-[300px]' src={image} alt="" srcset="" /></Link>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='font-semibold'>{date}</p>
                <p className='text-[#949892]'>{content}</p>
                <button className='btn w-full bg-[#b55b02] text-white hover:bg-transparent mt-5 hover:text-black'>More Details</button>
            </div>
        </div>
    );
};

export default NewsCard;