import React , { useState }from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";
import { BrowserRouter as Redirect } from "react-router-dom";


function Admin(props) {
  const [logedOut ,setLogedOut] = useState(false)
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    // localStorage.removeItem("token")
    window.localStorage.clear();
    setLogedOut(true)
   
  }
  if(logedOut){
   return  <Redirect to="/login"></Redirect>
  }

  return (
    <div id="Admin">
      
      <Button onClick={logOut}>Log out</Button>
      
    </div>
  );
}

export default Admin;