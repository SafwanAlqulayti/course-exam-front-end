import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route ,Redirect} from "react-router-dom";
import Login from "../pages/Login";
import Home from '../pages/Home'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            logedin: false
        }
    }
    componentDidMount(){
        // e.preventDefault()
        
         console.log(localStorage.getItem("tokens"))
        
        if(localStorage.getItem("tokens")){
            console.log("check the local if")
        this.setState({
            logedin: true
        })
    }
    
    if(this.state.logedin){
        console.log("it is true")
    }else{
        console.log("false")
    }
    }
     
    render() {
        return (
             <div>
 {/* <!--========================================
=            Navigation Section            =
=========================================--> */}
           
           <nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
  <div class="container-fluid p-0">
       <a class="navbar-brand" href="index.html">
        <img src="images/logo.png" alt="logo"></img>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item dropdown active dropdown-slide">
      
        <Link to="/" class="nav-link"  >Home  <span>/</span></Link>
            
        </li>
        <li class="nav-item">
         {/* <p>{this.state.logedin}ppppp</p> */}
            {/* {this.state.logedin ?   
        <Link to="/myinfo" class="nav-link" href="speakers.html">MyInfo <span>/</span></Link>  :
         <Redirect to="/" />
            
            } */}
        </li>
        <li class="nav-item dropdown dropdown-slide">
          <a class="nav-link" href="#" data-toggle="dropdown">Pages<span>/</span></a>
             <div class="dropdown-menu">
              <a class="dropdown-item" href="about-us.html">About Us</a>
              <a class="dropdown-item" href="single-speaker.html">Single Instructor</a>
              <a class="dropdown-item" href="pricing.html">Pricing</a>
             
            </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="schedule.html">Schedule<span>/</span></a>
        </li>
        <li class="nav-item">
         <Link to="/admin" class="nav-link" href="sponsors.html" >Admin<span>/</span></Link>
        </li>
        <li class="nav-item dropdown dropdown-slide">
         <Link to="/mycourses" class="nav-link" href="#"  data-toggle="dropdown">My courses
            <span>/</span></Link>
           
      
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
        {/* { this.state.logedin ? 
        :
        <Link to="/"  class="ticket"><span >Log Out </span></Link> 
        onClick={e=>this.checkToken(e)}   */}
      <Link to="/login"  class="ticket"><span >Log IN </span></Link>       
        {/* <img src="images/icon/ticket.png" alt="ticket"></img> */}
       
 
      </div>
  </div>
</nav>

{/* <!--====  End of Navigation Section  ====--> */}
              </div>

 
       
        );
    }
}

export default Header;