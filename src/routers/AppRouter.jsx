import React from 'react';
import {
    BrowserRouter ,
    Routes,
    Route
} from "react-router-dom";

import { Home } from '../pages/Home';
import { Postres } from '../pages/Postres';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/postres' element={<Postres />}/>
        </Routes>
    </BrowserRouter>
  )
}
