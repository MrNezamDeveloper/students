import React, { createContext, useState } from 'react'


export const MyContext = createContext()

const AuthContextProvider = (props) =>{
const [Auth, setAuth] = useState(false)
const login = () =>{
    setAuth(true)
}
return(


<MyContext.Provider value={{login , Auth}}>
{props.children}
</MyContext.Provider>
)

}

export default AuthContextProvider ; 