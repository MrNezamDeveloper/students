import React from 'react'
import Button from '../UI/Button/Button';
import './newstudent.css'

const NewStudent = (props) => {

    const {newstudent,newtell,newclassnumber,newemail} = props
     const{handlenewstudent,handlenewtell,handlenewclassnumber,handlenewemail,handelNewStudent} = props
    return ( 
        <div className="newstudents">
            <label  htmlFor="">نام و نام خانوادگی دانش آموز</label>
            <input   value={newstudent} type="text"  onChange={handlenewstudent}/>
            <label  htmlFor="">شماره کلاس</label>
            <input   value={newclassnumber} type="number" onChange={handlenewclassnumber}/>
            <label  htmlFor="">تلفن</label>
            <input   value={newtell} type="number" onChange={handlenewtell} />
            <label  htmlFor="">ایمیل</label>
            <input   value={newemail} type="email"  onChange={handlenewemail}/>
            <label>
                <Button btntype="danger" clicked={handelNewStudent}>
                            اضافه کردن دانش آموز
                </Button>
            </label>           
        </div>
     );
}
 
export default NewStudent;