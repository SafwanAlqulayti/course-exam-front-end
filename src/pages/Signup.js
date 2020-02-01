import React ,{ useState } from "react";
import { Link, Redirect } from "react-router-dom";
 import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button , Select,Option,Error } from '../components/AuthForms';
import axios from 'axios';
import { useAuth } from "../context/auth";


function Signup () {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [role, setRole] = useState();

    const { setAuthTokens } = useAuth();

     function  postSingUp   (){
         axios.post('http://localhost:7000/users',{
        username: userName,
        email: email ,
        password: password
        
     }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          console.log(result.data)

          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }
  
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
  
    
  
  return (
    <Card>
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
          <Select value={Option} >
        <Option   type="role"
          value="ss"
         
            />
 
  
        </Select>
          
         
        <Button onClick={postSingUp}>Sign Up</Button>
      </Form>
      { isError &&<Error>Sign up did not complete</Error> }

      <Link to="/login">Already have an account?</Link>
    </Card>
  );
        }

export default Signup ;