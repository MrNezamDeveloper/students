import React,{Fragment} from 'react'
import logo from '../../../../../img/logo.png'
import Button from '../../Button';
import './singin.css'
const Singin = () => {
    return ( 
        <Fragment>
            <img src={logo} alt="logo" />
            <input className='input-modal' type="text" placeholder="username" />
            <input className='input-modal' type="password" placeholder="password" />
            <Button btntype="danger" clicked={()=>alert('gozoooooooooooooo')}>ورود و عضویت</Button> 
        </Fragment>
     );
}
 
export default Singin;