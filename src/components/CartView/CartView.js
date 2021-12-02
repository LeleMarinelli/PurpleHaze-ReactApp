import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import { BsTrash } from 'react-icons/bs';
import { GiPayMoney } from 'react-icons/gi';

//Estilos
import './CartView.scss'
import { CartItem } from './CartItem';
import { BotoneraVolverYHome } from '../botoneraVolverYHome/BotoneraVolverYHome';


export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

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

                        <div>
                        <button className="botonCartView" onClick={vaciarCarrito}> < BsTrash className="icon 1"/> </button>  
                        <button className="botonCartView" > < GiPayMoney className="icon 2"/> </button>   
                        </div>
                    </>
                    
                :<>
                <h2 className="tituloCartView">No hay productos en el carrito...</h2>
                    
                <BotoneraVolverYHome/>

                </>


            }
          
        </div>

    )
}
