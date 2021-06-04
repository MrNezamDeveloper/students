import React, { useState, useEffect, useRef } from 'react';
import Students from '../components/students/students';
import Button from '../components/UI/button/button';
import Spinner from '../components/UI/spinner/spinner';
import ErrorHandler from '../components/hoc/ErrorHandler';
import axios from '../axios';
const HomePage = (props) => {
  const inputEl = useRef(null);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [studentsState, setStudents] = useState([

  ]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1

    })
    setStudents(itemData);
    setSearchBarValue(event.target.value)

  }
  useEffect((studentsState) => {
    setArrayHolder(studentsState);
    inputEl.current.focus();
    //console.log(props);
    setLoading(true)
    axios.get('/posts')
      .then(response => {
        // console.log(response.data);
        const students = response.data.slice(0, 4);
        const updatedStudents = students.map(student => {
          return {
            ...student,
            score: 20
          }
        })
        setStudents(updatedStudents);
        setLoading(false)
      }).catch(error => {
        console.log(error)
      });
  }, [])
  useEffect(() => {

  }, [studentsState])
  const nameChangeHandler = (event, id) => {
    const studentIndex = studentsState.findIndex(student => {
      return student.id === id;
    })
    //console.log(studentIndex);
    const student = { ...studentsState[studentIndex] };
    //console.log(student);
    student.name = event.target.value;
    const students = [...studentsState];
    students[studentIndex] = student;
    setStudents(students);
  }
  const deleteStudent = (id) => {
    const students = [...studentsState];
    let index = id - 1;
    students.splice(index, 1);
    axios.delete(`/posts/${id}`)
      .then(response => {
        console.log(response)
      })
    setStudents(students);
  }
  const toggleHandler = () => {
    console.log(toggle)
    setToggle(!toggle)
  }
  const edited = (id) => {
    //console.log(props);
    //props.history.push({pathname:'/student/'+id});
    props.history.push('/student/' + id)
  }
  return (
    <React.Fragment>
      <input type="text" value={searchBarValue} onChange={searchFilterFunction} className="search-bar" ref={inputEl} style={{ marginTop: '70px' }} />
      <Button
        btnType="success"
        clicked={toggleHandler}
      >
        تغییر وضعیت نمایش
            </Button>
      {
        loading ? <Spinner /> :
          <Students
            studentsList={studentsState}
            nameChanged={nameChangeHandler}
            deleted={deleteStudent}
            toggle={toggle}
            edited={edited}
          />
      }

    </React.Fragment>
  )
}
export default ErrorHandler(HomePage, axios);