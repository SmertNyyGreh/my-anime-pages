import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Anime } from './components/Anime/Anime';
import { Headers } from './components/Headers/Headers';
import { Test } from './components/Test/Test';
import { Button } from './components/Button/Button';

function App() {
   return (
      <>
         <Headers/>
         <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
         </Routes>
      </>
   );
}

export default App;
