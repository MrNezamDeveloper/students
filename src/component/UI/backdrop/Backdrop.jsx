import React from 'react'
import './backdrop.css'

const Backdrop = (props) => {
    return ( 
        props.show ? <div className='backdrop' onClick={props.show}></div> : null
     );
}
 
export default Backdrop;