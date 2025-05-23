import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider';

const Navbar = () => {
  const {user} = useContext(AuthContext)
    const links =<>
    <li><NavLink
    className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`}
    to='/'>Home</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/rooms'>Rooms</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/services'>Services</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/gallery'>Gallery</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/news'>News</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/contacts'>Contacts</NavLink></li>
    <li><NavLink className={({isActive}) =>`font-bold text-md hover:text-[#b55b02] ${isActive ?'text-[#b55b02] font-bold text-xl':''}`} to='/about'>About</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar backdrop-blur-xl bg-white/30 z-50 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
       
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Hotel_Management</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/register'> <a className="btn">Register</a></Link>
    <Link to='/register'> <a className="btn">Login</a></Link>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;