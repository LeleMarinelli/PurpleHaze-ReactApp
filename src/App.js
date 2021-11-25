// Estilos.
import './style.css'


// CSS de Reactjs Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes.
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>  

      <NavBar/> 

      <Routes>
        
        <Route path="/" element={ <ItemListContainer/> }/>
        
        <Route path="/categories/:catId" element={ <ItemListContainer/> }/>

        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>

        <Route path="*" element={ <Navigate to="/"/> }/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
