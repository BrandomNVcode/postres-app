import React, { useState } from 'react';
import { motion } from "framer-motion";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { categories, exampleProducts } from '../../data/data';
import { Slider } from '../Slider/Slider';
import { filterProductSlider } from '../../helpers/filters';


export const Filter = () => {

    const [postres, setPostres] = useState(exampleProducts);

    const handleCategory = (id) => {
        const filter = filterProductSlider(exampleProducts, id);
        setPostres(filter);
    }


    return (
        <>
        <div className="w-full flex items-center justify-center flex-wrap gap-8 py-6">
            {
                categories &&
                categories.map((category) => (
                    <motion.div
                        onClick={() => handleCategory(category.id)}
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`bg-orange-200 group w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                    >
                        
                        <div className={`w-10 h-10 rounded-full shadow-lg bg-orange-400 group-hover:bg-white flex items-center justify-center`}>
                            <DeliveryDiningIcon className={`group-hover:text-textColor text-lg`}/>
                        </div>
                        
                        <p className={`text-sm group-hover:text-white`}>{category.name}</p>

                    </motion.div>
                ))
            }
        </div>

        <Slider flag={false} data={postres}/>
        </>
    )
}
