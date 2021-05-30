import React from 'react'
import './menuitem.css'

const MenuItem = (props) => {

    let classes = [];
    if(props.active){
        classes.push("active")
    }


    return ( 
        <li className='menuitem'>
            <a href={props.link} className={classes}>
                {props.children}
            </a>
        </li>
     );
}
 
export default React.memo( MenuItem);