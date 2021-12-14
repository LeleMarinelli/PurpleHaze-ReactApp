import React, { useContext } from 'react'
import './BotoneraVaciarPagar.scss'

import { BsTrash } from 'react-icons/bs';
import { GiPayMoney } from 'react-icons/gi';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext'




export const BotoneraVaciarPagar = () => {

    const {vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <button className="botonCartView emptyButton" onClick={vaciarCarrito}> < BsTrash className="icon"/> </button>  
            <Link to="/checkout"> < GiPayMoney className="botonCartView payButton icon"/> </Link>
        </div>
    )
}
