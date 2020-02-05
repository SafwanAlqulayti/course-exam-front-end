import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


class OneInstructor extends Component {
    constructor(){
        super()
        this.state = {
            name: "" ,
          coursesArr: [],
          studentCourses: []
        }
        this.joinCourse = this.joinCourse.bind()
    }
    componentWillMount(){
        axios.get(`http://localhost:7000/users/${this.props.match.params.id}`)
        .then((res)=>{
            console.log(res)
            this.setState({
                name: res.data.username ,
                coursesArr: res.data.courses
            })
            console.log(res)
        })
       
  
    }
    joinCourse(courseId){
        console.log(courseId)
        const  x = localStorage.getItem('tokens') ;
       
   const user =jwt_decode(x)
 
   var arr = user.user.courses.concat(courseId)
  
   var id = user.user._id
   console.log(id)
   
    axios.put(`http://localhost:7000/users/${id}/${courseId}`,{
        courses: "k"})
   .then((res)=>{
       console.log('saved',res )
   })
   
   
     }
    render() {
        return (
            
 	<div class="container news section " id="courses" >
        
		<div class="row mt-30"></div>
                  {this.state.coursesArr.map((elemnt , key)=> 
                <div class="col-lg-4 col-md-6 col-sm-8 col-10 m-auto">
              
                
			 	 <div class="blog-post">
              

					<div class="post-thumb">
						<a href="news-single.html">
							<img src="../images/code.jpg" alt="post-image" class="img-fluid"></img>
						</a>
					</div>
 					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
                        
						<div class="post-title">
							<h2><a href="news-single.html"> {elemnt.name} </a></h2>
                            <button type="button" class="btn btn-info"onClick={()=>this.joinCourse(elemnt._id)}>Join Now</button>
						</div>
                       
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<a href="#">Admin</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<a href="#">350</a>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<a href="#">30</a>
								</li>
							</ul>
						</div>
					</div>
                   
				</div>
 			</div>
                )}
           
			</div>
                 
     
        );
    }
}

export default OneInstructor;