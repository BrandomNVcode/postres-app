import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { motion } from "framer-motion";

import { Auth } from '../Auth/Auth';
import { addOrder } from '../../redux/features/list/listSlice';




export const Product = ({item}) => {


  const dispatch = useDispatch();

  const { uid } = useSelector(state => state.user);
  const { orders } = useSelector(state => state.list);

  const [visible, setVisible] = useState(false);
  const [viewAuth, setViewAuth] = useState(true);


  const handleStore = () => {
    if(!uid) {
      // Si no hay usuario, lo invitamos a logearse
      setVisible(true);
      return;
    }

    const include = orders.find(postre => postre.id === item.id);

    if(include) {
      alert('Currently in store.');
      return;
    }

    // Agregando al store
    dispatch(addOrder({
      ...item,
      cant: 1
    }));

  }


  return (
    <div key={item?.id}
         className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
      <div className="w-full flex items-center justify-between">

        <motion.div whileHover={{ scale: 1.2 }} className="w-40 h-40 -mt-8 drop-shadow-2xl cursor-pointer">
          <img src={item?.imageURL} alt={item.title} className="w-full h-full object-contain"/>
        </motion.div>

        <motion.div whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                    onClick={handleStore}>
          <StorefrontIcon className="text-white" />
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-end justify-end -mt-8">
        <p className="text-textColor font-semibold text-base md:text-lg">{item?.title}</p>
        <p className="mt-1 text-sm text-gray-500">{item?.calories} Calories</p>

        <div className="flex items-center gap-8">
          <p className="text-lg text-headingColor font-semibold"><span className="text-sm text-red-500">$</span> {item?.price}</p>
        </div>
      </div>


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
