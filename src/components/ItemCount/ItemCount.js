
import "./ItemCount.scss"

import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';
import { botonConfig } from "./botonConfig";

export const ItemCount = ({max, counter, setCounter,botonAgregar}) => {
   
    const restarCounter = () => {
        counter > 0 && setCounter(counter - 1)
        }
        
    const sumarCounter = () => {
        counter < max && setCounter(counter + 1)
    }

    const config = botonConfig(counter, max, restarCounter, sumarCounter)

    return (
        <div className="ContainerClicker">

            <button {...config.restar} > < BsFillEmojiDizzyFill className="icon"/> </button>
            
            <p>{counter}</p>

            <button {...config.sumar}> < BsFillEmojiHeartEyesFill className="icon"/> </button>

            <button 
            onClick={botonAgregar} 
            className={counter === 0 ? "botonDisable " : "botonDorado botonDoradoAfuera"}
            disabled={counter === 0}
            > < FaThumbsUp className="icon"/> </button>

        </div>
    )
}
