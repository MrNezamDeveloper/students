import React from 'react'
import PropTypes from "prop-types"
import './button.css'

const Button = (props) => {
    let classes = ["button"]
    switch (props.btntype) {
        case "danger":
            classes.push("danger");
            break;
            case "success":
                classes.push("success");
                break;
        default:
            break;
    }
    return ( 
        <button className={classes.join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
     );
}
 
export default React.memo(Button);
Button.propTypes = {
    btntype : PropTypes.string.isRequired,
    clicked : PropTypes.func.isRequired,
    children : PropTypes.string.isRequired
}