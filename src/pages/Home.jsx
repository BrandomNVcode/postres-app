import React from 'react'
import { Filter } from '../components/Filter/Filter';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Slider } from '../components/Slider/Slider';
import { exampleProducts } from '../data/data';


export const Home = () => {

    return (
        <div className='w-screen h-auto flex flex-col bg-primary'>
            <Header />
            
            <main className='mt-24 p-8 w-full'>
                <Hero />


                <p className="mt-8 mb-4 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Our fresh & healthy fruits
                </p>
                <Slider flag={true} data={exampleProducts}/>


                <p className="mt-8 mb-4 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Our hot diches
                </p>
                <div className='mt-8 mb-4'>
                    <Filter />
                </div>
                <Slider flag={false} data={exampleProducts}/>

            </main>
        </div>
    )
}
