import React from 'react';


export const ItemShortStore = ({postre}) => {

    const stylesImg = {
        minWidth: '50px',
        minHeight: '50px'
    }

    return (
        <div className='p-3 flex justify-center items-center flex-row'>
            <div className='w-1/6 h-1/6 mr-4' style={stylesImg}>
                <img alt='postre' src='./img/i4.png' className='w-fit'/>
            </div>
            <div className='mr-4'>
                <span className='text-sm md:text-xl lg:text-2xl text-cyan-700'>Nombre del postre</span>
            </div>
            <div className='mr-8 flex flex-row'>
                <button className='mr-3 px-2 text-sm md:text-xl font-bold border text-yellow-200 border-slate-200 bg-slate-500 rounded-full'>-</button>
                <span className='text-gray-500 text-sm md:text-xl'>2</span>
                <button className='ml-3 px-2 text-sm md:text-xl font-bold border text-yellow-200 border-slate-200 bg-slate-500 rounded-full'>+</button>
            </div>
            <div>
                <span className='font-bold text-sm md:text-xl text-gray-500'>$5.5</span>
            </div>
        </div>
    )
}
