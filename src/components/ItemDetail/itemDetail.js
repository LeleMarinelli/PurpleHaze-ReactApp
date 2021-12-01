import React, {useState} from 'react'

import './ItemDetail.scss'
import { TiArrowBackOutline } from 'react-icons/ti';
import { GiHouse } from 'react-icons/gi';
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { GiBuyCard } from "react-icons/gi";

export const ItemDetail = ({id, name, price, desc, img, stock, category}) => {

    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)
    const [agregado, setAgregado] = useState(false)


    const handleVolver =  () => {
        navigate(-1)
    }

    const handleVolverInicio =  () => {
        navigate('/')
    }

    const alertaAgregar = () => {
    
        console.log('Item agregado:', {
                id,
                name,
                price,
                counter
        })

        setAgregado(true)
     }
   

    return (
        <div className="itemDetail">
            <img className="itemDetailPic" src={img} alt={name}/>
            <h2>{name}</h2>
            <p> Hola! Este amuleto vale $ {price}</p>

            {
                !agregado 
                    ?<ItemCount 
                        max={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        botonAgregar={alertaAgregar}
                    />
                 
                :<Link to="/cart"> < GiBuyCard className="botonItemDetail finish"/> </Link> 
                
            }


            <div>
            <button className="botonItemDetail" onClick={handleVolver}> < TiArrowBackOutline className="icon"/> </button>  
            <button className="botonItemDetail" onClick={handleVolverInicio}> < GiHouse className="icon"/> </button>   
            </div>


        </div>
    )
}
