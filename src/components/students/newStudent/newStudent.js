import React, { useEffect } from 'react';
import classes from './newStudent.module.css';
import Button from '../../UI/button/button';
import WithClass from '../../hoc/WithClass';
import { withRouter } from 'react-router-dom'
const NewStudent = (props) => {
    useEffect((props) => {
        console.log(props)
    }, [])
    const { studentName, studentClass, studentPhoneNumber, studentEmail } = props
    const { studentNameHandler, studentClassHandler, studentPhoneNumberHandler, studentEmailHandler } = props;
    return (
        <React.Fragment>

            <h1>Add New Student</h1>
            <label>Full Name</label>
            <input type="text" value={studentName} onChange={studentNameHandler} />
            <label>Class Number</label>
            <input type="number" value={studentClass} onChange={studentClassHandler} maxLength={3} />
            <label>Phone Number</label>
            <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} />
            <label>Email</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button clicked={props.clicked} btnType="danger">Add To List</Button>
        </React.Fragment>
    )
}
export default React.memo(withRouter(WithClass(NewStudent, classes.NewPost)));