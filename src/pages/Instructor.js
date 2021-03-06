import React, { Component } from 'react';
import { BrowserRouter as Router, Link,Redirect, Route  , withRouter} from "react-router-dom";
import AddCourse from '../pages/AddCourse';
import editCourse from '../pages/editCourse';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { thisExpression } from '@babel/types';
 


class Instructor extends Component {
    constructor(){
        super()
        this.state={
            id: "",
            arr: [] ,
            name: "s"
           

        }
        // this.add = this.editCourse.bind(this)
    }
    componentDidMount(){
         
       
        const  x = localStorage.getItem('tokens') ;
       
   const user =jwt_decode(x)
    
    var id = user.user._id
    console.log("(user.user.userName")

    console.log(user.user.username)
    console.log(this.state.id)
    axios.get(`https://course-exam.herokuapp.com/users/${id}`)
    .then(res=>{
         
   console.log(res.data.courses)  
this.setState({
arr: res.data.courses ,
name:res.data.username
})  
})
}
deleteCourse(e){
 axios.delete(`https://course-exam.herokuapp.com/courses/${e}`).then(res=>{
console.log(res)
 })
}
// editCourse=(id)=>{
//      console.log(id)
     
//     return <Redirect to= `/editcourse${id}` id={id}/>
   
// }
addCourse=()=>{
    return <Redirect to="/addcourse" />

}
 
    render() {
        return (
            <Router>
            <div>
                {/* <nav><ul><li>
            <Link to="/addcourse" >add new course</Link>
            <a onClick={this.addCourse}></a>
          </li>
          </ul>
          
          </nav> */}
          {this.state.name}<br></br>
          <button  type="button" class="btn btn-primary" onClick={()=>{ this.props.history.push('addcourse')}}>Add Course</button>
          <button  type="button" class="btn btn-primary" onClick={()=>{ this.props.history.push('editinfo')}}>Edit profile </button>

                <h1>My courses</h1>
             

            <table className="table table-hover table-striped">
              
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Name</th>
      <th scope="col">Category</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  { 
  this.state.arr.map((element , i)=>
 
  <tr >
 <th scope="row" >{i+1}</th>
  <td>{element.name}</td>
  <td>{element.category}</td>
  <td hidden >{element._id}</td>

  <td ><button type="button" class="btn btn-danger"  onClick={()=>this.deleteCourse(element._id)  }>Delete</button></td>
  {/* <td ><button   onClick={this.editCourse(element._id)}>Edit</button></td> */}
  <td ><button  type="button" class="btn btn-success" onClick={()=>{ this.props.history.push(`/editcourse/${element._id}`)}}>Edit</button></td>
{/* 
  <td ><Link to="/editcourse" >edit new course</Link>
</td> */}

   </tr>
  )}
  {/* {this.props.courses.map((element)=>(
  <tr>
  <th scope="row">1</th>
  {console.log(element.name)}
  <td>{element.name}</td>
    <td>{element.category}</td>
 </tr> */}
      
 

  <tbody>
  
   
  </tbody>
</table>
            </div>
            {/* <Route path="/editcourse" ><editCourse ></editCourse></Route>

            <Route path="/addcourse" component={AddCourse} /> */}
            </Router>
        );
    }
}

export default withRouter(Instructor);