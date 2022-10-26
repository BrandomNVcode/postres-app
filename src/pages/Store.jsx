import React from 'react'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { StoreShop } from '../components/StoreShop/StoreShop';


export const Store = () => {
    

    return (
        <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            
            <main className='mt-24 p-8 w-full'>

                <p className="mt-8 mb-4 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Your order Store
                </p>
                <div className='mt-8 mb-4 flex justify-center'>
                    <StoreShop />
                </div>

            </main>
            
            <Footer />


  
        </div>
    )
}
