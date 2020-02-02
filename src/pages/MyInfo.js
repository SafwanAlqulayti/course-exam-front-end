import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Instructor from './Instructor';
import Student from './Student';
 
class MyInfo extends Component {
    constructor(){
        super()
        this.state = {
            userID: " " ,
            username: '', 
            userRole : false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('tokens')){
          
        const  x = localStorage.getItem('tokens') ;
        console.log(x)
   const user =jwt_decode(x)
   
   if (user.role === "instructor" ){

    this.setState({
        userRole  :true 
    }) } else {
        this.setState({userRole : false })
    }
   var ID = user.user._id
         this.setState({
             userID: ID
         })
         axios.get(`http://localhost:7000/users/${ID}`)
         .then(res=>{

             console.log(res.data)
          this.setState({
              
           username:  res.data.username
          }) 
         })
        }
        else{
               console.log("the token is expired")
           }
           }
    render() {
     
        return (
            <div>

            { this.state.userRole ?   <Instructor name={this.state.username}></Instructor>:
               <Student name={this.state.username}></Student>}
                <h1>My info </h1>
 
               <h2> {this.state.userID}</h2>
               <h2> {this.state.username}</h2>

            </div>
        );
    }
}

export default MyInfo;