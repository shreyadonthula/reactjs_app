import React,{Component} from 'react';
import axios from "axios";

import {Link,Redirect} from 'react-router-dom';


 class Login extends React.Component{

   constructor(props){
     super(props);
     
     this.state = {
      email: "",
      password: "",
      len: ""
    
    };

  }

   Change=(e)=>{
     this.setState({
       [e.target.name]:e.target.value
     })
   }
  
   Submit=(event)=> {
    event.preventDefault();
   
    const { email, password } = this.state;
    
    axios.get('http://localhost:3000/users', {
      params: {
        email: this.state.email,
        password: this.state.password
      }   
    },
    { withCredentials: true }
    )
    .then (response => this.setState({len: response.data.length}))
  
    event.preventDefault();
    
    }
    render(){
     console.log(this.state.len);
        return(

            <div>
              <center>
              <br/>
                <b>Instagram Login</b>
                <br/>&nbsp;
                <br/>
                <form onSubmit={this.Submit}>
                <input
                   type="email"
                   name="email"
                   placeholder="Email"
                   value={this.state.email}
                   onChange={this.Change}
                   required
                />
              <br/>&nbsp;<br/>
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.Change}
                  required
              />
               <br/><br/>
              <button  type="submit">login</button>
              {/* {
                   (this.state.len == 1) &&
                   <Redirect from ='/Login' to ='/Fetch'/> 
                   
              } */}

<Redirect from ='/Login' to ='/Fetch'/> 


              <div>Don't have an Account? 
              <Link   to ='/Registration'>
             Sign up.
              </Link>
                
                
                </div>

                
                </form>
                </center>
            </div>
        );


    }
}  
export default Login;