import React from 'react'
import Student from './student/Student';
import PropTypes from 'prop-types';
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
 
export default React.memo( Students) ; 

Students.propTypes={
    toggle : PropTypes.bool.isRequired,
    stateStudents : PropTypes.array.isRequired,
    nameHandeler:PropTypes.func.isRequired ,
    changeClassNumber :PropTypes.func.isRequired ,
    changeTell :PropTypes.func.isRequired ,
    changeEmail: PropTypes.func.isRequired,
    deleted : PropTypes.func.isRequired
}