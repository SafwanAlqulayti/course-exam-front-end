import React, { Component } from 'react';
import axios from 'axios';
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";


class editCourse extends Component {
    constructor(){
        super()
        this.state = {
            name : '',
            category: ''
        }
    }
    editCourse(){
        axios.put(`http://localhost:7000/courses/${this.props.match.params.id}`,
        {name: this.state.name ,category: this.state.category })
    
    .then(res=>{
    console.log(res)
    console.log(this.state.name )
    })
    }
    // editName(e){
    //     this.setState({
    //         name: e.target.value
            
    //     })
    //     console.log(this.state.name)
    // }
    // editCategory(){
    //     this.setState({
    //         category: this.state.category
    //     })
    // }
    handleChangeName=e=>{
     
        this.setState({
            name: e.target.value
        })
        console.log(this.state.name)
    }
    handleChangeCategory=e=>{
     
        this.setState({
            category: e.target.value
        })
        console.log(this.state.name)
    }
    render() {
       
const name = ""
        console.log(this.props.match.params.id)
        return (
            <div>
                   <Card id="AddCourse">
      <Form>
        <Input
         type="courseName"
          onChange={this.handleChangeName}
          placeholder="Course Name"
        />
        <Input
          type="courseCategory"
        //   value={category}
          onChange={this.handleChangeCategory}
            
          
         />
        <Button onClick={this.editCourse()}>Add course</Button>
      </Form>
      {console.log(this.props.id)}
        <p>{this.props.id}</p>
 
    </Card>
            </div>
        );
    }
}

export default editCourse;