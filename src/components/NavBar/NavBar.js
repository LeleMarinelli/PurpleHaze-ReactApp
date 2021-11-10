import './NavBar.scss'
import logo from '../../logoPurple.jpg';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {

    return <header className='header'>
    <h1>Purple Haze ✨</h1>

    <img className="topLogo" src={logo} alt="Logo Purple Haze" />
    
    <nav>
        <ul>
            <li><a href="url">Colecciones</a></li>
            <li><a href="url">Shop</a></li>
            <li><a href="url">Help</a></li>
        </ul>
    </nav>

    <CartWidget/>

    </header>
}

