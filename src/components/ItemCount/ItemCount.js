import React, {useState} from 'react'
import "./ItemCount.scss"

import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';

export const ItemCount = ({stock}) => {
   

    const [Counter, setCounter] = useState(1);
    

    const sumarCounter = () => {
        if (stock > Counter){
        setCounter(Counter+1)} 
    }
      
    const restarCounter = () => {
        if (Counter > 1){
        setCounter(Counter - 1)}
    }

    const alertaAgregar = () => {
        alert(`Se han agregado ${Counter} productos`)
    }

    return (
        <div className="ContainerClicker">

            <button onClick={restarCounter} className="botonDorado"> < BsFillEmojiDizzyFill className="icon"/> </button>
            
            <p>{Counter}</p>

            <button onClick={sumarCounter} className="botonDorado"> < BsFillEmojiHeartEyesFill className="icon"/> </button>

            <button onClick={alertaAgregar} className="botonDorado, botonDoradoAfuera"> < FaThumbsUp className="icon"/> </button>

        </div>
    )
}
