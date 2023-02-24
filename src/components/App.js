import logo from '../assets/logo.svg';
import '../styles/App.css';
import { createContext } from 'react';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import CounterButton from './Counter';
import Compteur from './Compteur';
import Hello from './Hello';
import Hello2 from './Personne';
import Contact from './Contact';
import Heure from './Heure';
import Compteur2 from './Compteur';
import Toggle from './Toggle';
import Personne2 from './Personne';
import Effect from './Effect';
import BesoinsCaloriques from './Calories';
import Garage from './Garage';
import DashBoard from './LineChart';

import Modechange from './Mode';
import Headers from './Header';

export const ExempleContext = createContext("")

function App() {
  const mode = [{ nom: 'light', back: 'white', text: 'black' }, { nom: 'dark', back: '#282c34', text: 'white' }]

  return (
    <div className="App">
      <header id='header' className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js" integrity="sha512-v3ygConQmvH0QehvQa6gSvTE2VdBZ6wkLOlmK7Mcy2mZ0ZF9saNbbk19QeaoTHdWIEiTlWmrwAL4hS8ElnGFbA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <Headers/>
        <ExempleContext.Provider value={mode}>
        <Modechange/>
        </ExempleContext.Provider>
        
        <Routes>
          <Route path="/calories" element={<BesoinsCaloriques/>}/>
          <Route path="/compteur" element={<Compteur/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/counter" element={<CounterButton/>}/>
          <Route path="/effect" element={<Effect/>}/>
          <Route path="/garage" element={<Garage/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/heure" element={<Heure/>}/>
          <Route path="/linechart" element={<DashBoard/>}/>
          <Route path="/personne" element={<Personne2/>}/>
          <Route path="/toggle" element={<Toggle/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;