// Estilos.
import './style.css'


// CSS de Reactjs Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes.
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FormularioContainer } from './components/FormularioContainer/FormularioContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './context/CartContext';
import { CrazyModeProvider } from './context/CrazyMode';

import React from 'react'




function App() {



  return (

    <CrazyModeProvider>
      <CartProvider>

        <BrowserRouter>  

          <NavBar/> 
          
          <Routes>
            
            <Route path="/" element={ <ItemListContainer/> }/>
            
            <Route path="/categories/:catId" element={ <ItemListContainer/> }/>

            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>

            <Route path="/contact" element={ <FormularioContainer/> }/>

            <Route path="/cart" element={ <CartView/> }/>

            <Route path="*" element={ <Navigate to="/"/> }/>

          </Routes>

        </BrowserRouter>

      </CartProvider>
    </CrazyModeProvider>

  );
}

export default App;
