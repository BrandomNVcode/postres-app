import React from 'react'
//import { Filter } from '../components/Filter/Filter';
import { Footer } from '../components/Footer/Footer';
import { Galery } from '../components/Galery/Galery';
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
                    Nuestros postres deliciosos
                </p>
                <Slider flag={true} data={exampleProducts}/>

            </main>

            <section id='about' className='w-full p-8 mb-14'>
                <p className="mt-8 mb-12 text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                    Conocenos un poco
                </p>
                <Galery />
            </section>


            <Footer />
  
        </div>
    )
}
