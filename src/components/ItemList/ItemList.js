import './ItemList.scss'
import React from 'react'

import { Container, Row } from 'react-bootstrap'

import { GiThink } from 'react-icons/gi';
import { Link } from 'react-router-dom';



export const ItemList = ( {titulo,greeting,productos} ) => {


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
                        <p>$ {prod.price}</p>

                        <Link to={`/detail/${prod.id}`}><button className="botonVerMas"> < GiThink className="icon"/> </button></Link>    
                    </div>
                    
                </div>    
            )
            )      
            }
      </Row>
      </Container>
    
    )
}
