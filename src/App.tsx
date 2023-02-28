import { Route, Routes } from 'react-router-dom';
import { BlogArticle } from './components/BlogArticle/BlogArticle';
import { LoginForm } from './components/LoginForm/LoginForm';
import { Navigation } from './components/Navigation/Navigation';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
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

            <Route path='/sign-up' element={<AuthPage/>}/>
            <Route path='/sign-in' element={<LoginForm/>}/>

            <Route path='/contactform' element={<ContactFormPage/>}/>
            <Route path='/blog' element={<BlogPage/>}/>
        </Routes>
    </>
  );
}

export default App;
