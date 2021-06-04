import React, { createContext, useState } from 'react'


export const ThemContext = createContext()

const ThemComnextProvider = (props) => {
    const [them, setThem] = useState(false)
    const [light] = useState({
        bg:"#000",
        syntax : "#fff"
    })
    const [dark] = useState({
        bg:"#fff",
        syntax : "#000"
    })



    const changeThem = () =>{
        setThem(!them)
    }


    return ( 
        <ThemContext.Provider value={{them , dark , light , changeThem}}>
            {props.children}
        </ThemContext.Provider>
     );
}
 
export default ThemComnextProvider;