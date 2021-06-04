import React, { useEffect, useState } from 'react';
import reactappLogo from '../../../assets/images/reactapp-logo.png';
import Button from '../../UI/button/button';
import Refresh from '../../../assets/images/reload_image.jpg'
import './signIn.css';
const SignIn = (props) => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [sumtowNumber, setsumtowNumber] = useState(0)
    const [getnumberinnput, setgetnumberinnput] = useState(0)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [errorMessage, seterrorMessage] = useState("")
    useEffect(() => {
        getAndSaveNumber()
    }, [])
    const getAndSaveNumber = () => {
        let rnumber1 = Math.floor(Math.random() * 10) + 1
        let rnumber2 = Math.floor(Math.random() * 10) + 1
        setNumber1(rnumber1)
        setNumber2(rnumber2)
        let sum = rnumber1 + rnumber2
        setsumtowNumber(sum)
    }
    const changehamdler = (e) => {
        setgetnumberinnput(Number(e.target.value))

    }
    const eqoualHandler = () => {
        if (getnumberinnput === sumtowNumber) {
            const vlidform = validate()
            if (vlidform) {
                seterrorMessage('لطفا منتظر بمانید')
                fetch("http//:halaharchi",
                    {
                        method: post,
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data === "data match") {
                            alert('wellcome')

                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            }

        } else (
            seterrorMessage('مجددا تلاش کنید')
        )
    }

    const usenameHandler = (e) => {
        setusername(e.target.value)
    }
    const passwordHndler = (e) => {
        setpassword(e.target.value)
    }

    const validate = () => {
        if (username === '') {
            seterrorMessage("نام کاربری را وارد کنید ")
            return false
        } else if (!username.includes('@') || !username.includes('.')) {
            seterrorMessage('نام کاربری را به صورت صحیح وارد کنید')
            return false
        } else if (password === '') {
            seterrorMessage(" رمز را وارد کنید ")
            return false
        } else if (password.length < 5) {
            seterrorMessage(' رمز را به صورت صحیح وارد کنید')
            return false
        }
        return true
    }

    return (
        <React.Fragment>
            <img src={reactappLogo} alt="reactapp.ir" />
            <h4 style={{ color: "red" }}>{errorMessage}</h4>
            <input type="text" placeholder="username" onChange={usenameHandler} />
            <input type="password" placeholder="password" onChange={passwordHndler} />
            <div className="capcha_valid">
                {
                    (getnumberinnput === sumtowNumber) ? <p style={{ backgroundColor: "green", padding: "5px 0px", color: "white" }}>ok</p> : <img src={Refresh} onClick={getAndSaveNumber} />
                }

                <input onChange={changehamdler} />
                <p>{number2} + {number1} = </p>
            </div>
            <Button clicked={eqoualHandler}>ورود</Button>
        </React.Fragment>
    )
}

export default SignIn;