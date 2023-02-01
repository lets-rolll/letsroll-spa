import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { AuthPage } from './pages/AuthPage';
import { MapPage } from './pages/MapPage';


function App() {
  return (
    <>
        <Navigation/>
        <Routes>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
    </>
  );
}

export default App;
