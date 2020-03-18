import React , { useState }from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";
import { BrowserRouter as Redirect , withRouter} from "react-router-dom";


function Admin( ) {
  const [logedOut ,setLogedOut] = useState(false)
  const { setAuthTokens } = useAuth();

  function logOut( ) {
    // setAuthTokens(); // comment new was test
    // localStorage.removeItem("token")
    localStorage.clear("token");
    // this.props.history.push("/")
   
   
  }
  // setLogedOut(true)
  // if(logedOut){
  //  return  <Redirect to="/login"></Redirect>
  // }

  return (
    
    <div id="Admin">
      
      <Button onClick={logOut}>Log out</Button>
      
    </div>
  );
}

export default  Admin;