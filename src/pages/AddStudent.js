import React, { useState, useEffect } from 'react';
import NewStudent from '../components/students/newStudent/newStudent';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const AddStudent = (props) => {
  useEffect(() => {
    //console.log(props);
  }, [])
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentPhoneNumber, setStudentPhoneNumber] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [error, setError] = useState(false);
  const studentNameHandler = (event) => {
    setStudentName(event.target.value)
  }
  const studentClassHandler = (event) => {
    setStudentClass(event.target.value)
  }
  const studentPhoneNumberHandler = (event) => {
    setStudentPhoneNumber(event.target.value)
  }
  const studentEmailHandler = (event) => {
    setStudentEmail(event.target.value);
  }
  const addStudent = () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
    axios.post('/posts', data)
      .then(response => {
        setError(false)
        console.log(response);
        props.history.push('/');
        //props.history.replace('/');
      }).catch(error => {
        setError(true)
        console.log(error)
      })


    //setResult(true)
  }
  let ErrorMessage = null;
  if (error) {
    ErrorMessage = <h1 style={{ textAlign: 'center', color: 'red' }}>متاسفانه عملیات شما با شکست روبرو شد.لطفا مجددا تلاش کنید</h1>
  }
  return (
    <React.Fragment>
      {ErrorMessage}
      <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        clicked={addStudent}

      />
    </React.Fragment>

  )
}
export default withRouter(AddStudent);