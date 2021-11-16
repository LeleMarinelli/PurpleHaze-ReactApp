import React, {useState} from 'react'
import "./ItemCount.scss"

import { BsFillEmojiDizzyFill } from 'react-icons/bs';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';


export const ItemCount = ({stock, initial}) => {

    

    const [clicks, setClicks] = useState(0);
    

    const sumarClicks = () => {
        if (clicks < stock){
        setClicks(clicks + 1)}
        }
      
    const restarClicks = () => {
        if (clicks >= initial){
        setClicks(clicks - 1)}
        }

    return (
        <div className="ContainerClicker">

            <button onClick={restarClicks} className="botonDorado"> < BsFillEmojiDizzyFill className="icon"/> </button>
            
            <p>{clicks}</p>

            <button onClick={sumarClicks} className="botonDorado"> < BsFillEmojiHeartEyesFill className="icon"/> </button>

        </div>
    )
}
