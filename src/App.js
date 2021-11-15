// Estilos.
import './style.css'


// CSS de Reactjs Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes.
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {

  const [greeting,setGreeting] = useState(' Oh hi stranger... ');

  setTimeout(() => {
    setGreeting('Welcome to the PURPLE HAZE branch of the Multiverse!')
  }, 4000);

  return (
    <>
    <NavBar/>
    
    <ItemListContainer titulo="Purple Haze App" greeting={greeting} />
    </>
  );
}

export default App;
