import React, { useContext } from 'react'
import { ContextCreate } from '../context/ProvideContext'

const Darkmode = ({ dark = "", light = '', children }) => {
    const { darks } = useContext(ContextCreate)
    const darkMode = dark ? dark : "bg-black text-white"
    const lightmode = light ? light : "bg-gray-100 text-black"
    return (
        <div className={darks ? darkMode : lightmode}>
            {children}
        </div>
    )
}

export default Darkmode