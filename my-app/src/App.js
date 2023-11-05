import React from 'react';
import './App';
import './logo.svg';
import './index.js'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { GameInfo } from './components/GameInfo.jsx';
import {RegistrationForm} from './components/RegistrationForm.jsx'







function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<GameInfo/>}></Route>
      <Route path="/edit" element={<RegistrationForm/>}></Route>
    </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
