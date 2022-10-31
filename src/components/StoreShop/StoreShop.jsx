import React from 'react';
import { useSelector } from 'react-redux';
//import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { ItemShortStore } from './ItemShortStore';
import { Paypal } from '../Pago/Paypal';



export const StoreShop = () => {


    const { orders } = useSelector(state => state.list);

    const calcTotalPrice = (orders) => {
        let total = 0;
        orders.forEach(postre => {
            total += postre.price*postre.cant
        });
        return total;
    }


    const styleContentItem = {
        borderBottom: '1px solid #ccc'
    }

    return (
        <div className='flex justify-center items-center flex-col w-3/4'>

            {
                orders.map((postre, index) => (
                    <div className='mb-2' style={styleContentItem} key={index}>
                        <ItemShortStore  postre={postre} key={index}/>
                    </div>
                ))
            }
            
            <div className='mt-8 flex items-center flex-col w-full'>

                <div className='flex items-center justify-between w-full max-w-lg'>
                    <p className='font-bold text-2xl text-neutral-800'>Total:</p>
                    <span className='font-medium text-2xl text-gray-600'>${calcTotalPrice(orders)}</span>
                </div>

                <div className='mt-8 flex justify-center w-full'>
                    <Paypal/>
                </div>
            </div>

        </div>
    )
}
