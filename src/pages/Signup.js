import React ,{ useState } from "react";
import { Link, Redirect } from "react-router-dom";
 import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Button , Select,Option,Error } from '../components/AuthForms';
import axios from 'axios';
import { useAuth } from "../context/auth";
import { Label , Input } from 'reactstrap';
 
function Signup () {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
 
    const [role, setRole] = useState("instructor");

    const { setAuthTokens } = useAuth();

     function  postSingUp   (){
         axios.post('http://localhost:7000/users',{
        username: userName,
        email: email ,
        password: password ,
        role: role
       
        
     }).then(result => {
        if (result.status === 200) {  
          result.preventDefault()
          setAuthTokens(result.data);
          console.log(result.data)
          setLoggedIn(true);
          this.props.history.push('/')

         } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });

    }
   
  
    
  
  return (
    <Card id="SignUpCard">
      <Logo src={logoImg} />
      <Form>
        <Input 
        required type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
            console.log(userName)
          }}
          placeholder="userName"/>
          <Input  
        type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="email" />
        <Input  
        type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password" />
         <Label for="exampleSelect">Select</Label>
    <Input type="select" name="select" id="exampleSelect" onChange={e=>setRole(e.target.value)}  >

     <option>instructor</option>
     <option>user</option>

    </Input>
         
        <Button onClick={postSingUp}>Sign Up</Button>
      </Form>
      {/* { isError &&<Error>Sign up did not complete</Error> } */}

      <Link to="/login">Already have an account?</Link>
    </Card>
  );      

        }

export default Signup ;

