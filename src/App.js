import React from 'react';

// Páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';


//Componentes estilizados (Styled Components)
import {StyledContainer} from './components/Styles';

// Loading animation CSS
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path='/signup' element={<Signup/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/dashboard' element={<Dashboard/>} />

          <Route path='/' element={<Home/>} />

        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;