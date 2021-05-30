import React, { useState } from 'react'
import Button from '../../../UI/Button/Button.jsx';
import Modul from '../../../UI/Button/modul/modul.jsx';
import Logo from '../logo/Logo.jsx';
import MenuItems from '../MenuItems/MenuItems.jsx';
import './toolbar.css'

const Toolbar = () => {
    const [moudal, setmoudal] = useState(false)
   const handellogin = () =>{
       setmoudal(true)
   }

   const handelbackdrop =()=>{
    setmoudal(false)
   }
    return ( 
        <header className="toolbar">
            <Logo/>
            <nav>
                <MenuItems/>
            </nav>
            
           
            <Button btntype='success' clicked={handellogin} >login</Button>
            {
                moudal ?  <Modul show={handelbackdrop}/> : null
            }
             
            
        </header>
     );
}
 
export default Toolbar;