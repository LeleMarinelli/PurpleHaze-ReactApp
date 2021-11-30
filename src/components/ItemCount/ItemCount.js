
import "./ItemCount.scss"

import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';

export const ItemCount = ({max, counter, setCounter,botonAgregar}) => {
   
    const restarCounter = () => {
        counter > 0 && setCounter(counter - 1)
        }
        
    const sumarCounter = () => {
        counter < max && setCounter(counter + 1)
    }


    return (
        <div className="ContainerClicker">

            <button onClick={restarCounter} className="botonDorado"> < BsFillEmojiDizzyFill className="icon"/> </button>
            
            <p>{counter}</p>

            <button onClick={sumarCounter} className="botonDorado"> < BsFillEmojiHeartEyesFill className="icon"/> </button>

            <button onClick={botonAgregar} className="botonDorado, botonDoradoAfuera"> < FaThumbsUp className="icon"/> </button>

        </div>
    )
}
