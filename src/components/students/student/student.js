import React from 'react';
import './students.css';
import Button from '../../UI/button/button';
import PropTypes from 'prop-types';
const Student = (props) => {

    return (
        <div className="students">
            <label>Student Number :{props.id}</label>
            <label>Full Name:{props.name}</label>
            <label>Class Number :{props.classNumber}</label>
            <label>Phone Number :{props.phoneNumber}</label>
            <label>Email : {props.email}</label>
            <label>Score : {props.score}</label>
            <label >
                <Button
                    btnType="danger"
                    clicked={props.deleted}
                >
                    Delete
            </Button>

                <Button
                    btnType="success"
                    clicked={props.edited}
                >
                    Edit
                </Button>


            </label>

        </div>
    )
}
export default React.memo(Student);
Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classNumber: PropTypes.number.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    deleted: PropTypes.func.isRequired
}