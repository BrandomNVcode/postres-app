import React, { useState } from 'react';
import { Avatar, Badge } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { motion } from "framer-motion";
import { Modal } from '../Modal/Modal';
import { Login } from '../Auth/Login';
import { Register } from '../Auth/Register';




export const Header = () => {


  const [visible, setVisible] = useState(false);
  const [viewAuth, setViewAuth] = useState(true);


  const handleAvatar = () => {
    setVisible(!visible);
    setViewAuth(true);
  }



  return (
    <div className='fixed z-10 w-screen p-6 px-16'>

        {/* Desktop */}
        <div className='hidden md:flex w-full h-full justify-between'>
            <div className='flex items-center gap-2'>
                <img src='./img/logo.png' className='w-10 object-cover' alt='logo'/>
                <p className='text-headingColor text-xl font-bold'> City</p>
            </div>

            <ul className='flex items-center gap-8'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </ul>

            <div className='flex items-center justify-center ml-8'>
              <motion.div whileTap={{scale: 0.8}}
                          className='cursor-pointer'>
                <Badge color="secondary" badgeContent={1}>
                  <StorefrontIcon />
                </Badge>
              </motion.div>
              <motion.div whileTap={{scale: 0.8}} className='ml-10 mb-2 cursor-pointer'>
                <Avatar alt="Remy Sharp" src="./img/avatar.png" onClick={handleAvatar}/>
              </motion.div>
            </div>
        </div>

        {/* Mobile */}
        <div className='md:hidden flex w-full'>

        </div>


        <Modal isVisible={visible} setVisible={setVisible}>
          <>
            {
              viewAuth?
              <Login viewAuth={viewAuth} setViewAuth={setViewAuth}/>
              :
              <Register viewAuth={viewAuth} setViewAuth={setViewAuth}/>
            }
          </>
        </Modal>
    </div>
  )
}
