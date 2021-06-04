import React, { useState, useContext } from 'react';
import './Toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../MenuItems/MenuItems';
import Button from '../../../components/UI/button/button';
import Modal from '../../../components/UI/modal/Modal';
import SignIn from '../../../components/user/signIn/signIn';
import SideDrawer from '../SideDrawer/SideDrawer';
import { MyContext } from '../../../Context/Auth';
import { ThemContext } from '../../../Context/Them';



const Toolbar = (props) => {
    const { Auth } = useContext(MyContext)

    const [showModal, setShowModal] = useState(false);
    const [openSideDrawer, setOpenSideDrawer] = useState(false);
    const { them, dark, light } = useContext(ThemContext)
    const themToolbar = them ? light : dark

    const modalHandler = () => {
        setShowModal(true)
    }
    const modalClosed = () => {
        setShowModal(false)

    }
    const DrawerHandler = () => {
        setOpenSideDrawer(true)
    }
    const closeDrawer = () => {
        setOpenSideDrawer(false)
    }
    return (

        <header className="Toolbar" style={{ background: themToolbar.bg, color: themToolbar.syntax, transition: "1000ms" }} >

            <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
            <div onClick={DrawerHandler}>Hamberger Icon</div>
            <span className="showNav">
                <Logo height="80%" />
            </span>
            <span className="showNav">
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span className="showNav">

                {
                    Auth ? <Button btnType="danger" clicked={() => alert('please waite ...')}> Logout  </Button> :
                        <Button btnType="danger" clicked={modalHandler}> Login / Register</Button>
                }



            </span>


            <Modal show={showModal} modalClosed={modalClosed}>
                <SignIn />
            </Modal>

        </header>
    )
}
export default Toolbar;