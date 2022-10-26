import React from 'react';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { ItemShortStore } from '../DropDowns/ItemShortStore';



export const StoreShop = () => {

    const styleContentItem = {
        borderBottom: '1px solid #ccc'
    }

    return (
        <div className='flex justify-center items-center flex-col w-3/4'>

            <div className='mb-2' style={styleContentItem}>
                <ItemShortStore />
            </div>
            <div className='mb-2' style={styleContentItem}>
                <ItemShortStore />
            </div>
            <div className='mb-2' style={styleContentItem}>
                <ItemShortStore />
            </div>
            
            <div className='mt-8 flex items-center flex-col w-full'>

                <div className='flex items-center justify-between w-full max-w-lg'>
                    <p className='font-bold text-2xl text-neutral-800'>Total:</p>
                    <span className='font-medium text-2xl text-gray-600'>$15.5</span>
                </div>

                <button className='mt-8 p-2 w-full max-w-3xl bg-gray-400 text-yellow-300 rounded-full'>
                    <DeliveryDiningIcon className='ml-4'/> Pedir Ahora
                </button>
            </div>

        </div>
    )
}
