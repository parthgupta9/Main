import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splashscreen from './splashscreen/Splashscreen';
import Rocket from './Rocket/Rocket';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splashscreen />} />
        <Route path='/Rocket' element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
