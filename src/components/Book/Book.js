import React from 'react'
import { useParams } from 'react-router'
import { BotoneraVolverYHome } from '../BotoneraVolverYHome/BotoneraVolverYHome'
import { useProductos } from '../ItemListContainer/useProductos'
import './Book.scss'


export const Book = () => {

    const {catId} = useParams()

    const {productos} = useProductos(catId)


    return (
        <div className="PurpleHazeApp book">

            <h2>Enciclopedia de objetos</h2>

            {productos.map( (prod) => (
                <div className="itemCartView" key={prod.id} >
                    <h3>{prod.name}</h3>
                    <p> {prod.desc}</p>
                    <img className="itemDetailPic" src={prod.img} alt={prod.name}/>
                </div>    
            )
            )      
            }

            <BotoneraVolverYHome/>
          
        </div>
    )
}
