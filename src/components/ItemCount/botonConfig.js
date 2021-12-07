
export const botonConfig = (counter, max, restarCounter, sumarCounter) => {

    return {
        restar:{
            onClick:restarCounter,
            className: `${counter === 0 ? "botonDisable" : "botonDorado"}`
        },
        sumar:{
            onClick:sumarCounter,
            className: `${counter === max ? "botonDisable" : "botonDorado"}`
        }
    }
}
