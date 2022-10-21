import React, { useRef } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { motion } from "framer-motion";



/*
data = [
    {
        id,
        imageURL,
        title,
        calories,
        price
    }
]
*/



export const Slider = ({ flag, data }) => {

  const rowContainer = useRef();


  const handlePrev = () => {
    rowContainer.current.scrollLeft -= 400; //rowContainer.current.offsetWidth
  }

  const handleNext = () => {
    rowContainer.current.scrollLeft += 400; //rowContainer.current.offsetWidth
  }



  return (
    <div className='flex justify-center items-center'>

      {
        flag &&
        <div className='mx-2 mb-4 p-4 rounded-full bg-amber-400 cursor-pointer'
            onClick={handlePrev}>
          <NavigateBeforeIcon />
        </div>
      }

      <div
        ref={rowContainer}
        className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
          flag
            ? "overflow-x-auto overflow-y-hidden scrollbar-none"
            : "overflow-x-hidden flex-wrap justify-center"
        }`}
      >
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item?.id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.imageURL}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setItems([...data, item])}
                >
                  <StorefrontIcon className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <img src='./img/NotFound.svg' className="h-340" />
            <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
            </p>
          </div>
        )}
      </div>

      {
        flag &&
        <div className='mx-2 mb-4 p-4 rounded-full bg-amber-400 cursor-pointer'
            onClick={handleNext}>
          <NavigateNextIcon />
        </div>
      }

    </div>
  );
};
