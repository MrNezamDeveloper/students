import React,{useContext} from 'react' ; 
import reactLogo from '../../assets/images/reactapp-logo.png'
import './logo.css'
import {ThemContext} from '../../Context/Them'




const Logo = (props) => {

    const {changeThem} = useContext(ThemContext)

    const handlechangeThem = () => {
        changeThem()
    }
    return (
        <div className="Logo" onClick={handlechangeThem} style={{ height: props.height }}>
            <img src={reactLogo} alt="reactapp.ir logo" />
        </div>
    )
}
export default React.memo(Logo);