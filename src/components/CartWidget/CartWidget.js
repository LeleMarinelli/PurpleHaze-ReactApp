import React from 'react'
import { Link } from 'react-router-dom';


//elegir el icono abajo e importar
import { GiBuyCard } from "react-icons/gi";

//Estilos
import './CartWidget.scss'



export const CartWidget = () => {

    return (
        <div>
            <Link to="/cart"> < GiBuyCard className="CartWidget"/> </Link>
                                    
        </div>
    )
}


// GiAbstract011
// GiStarSwirl
// GiRevolt
// GiShoppingBag   !!!
// GiOpenChest
// GiMagicHat   !!!
// GiLockedChest  
// GiLightBackpack
// GiArcher
// GiBackpack  !!!
// GiBalloonDog

// GiAlienStare
//GiAmethyst