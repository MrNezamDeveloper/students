import React from 'react'
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import "./student.css"
const Student = (props) => {
    return ( 
        <div className="students">
            <label  htmlFor="">{props.id} شماره دانش آموز </label>
            <label  htmlFor="">نام و نام خانوادگی دانش آموز</label>
            <input   value={props.name} type="text"  onChange={props.nameChange}/>
            <label  htmlFor="">شماره کلاس</label>
            <input   value={props.classnumber} type="number" onChange={props.changeClassNumber}/>
            <label  htmlFor="">تلفن</label>
            <input   value={props.tell} type="number" onChange={props.changeTell} />
            <label  htmlFor="">ایمیل</label>
            <input   value={props.email} type="email"  onChange={props.changeEmail}/>
            <label>
                <Button btntype="danger" clicked={props.deleted}>
                            حذف
                </Button>
            </label>           
        </div>
     );
}
 
export default React.memo(Student) ;

Student.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    classnumber : PropTypes.number.isRequired,
    tell : PropTypes.number.isRequired,
    email : PropTypes.string.isRequired,
    deleted : PropTypes.func
}