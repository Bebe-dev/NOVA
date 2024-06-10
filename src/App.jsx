import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import SetUp from './pages/setup'
import EmailVerification from './pages/emailVerification'
import Roles from './pages/roles'
import Login from './pages/login'
import LandingPage from './pages/landingPage'



function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/setup' element={<SetUp />} />
          <Route path='/emailverification' element={<EmailVerification />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/landingpage' element={<LandingPage />} />
              

   
        </Routes>
      </BrowserRouter>
  
  )
}

export default App;
