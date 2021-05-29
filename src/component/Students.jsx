import React from 'react'
import Student from './student/Student';
import "./student/student.css"


const Students = (props) => {
if(props.toggle){
    return(

    <div className="flex-display">
            {props.stateStudents.map((student,index)=>{
            return(
                <Student 
                    key={index}
                    id={student.id}
                    name={student.name}
                    classnumber={student.classnumber}
                    tell={student.tell}
                    email={student.email}
                    nameChange={(event)=> props.nameHandeler(event , student.id)}
                    changeClassNumber={(event)=> props.changeClassNumber(event, student.id)}
                    changeTell={(event)=> props.changeTell(event , student.id)}
                    changeEmail={(e)=>props.changeEmail(e , student.id)}
                    deleted = {props.deleted}
                />
            )
        })}
        
        </div>
    )
}

return(

    props.stateStudents.map((student,index)=>{
        return(
            
            <Student 
                key={index}
                id={student.id}
                name={student.name}
                classnumber={student.classnumber}
                tell={student.tell}
                email={student.email}
                nameChange={(event)=> props.nameHandeler(event , student.id)}
                changeClassNumber={(event)=> props.changeClassNumber(event, student.id)}
                changeTell={(event)=> props.changeTell(event , student.id)}
                changeEmail={(e)=>props.changeEmail(e , student.id)}
                deleted = {props.deleted}
            />
        )
    })
)
 
 
    
}
 
export default Students;