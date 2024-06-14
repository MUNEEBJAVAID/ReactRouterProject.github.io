import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import Dashboard from './pages/Dashboard.js'
import { useState } from 'react';

function App() {
   const [isLoggedIn , setLoggedIn ] = useState(false);

  return (
    <div className='wrapper'>
        <Navbar isLoggedIn = {isLoggedIn}  setLoggedIn = {setLoggedIn}></Navbar>

        <Routes>

            <Route path='/' element = {<Home/>} ></Route>
            <Route path='/Login' element = {<Login setLoggedIn = {setLoggedIn}/>} ></Route>
            <Route path='/Signup' element = {<Signup setLoggedIn = {setLoggedIn}/>} ></Route>
            <Route path='/Dashboard' element = {<Dashboard/>} ></Route>

        </Routes>

    </div>
  );
}

export default App;
