import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Foot from './Foot';

const Root = () => {
    return (
        <div>
           
          <Navbar></Navbar>
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


