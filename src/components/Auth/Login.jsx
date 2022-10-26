import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../firebase/authFunctions/auth';
import { authUser } from '../../redux/features/user/userSlice';


export const Login = ({viewAuth, setViewAuth}) => {


    const dispatch = useDispatch();

    const [desabilitar, setDesabilitar] = useState(false);
    const [dataForm, setDataForm] = useState({});



    const styleLogin = {
        background: "linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593)"
    }



    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setDesabilitar(true);
        const user = await loginUser(dataForm.email, dataForm.password);

        if(user) {
            setDesabilitar(false);
            //console.log("Usuario:", user)
            localStorage.setItem('userToken', user.accessToken);
            localStorage.setItem('useruid', user.uid);

            dispatch(authUser({
                username: user.displayName,
                uid: user.uid,
                email: user.email
            }))

        } else {
            console.log('Credenciales incoirrectas')
            setDesabilitar(false);
        }

    }



    const handeToRegister = () => {
        setViewAuth(!viewAuth);
    }


    return (
        <>
            <div className="text-center mb-12">
                  <img
                    className="mx-auto w-48"
                    src="./img/logo.png"
                    alt="logo"
                  />
            </div>
            <form onSubmit={handleSubmit}>
                <p className="mb-4">Please login to your account</p>
                <div className="mb-4">
                    <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <input
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 cursor-pointer"
                        type='submit'
                        style={styleLogin}
                        disabled={desabilitar}
                    />
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                </div>
                <div className="flex items-center justify-center flex-wrap pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                        onClick={handeToRegister}
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                    Register
                    </button>
                </div>
            </form>
        </>
    )
}
