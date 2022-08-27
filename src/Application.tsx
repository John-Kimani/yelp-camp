import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Home/Auth/Login'
import HomePage from './pages/Home/Home'
import { initializeApp } from 'firebase/app'
import { config } from './config/config'

initializeApp(config.firebaseConfig);

export interface IApplicationProps {};

const Application = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Application