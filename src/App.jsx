import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import SetUp from './pages/setup'
import EmailVerification from './pages/emailVerification'
import Roles from './pages/roles'

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/setup' element={<SetUp/>} />
        <Route path='/emailverification' element={<EmailVerification/>} />
        <Route path='/roles' element={<Roles/>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
