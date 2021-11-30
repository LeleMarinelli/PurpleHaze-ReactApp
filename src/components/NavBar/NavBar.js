import './NavBar.scss'
import logo from '../../logoPurple.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    return <header className='header'>
    <h1>Purple Haze ✨</h1>

    <img className="topLogo" src={logo} alt="Logo Purple Haze" />
    
    <nav>
        <ul>
            <li> <Link to="/"> Home</Link> </li>

            <li> <Link to="/categories/brute"> Brute </Link> </li>

            <li> <Link to="/categories/polished"> Polished </Link> </li>

            <li> <Link to="/enciclopedia"> Enciclopedia </Link> </li>

            <li> <Link to="/contact"> Contact us </Link> </li>
            
        </ul>
    </nav>


    <Link to="/cart"> <CartWidget/></Link>

    

    </header>
}

