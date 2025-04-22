import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
import NewsRight from './NewsRight';

const News = () => {
    const news = useLoaderData()
    
    return (
        <div>
            <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover bg-black/50 w-full h-[400px]  bg-center w-full'>
                <div className='bg-black/50 w-full min-h-[400px]'>
                <div className='relative flex flex-col justify-center items-center top-48'> 
                <h1 className='text-white text-4xl font-bold'>News</h1>
                </div>
                </div>
            </div>
            <div className='flex max-w-7xl mx-auto mt-12'>
            <div className='w-3/4'>
                {
                    news.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
            <div className='w-1/4'>
                <NewsRight></NewsRight>
            </div>
            </div>
        </div>
    );
};

export default News;