import React from 'react'
import Button from '../../../UI/Button/Button.jsx';
import Modul from '../../../UI/Button/modul/modul.jsx';
import Logo from '../logo/Logo.jsx';
import MenuItems from '../MenuItems/MenuItems.jsx';
import './toolbar.css'

const Toolbar = () => {
    return ( 
        <header className="toolbar">
            <Logo/>
            <nav>
                <MenuItems/>
            </nav>
            <Modul/>
            <Button btntype='success' >login</Button>
        </header>
     );
}
 
export default Toolbar;