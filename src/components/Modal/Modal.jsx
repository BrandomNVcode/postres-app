import React from 'react';
import { createPortal } from 'react-dom';



export const Modal = ({children, isVisible=true, setVisible, estilos}) => {


    const styles = {
        position: "relative",
        backgroundColor: '#fff',
        borderRadius: "1rem",
        ...estilos
    }

    const stylesModal = {
        backgroundColor: 'rgb(0 0 0 / 0.5)'
    }


    return createPortal(
        <>
            {isVisible &&
            (
            <div className='fixed left-0 top-0 w-full h-full flex justify-center items-center z-20' style={stylesModal}>
                <div className="flex justify-center items-center z-30 w-340 md:w-508 h-3/4" style={styles}>
                    <div>
                        {children}
                    </div>
                    <div className='absolute -top-4 -right-4'>
                        <button className='px-6 py-4 bg-red-900 rounded-full cursor-pointer text-center text-cyan-50' onClick={() => setVisible(false)}> X </button>
                    </div>
                </div>
            </div>
            )}
        </>,
        document.getElementById("custom-modal")
    );
}