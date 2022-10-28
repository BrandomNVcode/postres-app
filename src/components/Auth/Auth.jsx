import React from 'react';
import { Modal } from '../Modal/Modal';
import { Login } from './Login';
import { Register } from './Register';


export const Auth = ({visible, setVisible, viewAuth, setViewAuth}) => {
    return (
        <Modal isVisible={visible} setVisible={setVisible}>
            <>
                {
                    viewAuth?
                    <Login viewAuth={viewAuth} setViewAuth={setViewAuth}/>
                    :
                    <Register viewAuth={viewAuth} setViewAuth={setViewAuth}/>
                }
            </>
        </Modal>
    )
}
