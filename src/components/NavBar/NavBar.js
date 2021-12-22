import './NavBar.scss'
import logo from '../../logoPurple.png';

import { CartWidget } from '../CartWidget/CartWidget';

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BsFillMenuAppFill } from "react-icons/bs";

export const NavBar = () => {

    const [burgerToggle, setBurgerToggle] = useState(true)
    const [abrirCerrar, setAbrirCerrar] = useState(false)

    const burger = () => {
    setBurgerToggle(!burgerToggle);
    };

    const menuCat = () => {
    setAbrirCerrar(!abrirCerrar);
    };

    const hideMenu = () => {
        setBurgerToggle(!burgerToggle);
        setAbrirCerrar(false);
    };

    
    
  

    return (
    <header className='header'>
        
        <h1>Purple Haze ✨</h1>

        <img className="topLogo" src={logo} alt="Logo Purple Haze" />
    
            <nav>
                <ul className={!burgerToggle ? 'menuVisible': ""} >
                    <li > <Link to="/" onClick={burger}> Home</Link> </li>

                    <div className="dropDown">
                        <li onClick={menuCat}> Categories  </li>
                        
                            {
                                abrirCerrar && (  
                                <div className="dropDownMenu">
                                    <li className="dropDownItem"> <Link to="/categories/brute" onClick={hideMenu}> Brute </Link> </li>
                                    <li className="dropDownItem"> <Link to="/categories/polished" onClick={hideMenu}> Polished </Link> </li>          
                                </div>
                                )
                            }
                    </div>
                    
                    <li> <Link to="/enciclopedia" onClick={burger}> Enciclopedia </Link> </li>

                    <li> <Link to="/contact" onClick={hideMenu}> Contact us </Link> </li>                  
                </ul>
            </nav>

        

        <button className="burger" onClick={hideMenu}> < BsFillMenuAppFill className="icon"/> </button>

        <CartWidget/>

    </header>
    )
}

