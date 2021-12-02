import  { createContext, useState } from "react";

export const CrazyMode = createContext()

export const CrazyModeProvider = ({children}) =>{

    const [crazy, setCrazy] = useState(false)

    return(
        <CrazyMode.Provider value={{crazy, setCrazy}}>
            {children}
        </CrazyMode.Provider>
    )

}