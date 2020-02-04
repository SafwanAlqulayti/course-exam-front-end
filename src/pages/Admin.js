import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    // localStorage.removeItem("token")
    window.localStorage.clear();
  }

  return (
    <div id="Admin">
      <div>Log out Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;