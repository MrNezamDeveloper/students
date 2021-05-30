import React from 'react'
import logo from '../../../../../img/logo.png'
import Button from '../../Button';
import './singin.css'
const Singin = () => {
    return ( 
   
        <div className='modul'>
            <img src={logo} alt="logo" />
            <input className='input-modal' type="text" placeholder="username" />
            <input className='input-modal' type="password" placeholder="password" />
            <Button btntype="danger" clicked={()=>alert('gozoooooooooooooo')}>ورود و عضویت</Button> 
        </div>
     );
}
 
export default Singin;