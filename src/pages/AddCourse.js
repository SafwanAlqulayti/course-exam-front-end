import React, { useState } from "react";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";


function AddCourse(){
 const [courseAdded, setCourseAdded] = useState(false);
const [courseName , setCourseName] = useState();
const [ courseCategory , setCourseCategory] = useState();
const [isError, setIsError] = useState(false);


function postCourse(){
 axios.post('http://localhost:7000/courses',{
     name: courseName ,
     category: courseCategory
 }).then(result=>{
     if(result.status === 200){
     setCourseAdded(true);
     } else {
        setIsError(true);
      }
 }).catch(e => {
    setIsError(true);
  });
}
if (courseAdded) {
    return <Redirect to="/" />;
  }
 
return(
    <Card>
      <Form>
        <Input
          type="courseName"
          value={courseName}
          onChange={e => {
            setCourseName(e.target.value);
          }}
          placeholder="Course Name"
        />
        <Input
          type="courseCategory"
          value={courseCategory}
          onChange={e => {
            setCourseCategory(e.target.value);
          }}
          placeholder="Course Category"
        />
        <Button onClick={postCourse}>Add course</Button>
      </Form>
      { isError &&<Error>The course did not added</Error> }

    </Card>
)

}
export default AddCourse