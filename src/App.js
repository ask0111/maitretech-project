import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './components/signin';
import Menu from './components/menu';
import Header from './components/header';
import Items from './components/cards';
import Thanks from './components/thanks';
import { useState } from 'react';
import Footer from './components/footer';
import { Navigate } from 'react-router-dom';


function App() {
  const [isOpen, setIsopen] = useState(JSON.parse(window.localStorage.getItem("suser")));
  useState(() => {
    setIsopen(JSON.parse(window.localStorage.getItem("suser")))
  }, [window.location.pathname])



  return (
    <BrowserRouter>
      <div className="App">
        {
          isOpen == "present" ? (<>
            <Header />
            <Routes>
              <Route path='/' element={<Menu />} />
              <Route path='/menu' element={<Items />} />
              <Route path='/checkout' element={<Thanks />} />
            </Routes>
            <Footer />
          </>) :
            <Routes>
              <Route path='/signin' element={<Signin />} />
              <Route path={`${isOpen == "present" ? "/signup" : "/*"}`} element={<Signup />} />
            </Routes>

        }

      </div></BrowserRouter>
  );
}

export default App;
