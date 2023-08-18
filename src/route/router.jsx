import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../containers/Home.jsx';
import Login from '../containers/Auth/Login.jsx';
import Signup from '../containers/Auth/Signup.jsx';
import Order from '../containers/User/Oder.jsx';
import PaymentMethod from '../containers/User/PaymentMethod.jsx';
import Profile from '../containers/User/Profile.jsx';
export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Auth/login" element={<Login />} />
            <Route path="/Auth/signup" element={<Signup />} />
            <Route path="/User/oder" element={<Order />} />
            <Route path="/User/payment" element={<PaymentMethod />} />
            <Route path="/User/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}