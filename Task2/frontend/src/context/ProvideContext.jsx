import { createContext, useState } from "react";


export const ContextCreate = createContext()

export const ProvideContextData = ({ children }) => {
    //dark mode
    const [darks , setDarks] = useState(false)
    const darkModeFunction = () => {
        setDarks(!darks)
    }

    return (
        <ContextCreate.Provider value={{ darkModeFunction, darks}}>
            {children}
        </ContextCreate.Provider>
    )
}



