import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../firebase/authFunctions/auth';
import { authUser } from '../../redux/features/user/userSlice';


export const Register = ({viewAuth, setViewAuth}) => {

    const dispatch = useDispatch();

    const [desabilitar, setDesabilitar] = useState(false);
    const [dataForm, setDataForm] = useState({});


    const handleToLogin = () => {
        setViewAuth(!viewAuth);
    }


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        setDesabilitar(true);

        if(dataForm.password !== dataForm.repeatpassword || dataForm.password.length < 6 || dataForm.repeatpassword.length < 6) {
            console.log("Contraceñas no validas")
            setDesabilitar(false);
            return;
        }

        //registerUserWithEmailAndPassword(dataForm.email, dataForm.password);
        const user = await registerUser({
            username: dataForm.username,
            email: dataForm.email,
            password: dataForm.password
        });

        if(!user) {
            setDesabilitar(false);
        } else {

            dispatch(authUser({
                username: user.displayName,
                uid: user.uid,
                email: user.email
            }))

            localStorage.setItem('userToken', user.accessToken);
            localStorage.setItem('useruid', user.uid);
            //console.log(user.accessToken)
            setDesabilitar(false);
        }

    }


    const styleRegister = {
        background: "linear-gradient( to right, #ee7724, #d8363a, #dd3675, #b44593)"
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
                <p className="mb-4">Please register to your account</p>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="username"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type='email'
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="repeatpassword"
                        placeholder="Repeat Password"
                        name="repeatpassword"
                        onChange={handleChange}
                    />
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <input
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 cursor-pointer"
                        type='submit'
                        value='Register'
                        style={styleRegister}
                        disabled={desabilitar}
                    />
                </div>
                <div className="flex items-center justify-center flex-wrap pb-6">
                    <p className="mb-0 mr-2">Have an account?</p>
                    <button
                        onClick={handleToLogin}
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    >
                    Go to login
                    </button>
                </div>
            </form>
        </>
    )
}
