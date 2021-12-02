import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


//elegir el icono abajo e importar
import { HiShoppingCart } from "react-icons/hi";

//Estilos
import './CartWidget.scss'



export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div className="CartWidget">
            <Link to="/cart" > < HiShoppingCart className="icon"/> </Link>         
            <p>{totalCantidad()}</p>                      
        </div>
    )
}


// GiAbstract011
// GiStarSwirl
// GiRevolt
// GiShoppingBag   !!!
// GiOpenChest
// GiMagicHat   !!!
// GiLockedChest  
// GiLightBackpack
// GiArcher
// GiBackpack  !!!
// GiBalloonDog

// GiAlienStare
//GiAmethyst