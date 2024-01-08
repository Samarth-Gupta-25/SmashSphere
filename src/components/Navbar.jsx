import React from 'react';
import {FaShoppingCart} from "react-icons/fa";
import logo from "../img/logo2.png"
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const {cart} = useSelector((state)=>state);
  // console.log(cart.length);
  return (
    <div>
    <nav className='flex justify-between h-20 max-w-6xl items-center mx-auto'>
        <NavLink to="/">
            <div className='ml-5'>
                <img src={logo} alt="" height="60px" width="100px"/>
            </div>
        </NavLink>
      
      <div className='flex gap-x-5 items-center mr-5 text-slate-100 font-medium space-x-6'>
        <NavLink to="/">
            <p>Home</p>
        </NavLink>
        
        <NavLink to="/cart">
            <div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                {
                  cart.length > 0 &&
                  <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                }
            </div>
        </NavLink>
        
      </div>
    </nav>
    </div>
  )
}

export default Navbar;
