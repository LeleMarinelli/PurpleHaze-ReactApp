import React, {useContext, useState} from 'react'

import './ItemDetail.scss'

import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { GiPayMoney } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';
import { BotoneraVolverYHome } from '../BotoneraVolverYHome/BotoneraVolverYHome';

export const ItemDetail = ({id, name, price, img, stock }) => {
    
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    
    const [counter, setCounter] = useState(1)
 
    const alertaAgregar = () => {

        if (counter > 0) {
            
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                counter
            })

            console.log('Item agregado:', {
                    id,
                    name,
                    price,
                    counter
            })
        }
     }
   

    return (
        <div className="itemDetail">
            <img className="itemDetailPic" src={img} alt={name}/>
            <h2>{name}</h2>
            <p> Hola! Este amuleto vale $ {price}</p>

            {
                !isInCart(id) 
                    ?<ItemCount 
                        max={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        botonAgregar={alertaAgregar}
                    />
                 
                    :<Link to="/cart"> < GiPayMoney className="finish"/> </Link> 
                
            }
            
            <BotoneraVolverYHome/>

        </div>
    )
}
