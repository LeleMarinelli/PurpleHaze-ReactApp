import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'

import './ItemList.scss'


export const ItemList = ( {titulo,greeting,productos} ) => {

    return (

        <Container>

        <section className="section1">
                <h2>{titulo}</h2>
                <p>{greeting}</p>
        </section>
  
        <Row> 
            {productos.map( (prod) => (
                <div className="itemCard" key="{prod.id}" >
                    <img src={prod.img} alt={prod.name}/>
                    <div>
                        <h3>{prod.name}</h3>
                        <p>{prod.price} $</p>
                        <p>{prod.desc}</p>
                        <ItemCount stock={prod.stock}/>      
                    </div>
                </div>    
            )
            )      
            }
      </Row>
      </Container>
    
    )
}
