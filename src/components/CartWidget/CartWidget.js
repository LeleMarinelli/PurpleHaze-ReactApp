import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


//elegir el icono abajo e importar
import { HiShoppingCart } from "react-icons/hi";

//Estilos
import './CartWidget.scss'



export const CartWidget = () => {

    const {totalCantidad, carrito} = useContext(CartContext)

    return (
        <div className={carrito.length === 0 ? 'CartWidgetDisable' : 'CartWidget'}>
            <Link to="/cart" > < HiShoppingCart className="icon"/> </Link>         
            <p>{totalCantidad()}</p>                      
        </div>
    )
}
