import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Telmovies from './Pages/Telmovies';
import Teldetails from './Pages/Details/Teldetails'; 
import Toprating from './Pages/Toprating';
import Upcoming from './Pages/Upcoming1';  

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Telmovies />} />
          <Route path="/telmovie/:id" element={<Teldetails />} />
          <Route path='/toprating' element={<Toprating />} />
          <Route path="/upcoming" element={<Upcoming />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
