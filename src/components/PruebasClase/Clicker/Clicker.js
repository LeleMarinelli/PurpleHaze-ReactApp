import React, {useEffect, useState} from 'react'
import "./Clicker.scss"

export const Clicker = () => {

    const [clicks, setClicks] = useState(0);

    const sumarClicks = () => {
        setClicks(clicks + 1)
        }

    useEffect(() => {
        console.log(
            "me monté"
        );
    }, [])


    return (
        <div onClick={sumarClicks} className="ContainerClicker">
            <p>Click to start counting </p>
            <p>{clicks}</p>
            <p>FyH del ultimo click: { new Date().toLocaleString()} </p>
        </div>
    )
}
