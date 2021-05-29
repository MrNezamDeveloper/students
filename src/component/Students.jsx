import React from 'react'
import "./students.css"

const Students = (props) => {
    return ( 
        <div className="students">
            <label   htmlFor="">شماره دانش آموز</label>
            <label   htmlFor="">نام و نام خانوادگی دانش آموز</label>
            <input type="text" />
            <label  htmlFor="">شماره کلاس</label>
            <input type="number" />
            <label  htmlFor="">تلفن</label>
            <input type="number" />
            <label  htmlFor="">ایمیل</label>
            <input type="email" />
        </div>
     );
}
 
export default Students;