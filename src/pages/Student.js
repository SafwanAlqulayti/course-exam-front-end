import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div>
                
                <h1>Student</h1>
                <p>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.

While it may not be obvious to everyone, there a
re a number of reasons creating random paragraphs can be useful. A few examples of
 how some people use this generator are listed in the following paragraphs.</p>
               <h2> {this.props.name}</h2>
               <p>{this.props.courses}</p>

            </div>
        );
    }
}

export default Student;