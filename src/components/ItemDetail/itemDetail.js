import React from 'react'

import './ItemDetail.scss'
import { TiArrowBackOutline } from 'react-icons/ti';
import { GiHouse } from 'react-icons/gi';
import { useNavigate } from 'react-router';

export const ItemDetail = ({id, name, price, desc, img, stock, category}) => {

    const navigate = useNavigate()


    const handleVolver =  () => {
        navigate(-1)
    }

    const handleVolverInicio =  () => {
        navigate('/')
    }
   

    return (
        <div>
            <img className="itemDetailPic" src={img} alt={name}/>
            <h2>{name}</h2>
            <p> Hola! Este amuleto vale $ {price}</p>

            <button className="botonItemDetail" onClick={handleVolver}> < TiArrowBackOutline className="icon"/> </button>  
            <button className="botonItemDetail" onClick={handleVolverInicio}> < GiHouse className="icon"/> </button>                  
        </div>
    )
}
