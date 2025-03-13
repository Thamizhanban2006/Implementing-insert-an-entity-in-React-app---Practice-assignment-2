
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Addmovie from './Addmovie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addmovie" element={<Addmovie/>}/>
      </Routes>
    </Router>
  );
};

export default App;
