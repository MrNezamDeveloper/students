import React from 'react'
import './button.css'

const Button = (props) => {
    let classes = ["button"]
    switch (props.btntype) {
        case "danger":
            classes.push("danger");
            break;
    
        default:
            break;
    }
    return ( 
        <button className={classes.join(' ')} onClick={props.deleted}>
            {props.children}
        </button>
     );
}
 
export default Button;