import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddCourse from '../pages/AddCourse';


class Instructor extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav><ul><li>
            <Link to="/addcourse">add new course</Link>
          </li></ul></nav>
                <h1>Instructor</h1>
                <Route path="/addcourse" component={AddCourse} />

            </div>
            </Router>
        );
    }
}

export default Instructor;