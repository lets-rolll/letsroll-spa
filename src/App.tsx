import { YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ContactFormPage } from './pages/ContactFormPage/ContactFormPage';
import { MapPage } from './pages/MapPage/MapPage';


function App() {
  return (
    <>
    <YMaps query={{apikey: '297ad0a5-92db-4580-978e-9cd4a3ebdaa5',
    ns: "use-load-option", 
    load: "Map,Placemark,control.ZoomControl,geoObject.addon.balloon"}}>
        <Navigation/>
        <Routes>
            <Route path='/map' element={<MapPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/contactform' element={<ContactFormPage/>}/>
        </Routes>
    </YMaps>
    </>
  );
}

export default App;
