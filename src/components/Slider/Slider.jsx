import React, { useRef } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Product } from "../Poduct/Product";



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
            <Product key={item.id} item={item}/>
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
