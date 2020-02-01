import React ,{ useState, useEffect }from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import AddCourse from './pages/AddCourse';
import TheQuiz from './pages/TheQuiz';


function App() {
  useEffect( ()=>{
    let token = localStorage.getItem("tokens");
    console.log(token);
  })
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

 
  return (
    //check the user token
    <AuthContext.Provider value = {{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/login">log in</Link>
          </li><li>
            <Link to="/addcourse">add new course</Link>
          </li>
        </ul>
       <TheQuiz />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/addcourse" component={AddCourse} />

          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;