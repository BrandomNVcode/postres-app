import React, { useState } from 'react';
import { motion } from "framer-motion";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { categories } from '../../data/data';


export const Filter = () => {


    const [filter, setFilter] = useState("chicken");


    return (
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
            {
                categories &&
                categories.map((category) => (
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`group ${
                        filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                        } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                        onClick={() => setFilter(category.urlParamName)}
                    >
                        
                        <div className={`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName? "bg-white" : "bg-cartNumBg"} group-hover:bg-white flex items-center justify-center`}>
                            <DeliveryDiningIcon
                                className={`${filter === category.urlParamName? "text-textColor" : "text-white"} group-hover:text-textColor text-lg`}
                            />
                        </div>
                        
                        <p className={`text-sm ${filter === category.urlParamName? "text-white" : "text-textColor"} group-hover:text-white`}>
                            {category.name}
                        </p>

                    </motion.div>
                ))
            }
        </div>
    )
}
