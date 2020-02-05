// import React, { Component } from 'react';
//  import { Card, Logo, Form, Button , Input } from '../components/AuthForms';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';



// class EditInfo extends Component {
//     constructor(){
//         super()
//         this.state = {
//             username: "",
//             id: ''
//         }
//     }
//     componentDidMount(){
//         const  x = localStorage.getItem('tokens') ;
//         const user =jwt_decode(x)
//         const id = user.user._id
//         this.setState({
//             id: id ,
//             username: user.user.username
//         })
//     }
//           updatInfo(){
//        axios.put(`http://localhost:7000/users/${this.state.id}`,{
//            username: this.state.username} ).then((res)=>{
//         console.log(res)       
//         })
  
//           }
//           handleChangeName=e=>{
//               this.setState({
//                   username:    e.target.value
//               })
//           }

  
//     render() {
//         return (
//             <div class="modify">
//                 <h1>My info</h1>
//                 <Card id="SignUpCard">
     
//       <Form>
//           <span>{this.state.username}</span>
//       <Input
//          type="courseName"
//           onChange={this.handleChangeName}
//           placeholder="User Name"
//         />
         
//         <Button onClick={this.updatInfo}>Sign Up</Button>
//       </Form>
//       </Card>
//             </div>
//         );
//     }
// }

// export default EditInfo;