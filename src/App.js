import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import SignUp from './components/SignUp' 
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Homepage/>}/>
          <Route exact path = "/register" element={<SignUp/>}/>
          <Route exact path = "/dashboard" element={<Dashboard/>}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
