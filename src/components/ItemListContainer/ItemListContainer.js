// import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
// import { Clicker } from '../PruebasClase/Clicker/Clicker'
import './ItemListContainer.scss'

export const ItemListContainer = ( {titulo,greeting} ) => {

    // const [MostrarClicker, setMostrarClicker] = useState(true)

    // const handleMostrar = () => {
    //     setMostrarClicker(!MostrarClicker)
    // }



    return (
        <div className="PurpleHazeApp">

            <section className="section1">
                <h2>{titulo}</h2>

                <p>{greeting}</p>
            </section>

        <ItemCount stock="5"/>  

        {/* <button onClick={handleMostrar} className="botonDorado"> ??? </button>

        {MostrarClicker && <Clicker/>} */}

        

        </div>
    )
}
