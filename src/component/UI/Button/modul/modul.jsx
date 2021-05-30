import React,{Fragment}from 'react'
import Singin from './singin/Singin';
import './modal.css'
import Backdrop from '../../backdrop/Backdrop';


const Modul = (props) => {
    return ( 
        <Fragment>

            <Backdrop show={props.show}/>
            <Singin>
                {props.children}
            </Singin>
   
        </Fragment>

     );
}
 
export default Modul;