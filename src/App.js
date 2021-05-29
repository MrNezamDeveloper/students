import React, { useState } from 'react';
import './App.css';
import Students from './component/Students';

const App = () => {
  const [state, setState] = useState([
    { id: 1, name: "moo", classnumber: 123, tell: 1912, email: "moonezam@yahoo.com" },
    { id: 2, name: "moo", classnumber: 233, tell: 9142, email: "moonezam@yahoo.com" },
    { id: 3, name: "moo", classnumber: 14423, tell: 5912, email: "moonezam@yahoo.com" },
    { id: 4, name: "moo", classnumber: 13323, tell: 9712, email: "moonezam@yahoo.com" },
  ])


  const nameHandeler = (event, id) => {
    const studentIndex = state.findIndex((para) => {
      return para.id === id
    })
    const findStudent = { ...state[studentIndex] }
    findStudent.name = event.target.value;
    const students = [...state]
    students[studentIndex] = findStudent;
    setState(students)
  }


  const changeClassNumber = (event, id) => {
    const findIndex = state.findIndex(para => para.id === id);
    const objStudent = { ...state[findIndex] }
    objStudent.classnumber = event.target.value
    const cstate = [...state]
    cstate[findIndex] = objStudent;
    setState(cstate)

  }

  const changeTell = (e, id) => {
    const findindex = state.findIndex(para => para.id === id)
    const objStudent = { ...state[findindex] }
    objStudent.tell = e.target.value
    const students = [...state]
    students[findindex] = objStudent
    setState(students)
    console.log(state)
  }

  const changeEmail = (e, id) => {
    const findindex = state.findIndex(para => para.id === id)
    const objEmail = { ...state[findindex] }
    objEmail.email = e.target.value
    const cstate = [...state]
    cstate[findindex] = objEmail
    setState(cstate)
  }
  const handelDelet = (index) => {
    const cpstate = [...state]
    cpstate.splice(index, 1)
    setState(cpstate)
  }
  return (
    <div className="app">
      <Students
        stateStudents={state}
        nameHandeler={nameHandeler}
        changeClassNumber={changeClassNumber}
        changeTell={changeTell}
        changeEmail={changeEmail}
        deleted={handelDelet}
      />
    </div>


  );
}

export default App;

