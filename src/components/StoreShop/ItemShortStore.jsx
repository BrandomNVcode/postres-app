import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAnOrder, resAnOrderCant, addAnOrderCant } from '../../redux/features/list/listSlice';


/*
    postre = {
        id:2
        imageURL :"./img/fi1.png"
        title:"Fish Kebab"
        calories:"64gr"
        price :5.25
        cant :1
    }
*/


export const ItemShortStore = ({postre, drop = false}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteAnOrder(postre.id));
    }

    const handleRes = () => {
        dispatch(resAnOrderCant(postre.id))
    }

    const handleAdd = () => {
        dispatch(addAnOrderCant(postre.id))
    }


    const stylesImg = {
        minWidth: '40px',
        minHeight: '40px'
    }

    return (
        <div className='p-3 w-full flex justify-between items-center flex-row'>
            <div className='flex justify-between items-center flex-row w-6/12' style={{flex: '2'}}>
                <div className={`${drop? 'w-4' : 'w-1/6 h-1/6'} mr-4`} style={stylesImg}>
                    <img alt={postre.title} src={postre.imageURL} className='w-full'/>
                </div>
                <div className='w-full text-center mr-4'>
                    <span className={`text-sm ${!drop && 'md:text-xl lg:text-2xl'} text-cyan-700`}>{postre.title}</span>
                </div>
            </div>
            <div className='flex flex-row justify-start w-3/12'>
                <button onClick={handleRes}
                        className={`mr-2 px-2 text-sm ${!drop && 'md:text-xl'} font-bold border text-yellow-200 border-slate-200 bg-slate-500 rounded-full`}
                >-</button>
                <span className={`text-gray-500 text-sm ${!drop && 'md:text-xl'}`}>{postre.cant}</span>
                <button onClick={handleAdd}
                        className={`ml-2 px-2 text-sm ${!drop && 'md:text-xl'} font-bold border text-yellow-200 border-slate-200 bg-slate-500 rounded-full`}
                >+</button>
            </div>
            <div className='flex justify-between items-center flex-row w-3/12'>
                <div>
                    <span className={`font-bold text-sm ${!drop && 'md:text-xl'} text-gray-500`}>${postre.price*postre.cant}</span>
                </div>
                <div className='ml-3'>
                    <button className='bg-red-400 px-2 rounded-full' onClick={handleDelete}>x</button>
                </div>
            </div>
        </div>
    )
}
