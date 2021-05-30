import React, { useState, useEffect } from 'react';
import './App.css';
import NewStudent from './component/newStudent/NewStudent';
import Students from './component/Students';
import Button from './component/UI/Button/Button';

const App = () => {
  const [state, setState] = useState([
    { id: 1, name: "mohamad", classnumber: 123, tell: 1912, email: "moonezam@yahoo.com" },
    { id: 2, name: "reza", classnumber: 233, tell: 9142, email: "moonezam@yahoo.com" },
    { id: 3, name: "alireza", classnumber: 14423, tell: 5912, email: "moonezam@yahoo.com" },
    { id: 4, name: "mohamadreza", classnumber: 13323, tell: 9712, email: "moonezam@yahoo.com" },
  ])
  const [toggle, setToggle] = useState(false);
  const [arryHold, setArryHold] = useState([])
  const [search, setSearch] = useState('');
  const [newstudent, setnewstudent] = useState('')
  const [newclassnumber, setnewclassnumber] = useState();
  const [newtell, setnewtell] = useState()
  const [newemail, setnewemail] = useState('')




  useEffect(() => {
    setArryHold(state)
  }, []);

  const searchHandeler = (e) => {
    const itemData = arryHold.filter((item) => {
      const itemData = item.name.toUpperCase()
      const textData = e.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setState(itemData)
    setSearch(e.target.value)
  }

  const nameHandeler = (event, id) => {
    const studentIndex = state.findIndex(para => para.id === id)
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


  const toggleHandler = () => {
    setToggle(!toggle)

  }




  const handelNewStudent = () => {
    const studentNew = [...state]
    studentNew.push({
      "id": state.length,
      "name": newstudent,
      "classnumber": newclassnumber,
      "tell": newtell,
      "email": newemail
    })
    setState(studentNew)
    setnewstudent("")
    setnewemail('')
    setnewtell('')
    setnewclassnumber('')
  }
  const handlenewstudent = (e) => {
    setnewstudent(e.target.value)
  }
  const handlenewclassnumber = (e) => {
    setnewclassnumber(e.target.value)
  }

  const handlenewtell = (e) => {
    setnewtell(e.target.value)
  }
  const handlenewemail = (e) => {
    setnewemail(e.target.value)
  }
  return (

    <div className="app">
      <NewStudent
        newstudent={newstudent}
        newclassnumber={newclassnumber}
        newtell={newtell}
        newemail={newemail}
        handlenewstudent={handlenewstudent}
        handlenewclassnumber={handlenewclassnumber}
        handlenewtell={handlenewtell}
        handlenewemail={handlenewemail}
        handelNewStudent={handelNewStudent}



      />
      <h3>جستجو بر اساس نام دانش آموز</h3>
      <input value={search} onChange={searchHandeler} />
      <Button btntype="success" clicked={toggleHandler}>
        تغییر وضعیت
      </Button>
      <Students
        stateStudents={state}
        nameHandeler={nameHandeler}
        changeClassNumber={changeClassNumber}
        changeTell={changeTell}
        changeEmail={changeEmail}
        deleted={handelDelet}
        toggle={toggle}
      />
    </div>


  );
}

export default App;

