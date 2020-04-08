import React, { Component } from 'react';
import axios from 'axios';

class AllCourses extends Component {
    constructor(){
        super()
        this.state ={
            arr: []
        }
    }
    componentDidMount(){
    axios.get("https://course-exam.herokuapp.com/courses")
    .then(res=>{
        
      this.setState({arr:res.data})
    })}
    render() {
      
        
        return (
            <div>
            {this.state.arr.map((elemnt)=>(
    <h1>{elemnt.name}</h1>
            ))}
            </div>
        );
    }
}

export default AllCourses;