import React, { Component } from 'react';
 import { Card, Logo, Form, Button , Input } from '../components/AuthForms';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import FileBase from 'react-file-base64';

const API_URL = "http://localhost:7000";



class EditInfo extends Component {
    
    constructor(){
        super()
        this.state = {
            username1: "l",
            baseImage: "DefaultImg"
        }
    }
    // componentDidMount(){
    //     const  x = localStorage.getItem('tokens') ;
    //     const user =jwt_decode(x)
    //     const id = user.user._id
    //     this.setState({
    //         id: user.user._id ,
    //         username: user.user.username
    //     })
    // }
    handleChangeName=e=>{
        this.setState({
            username1:    e.target.value
        })
        console.log(this.state.username1)
    }
          updatInfo = ()=>{
            const  x = localStorage.getItem('tokens') ;
            const user =jwt_decode(x)
            const id = user.user._id
            const name = this.state.username1
       axios.put(`http://localhost:7000/users/${id}`,{
           username:  this.state.username1,
        img: this.state.baseImage} ).then((res)=>{
        console.log(res)       
        })
  
          }
      

          getBaseFile(files) {
            // create a local readable base64 instance of an image
            this.setState({
              baseImage: files.base64.toString()
            });
        
            // let imageObj = {
            //    img: files.base64.toString()
            // };
         
          }
        
    render() {
        return (
            <div class="modify">
                <h1>My info</h1>
                <Card id="SignUpCard">
     
      <Form>
      <span>current user name :          {this.state.username}</span>


      <Input
         type="courseName"
          onChange={this.handleChangeName}
          placeholder="User Name"
        />
         <div className="process__upload-btn">
              <FileBase type="file" multiple={false} onDone={this.getBaseFile.bind(this)} />
            </div>
         
        <Button onClick={this.updatInfo}>Update profile</Button>
      </Form>
      </Card>
            </div>
        );
    }
}

export default EditInfo;