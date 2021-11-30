import React from 'react'

import { Container, Row } from 'react-bootstrap'


import { GiThink } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import './ItemList.scss'


export const ItemList = ( {titulo,greeting,productos} ) => {

    //Cambio de estado para cambiar un mje con delay.
   

    return (

        <Container>

        <section className="section1">
                <h2>{titulo}</h2>
                <p>{greeting}</p>
        </section>
  
        <Row> 
            {productos.map( (prod) => (
                <div className="itemCard" key={prod.id} >
                    <img src={prod.img} alt={prod.name}/>
                    <div>
                        <h3>{prod.name}</h3>
                        <p>{prod.price} $</p>

                        <Link to={`/detail/${prod.id}`}><button className="botonVerMas"> < GiThink className="icon"/> </button></Link>

                        {/* <ItemCount stock={prod.stock}/>       */}
                        
                    </div>
                    
                </div>    
            )
            )      
            }
      </Row>
      </Container>
    
    )
}
