import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Instructor from './Instructor';
import Student from './Student';
import {   Redirect } from "react-router-dom";

class MyInfo extends Component {
    constructor(){
        super()
        this.state = {
            userID: " " ,
            username: '', 
            userRole : "" ,
            courses: [] ,
            check: true
        }
    }
    
    UNSAFE_componentWillMount() {
        if(localStorage.getItem('tokens')){
          
        const  x = localStorage.getItem('tokens') ;
        console.log(x)
   const user =jwt_decode(x)
   console.log(user.user.role)
   this.setState({
    userRole : user.user.role
   })
   
   if (user.user.role === "instructor" ){
       console.log("in if")
     this.setState({
        check  : true
    }) } else {
        console.log("in else")
        this.setState({check : false })
    }

console.log("sssssssss")
console.log(user.user.role)

  this.setState({
    ID: user.user._id ,
    username: user.user.username ,
    courses:  user.user.courses

  }) 
} 
// if(this.state.check === "instructor"){
//     return <Redirect to="/instructor" />
// }

    }
//    var name = user.user.username
//    var courses
//          this.setState({
//              userID: ID
//          })
//          axios.get(`http://localhost:7000/users/${ID}`)
//          .then(res=>{

//              console.log(res.data)
//           this.setState({
              
//            username:  res.data.username ,
//            coursers: res.data.courses
//           }) 
//          })
//         }
//         else{
//                console.log("the token is expired")
//            }
//            }
    render() {
        // this.check()
        console.log(this.state.check);
        return (
         
            <div id="Myinfo">
   
         
     {  this.state.check  ?   <Instructor></Instructor> :
               <Student></Student>
        }
              
              {/* name={this.state.username} courses={this.state.courses} */}
               
               {/* <h2> {this.state.username}</h2> */}
    
            </div>
        );
    }
}

export default MyInfo;