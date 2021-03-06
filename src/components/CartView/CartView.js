import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

//Estilos
import './CartView.scss'
import { CartItem } from './CartItem';
import { BotoneraVolverYHome } from '../BotoneraVolverYHome/BotoneraVolverYHome';
import { BotoneraVaciarPagar } from '../BotoneraVaciarPagar/BotoneraVaciarPagar';


export const CartView = () => {

    const {carrito, totalCompra} = useContext(CartContext)
    const totalAPagar = totalCompra()

    if (carrito.length === 0){
                return (
                <div className="PurpleHazeApp">

                    <h2 className="tituloCartView">No hay productos en el carrito...</h2>
                            
                    <BotoneraVolverYHome/>

                </div>
                
                )
    }

    return (

        <div className="PurpleHazeApp">

                <h2 className="tituloCartView">Carrito de compras</h2>
                <section>
                    {
                       carrito.map((prod) => <CartItem {...prod} key={prod.id}/>)
                    }
                </section>
                <p className="textoTotal">El total a pagar es: <br/> ${totalAPagar}</p>


                <BotoneraVaciarPagar/>
          
        </div>

    )
}
