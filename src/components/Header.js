import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route ,Redirect} from "react-router-dom";
import HeaderLoged from "../components/HeaderLoged";
import HeaderNotloged from "../components/HeaderNotloged";

 

class Header extends Component {
    constructor(){
        super()
        this.state = {
            logedin: ""
        }
    }
     componentWillMount(){
        // e.preventDefault()
        
        //  console.log(localStorage.getItem("tokens"))
        
        if(localStorage.getItem("tokens")){
            console.log("check the localll if")
        this.setState({
            logedin:  <HeaderLoged></HeaderLoged>
        })
    }else{
        console.log("ther is no token")
        this.setState({
            logedin:  <HeaderNotloged></HeaderNotloged>
        })
    }
    
    // if(this.state.logedin){
    //     console.log("it is true")
    // }else{
    //     console.log("false")
    // }
    }
     
    render() {
        return (
 
            <div>
               {this.state.logedin}
            </div>
 
       
        );
    }
}

export default Header;