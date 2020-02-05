This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Course site
The web app idea is to provide a platform to the user to learn new things or add their own materials.
### Use npm install to run the code after cloning

 
### Technologies Used

React framework ,Bootstrab ,mongo db ,Axios
### Wireframe 
![New Wireframe 3](https://user-images.githubusercontent.com/57276846/73876696-7b42de80-4868-11ea-9f79-d36b5884b27b.png)

### User 

There is two role to the user Instructor and student ,Inctructors can add new courses and see all his courses after log in and delete or update his courses .The student can see all avilable courses from difrent instructors and join any course after log in ,Also the user can take a simple quiz to test his knowledge. 

### Back end

In the back end I have used Express with mongoose to store the data and buid the app functhinalty to make the user do all CRUD functions .For securty I have used bcrypt to hash the user password and store the hashed password in the database and use it to check the user log in password and compare to the stored password after hashing.
