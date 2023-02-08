import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ContactFormPage } from './pages/ContactFormPage/ContactFormPage';
import { MapPage } from './pages/MapPage';


function App() {
  return (
    <>
        <Navigation/>
        <Routes>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/contactform' element={<ContactFormPage/>}/>
        </Routes>
    </>
  );
}

export default App;
