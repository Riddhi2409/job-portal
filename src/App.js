import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Company from './pages/Company';
import { Routes,Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='z-0'>
      <Navbar />  
      <Routes>
        <Route path="/*" element={<Home />} /> 
        <Route path='/company' element={<Company />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
