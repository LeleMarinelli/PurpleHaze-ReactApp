import React from 'react'
import './ItemListContainer.scss'

export const ItemListContainer = ( {titulo,greeting} ) => {
    return (
        <div className="PurpleHazeApp">

            <section className="section1">
                <h2>{titulo}</h2>

                <p style={{color: "thistle"}}>{greeting}</p>
            </section>

        </div>
    )
}
