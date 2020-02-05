import React, { Component } from 'react';
  import { BrowserRouter as Router, Link, Route ,Redirect} from "react-router-dom";
 

class HeaderNotloged extends Component {
    render() {
        return (
            <div>
            <div> 

<nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
<div class="container-fluid p-0">
<a class="ticket" href="index.html"> 
        {/* <img src="images/logo.png" alt="logo"></img> */}
       <span> EASY LEARN</span>

      </a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="fa fa-bars"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav mx-auto">
<li class="nav-item dropdown active dropdown-slide">

<Link to="/" class="nav-link"  >Home  <span>/</span></Link>

</li>
 
<li class="nav-item dropdown dropdown-slide">
<a class="nav-link" href="#" data-toggle="dropdown">Pages<span>/</span></a>
<div class="dropdown-menu">
<a class="dropdown-item"  >About Us</a>
<a class="dropdown-item"  >Single Instructor</a>
<a class="dropdown-item"  >Pricing</a>

</div>
</li>
<li class="nav-item">
<a class="nav-link" >Contact</a>
</li>
</ul>
 
<Link to="/login"  class="ticket"><span >Log IN </span></Link>       
 

</div>
</div>
</nav>

 </div>
</div>
        );
    }
}

export default HeaderNotloged;