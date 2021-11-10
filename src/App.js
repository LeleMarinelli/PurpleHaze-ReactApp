// Estilos.
import './style.css'

// Componentes.
import { NavBar } from './components/NavBar/NavBar'

// CSS de Reactjs Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      
    <NavBar/>
    
    <ItemListContainer titulo="Purple Haze App" greeting="¡ Welcome to the universe of Purple Haze !" />

    </>
  );
}

export default App;
