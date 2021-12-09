import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import { BsTrash } from 'react-icons/bs';


export const CartItem = (prod) => {

    const {sacarDelCarrito} = useContext(CartContext)

    return (
               
    <div className="itemCartView" >
                            <img className="itemDetailPic" src={prod.img} alt={prod.name}/>
                            <h3>{prod.name}</h3>
                            <p>Cantidad: {prod.counter}</p>
                            <p>Precio: $ {prod.price}</p>
                            <button className="botonEliminarUno" onClick={()=> {sacarDelCarrito(prod.id)}}> < BsTrash className="icon"/> </button>  
    </div>
    )

}
