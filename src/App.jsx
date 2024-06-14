import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/signup'
import SetUp from './pages/setup'
import EmailVerification from './pages/emailVerification'
import Roles from './pages/roles'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Overview from './pages/overview'
import TeamPerformance from './pages/teamPerformance'
import Assigned from './pages/assigned'
import Unassigned from './pages/unassigned'
import Teams from './pages/teams'
import Discussion from './pages/discussion'
import Landing from './pages/landing/landing'





function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/setup' element={<SetUp />} />
          <Route path='/emailverification' element={<EmailVerification />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/' element={<Landing />} />  
          <Route path='/ticket' element={<Dashboard/>} />
          <Route path='/overview' element={<Overview/>} />
          <Route path='/teamPerformance' element={<TeamPerformance/>} />
          <Route path='/assigned' element={<Assigned/>} />
          <Route path='/unassigned' element={<Unassigned/>} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/discussion' element={<Discussion/>} />
          
        </Routes>
      </BrowserRouter>
  
  )
}

export default App;
