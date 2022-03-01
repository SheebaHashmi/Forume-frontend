import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import SignUp from './components/SignUp' 
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route exact path = "/private/dashboard"  element={<Dashboard/>}/>
          <Route exact path = "/private/profile" element={<Profile/>}/>
          <Route exact path = "/private/editProfile" element={<EditProfile/>}/> 
          <Route exact path = "/register" element={<SignUp/>}/>
          <Route exact path = "/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
