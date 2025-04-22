import React from 'react';
import team from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'

const team = () => {
    return (
        <div>
            <img className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl' src={team1} alt=""/>
        </div>
    );
};

export default team;