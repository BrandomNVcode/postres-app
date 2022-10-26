import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { authLogout } from '../../redux/features/user/userSlice';



export const AvatarDrop = ({children}) => {


    const dispatch = useDispatch();
    const navegacion = useNavigate();

    const [visible, setVisible] = useState(false);


    const handleButton = () => {
        setVisible(!visible)
    }

    const handleLogout = () => {
        localStorage.clear();
        dispatch(authLogout());
        navegacion('/');
    }


    return (
        <div className="relative inline-block text-left">
            <motion.div whileTap={{scale: 0.8}} onClick={handleButton}>
                {children}
            </motion.div>

            {
                visible
                &&
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div>
                        <Link to='/store' className="text-gray-700 block px-4 py-2 text-sm">Store</Link>
                        <Link to='/postres' className="text-gray-700 block px-4 py-2 text-sm">Menu List</Link>
                        <div className='bg-red-400'>
                            <button className="text-gray-700 block px-4 py-2 text-sm"
                                    onClick={handleLogout}
                            >Logout
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
