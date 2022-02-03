import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import CreateNotification from './components/CreateNotification'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />
            } />
          <Route
            path="/home"
            element={<Home />} />
          <Route
            path="/createnotification"
            element={<CreateNotification />
            } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
