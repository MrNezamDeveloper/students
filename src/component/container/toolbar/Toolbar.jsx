import React from 'react'
import Logo from '../logo/Logo.jsx';
import './toolbar.css'

const Toolbar = () => {
    return ( 
        <header className="toolbar">
            <Logo/>
            <nav>navigation items</nav>
            <button>login</button>
        </header>
     );
}
 
export default Toolbar;