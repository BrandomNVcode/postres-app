import React from 'react';
import { createPortal } from 'react-dom';



export const Modal = ({children, isVisible=true, setVisible, w=500, h=700, estilos}) => {


    const styles = {
        position: "relative",
        width: `${w}px`,
        height: `${h}px`,
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
            <div className='absolute left-0 top-0 w-full h-full flex justify-center items-center z-20' style={stylesModal}>
                <div style={styles} className="flex justify-center items-center z-30">
                    <div>
                        {children}
                    </div>
                    <div className='absolute -top-5 -right-5'>
                        <button className='px-6 py-4 bg-red-900 rounded-full cursor-pointer text-center text-cyan-50' onClick={() => setVisible(false)}> X </button>
                    </div>
                </div>
            </div>
            )}
        </>,
        document.getElementById("custom-modal")!
    );
}