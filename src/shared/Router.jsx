import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;