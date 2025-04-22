import React from 'react';
import TeamMember from './TeamMember';

const About = () => {
    return (
        <div>
             <div className='bg-[url(/assets/bannerImage.jpg)] bg-no-repeat bg-cover bg-black/50 w-full h-[400px]  bg-center w-full'>
                <div className='bg-black/50 w-full min-h-[400px]'>
                <div className='relative flex flex-col justify-center items-center top-48'> 
                <h1 className='text-white text-4xl font-bold'>About</h1>
                </div>
                </div>
            </div>

            <div>
                <TeamMember></TeamMember>
            </div>
        </div>
    );
};

export default About;