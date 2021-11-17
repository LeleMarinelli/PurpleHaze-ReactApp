// Estilos.
import './style.css'


// CSS de Reactjs Bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

// Componentes.
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
    <NavBar/>
    
    <ItemListContainer/>
    
    </>
  );
}

export default App;
