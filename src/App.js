import './style.css'
import { NavBar } from './components/navBar'

function App() {
  return (
    <div className="PurpleHazeApp">
      
    <NavBar/>

    <section className="section1">
      <h1> Purple Haze App!</h1>
      <p style={{color: "thistle"}}> ¡Welcome to the world of Purple Haze! </p>
    </section>

    </div>
  );
}

export default App;
