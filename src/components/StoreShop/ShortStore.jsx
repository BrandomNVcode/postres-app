import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { ItemShortStore } from './ItemShortStore';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';



export const ShortStore = ({children, orders}) => {


    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);


    const handleButton = () => {
        const isMobile = document.querySelector('body').offsetWidth <= 600;

        if(!isMobile) {
            setVisible(!visible)
        } else {
            setVisible(false);
            navigate('/store');
        }
    }


    return (
        <div className="relative inline-block text-left">
            <div onClick={handleButton} className='cursor-pointer'>
                <motion.div whileTap={{scale: 0.8}}>
                    {children}
                </motion.div>
            </div>

            {
                visible
                &&
                <div className="absolute right-0 z-10 mt-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-yellow-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    
                    {
                        orders.length === 0?

                        <div className='flex flex-col justify-center items-center my-12 mx-8'>
                            <p className='font-light mb-3'>Your order list is empty..</p>
                            <p className='font-semibold cursor-pointer p-3 bg-yellow-200 rounded-lg'
                            onClick={() => navigate('/postres')}
                            >See menu list</p>
                        </div>

                        :

                        <>
                        <div className='overflow-y-auto h-auto max-h-96'>
                            <div className="flex flex-col justify-center items-center">
                                {
                                    orders.map((postre, index) => (
                                        <ItemShortStore key={index} postre={postre} drop={true}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex justify-center items-center p-3 bg-yellow-200 cursor-pointer'
                             onClick={() => navigate('/store')}>
                            <DeliveryDiningIcon className='text-yellow-600'/>
                            <span className='ml-3 text-yellow-600'>Pedir ahora</span>
                        </div>
                        </>

                    }


                </div>
            }
        </div>
    )
}
