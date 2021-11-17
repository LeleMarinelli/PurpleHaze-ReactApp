import React from 'react'
import { Row } from 'react-bootstrap'
import './ItemList.scss'


export const ItemList = ( {titulo,greeting,productos} ) => {

    return (

        <div className="containerItems">

        <section className="section1">
                <h2>{titulo}</h2>
                <p>{greeting}</p>
        </section>
  
        <Row>
            {productos.map( (prod) => (
                <div key="{prod.id}" className="itemCard">
                    <img src={prod.img} alt={prod.name}/>
                    <div>
                        <h3>{prod.name}</h3>
                        <p>{prod.price} $</p>
                        <p>{prod.desc}</p>
                    </div>
                </div>    
            )
            )      
            }
        </Row>
        </div>
    )
}
