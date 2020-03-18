import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Instructor from './Instructor';
import Student from './Student';
import {   Redirect } from "react-router-dom";
import Footer from "../components/Footer"
class MyInfo extends Component {
    constructor(){
        super()
        this.state = {
            userID: " " ,
            username: '', 
            userRole : "" ,
            courses: [] ,
        
                Loged:"",
            secondState: ""

        }
    }
    
    UNSAFE_componentWillMount() {
  
          console.log("Test my info")
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
        Loged  : <Instructor></Instructor>
    }) } else {
        console.log("in else")
        this.setState({Loged : <Student></Student> })
    }


} 

    render() {
     
   
    
        
        return (
         
         
            <div class="modify">
  
        {this.state.Loged}
              
     
            </div>
        );
    }
}

export default MyInfo;