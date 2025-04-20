import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Foot from './Foot';

const Root = () => {
    return (
        <div className=''>
           
         <div className='h-20'>
         <Navbar></Navbar>
         </div>
<div className=''>
    <Outlet></Outlet>
    </div>

         <div className='bg-[#3a3138]'>
         <Foot></Foot>
         </div>
        </div>
    );
};

export default Root;


