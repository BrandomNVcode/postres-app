import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter ,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { getCurrentAuthUser } from '../firebase/authFunctions/auth';
import { authUser } from '../redux/features/user/userSlice';

import { Home } from '../pages/Home';
import { Postres } from '../pages/Postres';
import { Store } from '../pages/Store';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.user);

  
  useEffect(() => {

    const dispathFunction = (user) => {
      dispatch(authUser({
        username: user.displayName,
        email: user.email,
        uid: user.uid
      }))
    }

    getCurrentAuthUser(dispathFunction);

  }, []);
  


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/postres' element={<Postres />}/>
                <Route path='/store' element={uid? <Store /> : <Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
