import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router, Link,Redirect, Route  , withRouter} from "react-router-dom";
import axios from 'axios';

class Student extends Component {
    constructor(){
        super()
        this.state = {
            StudentCourses: []
        }

    }
     
   componentDidMount(){
    const  x = localStorage.getItem('tokens') ;
    const user =jwt_decode(x)
    const id = user.user._id
  
       console.log(this.state.id)
axios.get(`https://course-exam.herokuapp.com/users/${id}`)
.then(res=>{
     
console.log(res.data.courses)  
this.setState({
    StudentCourses:  res.data.courses
})  
})
  
    }
    render() {

        return (
            <div>
 <button  type="button" class="btn btn-primary" onClick={()=>{ this.props.history.push('thequiz')}}>Take quiz</button>

                <h1>My courses</h1>
                
               {/* <h2> {this.props.name}</h2>
               <p>{this.props.courses}</p> */}
               <table class="table    ">
              
  <thead className="thead-dark ">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Name</th>
      <th scope="col">Category</th>
   

    </tr>
  </thead>
  { 
  this.state.StudentCourses.map((element , i)=>
 
  <tr>
 <th scope="row">{i+1}</th>
 <td>{element.name}</td>


  <td>{element.category}</td>
 
 
   </tr>
  )}
  
      
 

  <tbody>
  
   
  </tbody>
</table>

            </div>
        );
    }
}

export default withRouter(Student);