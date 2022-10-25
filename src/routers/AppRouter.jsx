import React from 'react';
import {
    BrowserRouter ,
    Routes,
    Route
} from "react-router-dom";

import { Home } from '../pages/Home';
import { Postres } from '../pages/Postres';
import { Store } from '../pages/Store';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/postres' element={<Postres />}/>
            <Route path='/store' element={<Store />}/>
        </Routes>
    </BrowserRouter>
  )
}
