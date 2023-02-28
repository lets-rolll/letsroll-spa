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
