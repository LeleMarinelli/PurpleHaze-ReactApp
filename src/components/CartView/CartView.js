import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'



//Estilos
import './CartView.scss'
import { CartItem } from './CartItem';
import { BotoneraVolverYHome } from '../BotoneraVolverYHome/BotoneraVolverYHome';
import { BotoneraVaciarPagar } from '../BotoneraVaciarPagar/BotoneraVaciarPagar';



export const CartView = () => {

    const {carrito} = useContext(CartContext)

    return (

        <div className="PurpleHazeApp">
            
            {  
                carrito.length > 0 
                ?<>     <h2 className="tituloCartView">Carrito de compras</h2>
                        <section>
                            {
                                carrito.map((prod) => <CartItem {...prod} key={prod.id}/>)
                            }
                        </section>

                        <BotoneraVaciarPagar/>
                        
                    </>
                    
                :<>
                <h2 className="tituloCartView">No hay productos en el carrito...</h2>
                    
                <BotoneraVolverYHome/>

                </>


            }
          
        </div>

    )
}
