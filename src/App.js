import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

import { NavBar } from './components/NavBar/NavBar'
import { AppRouter } from './router/AppRouter';


function App() {


  return (
      <CartProvider>

        <BrowserRouter>  

          <NavBar/> 
          
          <AppRouter/>

        </BrowserRouter>

      </CartProvider>
  );
}

export default App;
