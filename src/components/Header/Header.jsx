import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './header.css';

import { Avatar } from '@mui/material';
import { AvatarDrop } from '../DropDowns/AvatarDrop';
import { Auth } from '../Auth/Auth';
import { LogicOrder } from '../StoreShop/LogicOrder';




export const Header = () => {


  const { uid } = useSelector(state => state.user);

  const navegacion = useNavigate();

  const [visible, setVisible] = useState(false);
  const [viewAuth, setViewAuth] = useState(true);


  const handleLogin = () => {
    setVisible(!visible);
    setViewAuth(true);
  }



  return (
    <div className='fixed z-10 w-screen p-2 px-5 sm:px-16 bg-primary border-b-2 border-slate-300'>

        {/* Desktop */}
        <div className='flex w-full h-full justify-between'>
            <div className='flex items-center gap-2'>
                <img src='./img/logo.png' className='w-32 object-cover cursor-pointer' alt='logo' onClick={() => navegacion('/')}/>
            </div>

            <ul className='max-small flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </ul>

            <div className='flex items-center justify-center ml-8'>

              {
                uid?

                <>
                <div>
                  <LogicOrder />
                </div>
                <div className='ml-10 mb-2 cursor-pointer'>
                  <AvatarDrop>
                    <Avatar alt="Remy Sharp" src="./img/avatar.png"/>
                  </AvatarDrop>
                </div>
                </>

                :

                <button type="button"
                        className="inline-block mb-2 ml-10 px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        onClick={handleLogin}
                >Login
                </button>
              }

            </div>
        </div>

        {/* Mobile
        <div className='md:hidden flex w-full'>

        </div> */}



        {
          !uid // mientras un usuario no este activo
          && 
          (
            <Auth setViewAuth={setViewAuth} setVisible={setVisible} viewAuth={viewAuth} visible={visible}/>
          )
        }
    </div>
  )
}
