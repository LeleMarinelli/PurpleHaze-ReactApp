import React, { useEffect, useState } from 'react'

import './ItemDetailContainer.scss'
import { Container } from 'react-bootstrap'

export const ItemDetailContainer = () => {


    const [itemPoke, setItemPoke] = useState(null)

    const [id, setId] = useState(80)

    const handleAnterior = () => {
        id > 80 && setId(id - 1)
    }

    const handleSiguiente = () => {
        setId(id + 1)
    }


    useEffect(() => {
            
        fetch(`https://pokeapi.co/api/v2/item/${id}`)
            .then((respuestaPokeapi)=> respuestaPokeapi.json())
            .then((data) => {

                setItemPoke({
                    name: data.name,
                    img: data.sprites.default
                }
                )
            }
            )

    }, [id])

    console.log(id);



    return (

        <div className="PurpleHazeApp">
        <Container>
            <h2> Catalogo de Objetos </h2>

            <div className="itemCard">

                {   itemPoke !== null &&
                                                                    
                    <>
                        <h3>{itemPoke.name}</h3>
                        <img src={itemPoke.img} alt={itemPoke.name} />
                    </>
                }

                <div>

                <button className="botonDorado" onClick={handleAnterior}>
                    Anterior
                </button>    
                <button className="botonDorado" onClick={handleSiguiente}>
                    Siguiente
                </button>
                </div>
               
            </div>
        
        </Container>
        </div>
    )
}
