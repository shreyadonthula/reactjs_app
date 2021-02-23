import React, { Component } from "react";
import axios from "axios";
 import {Link} from 'react-router-dom'
export default class Registration extends Component {
  constructor() {
    super();
 
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
     
    };
 
   }
 
 Change=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  Submit=(event) =>{
    const { email, password, password_confirmation } = this.state;
 
    axios.post("http://localhost:3000/users",
        {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        
      )
      alert('Registered Successfully..');
     
    event.preventDefault();
  }
 
  render() {
    return (
      <div><br/>
       <div><b><br/>Instagram Registration</b> I <br/><br/><br/><br/></div>
        <form onSubmit={this.Submit}>
         
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.Change}
            required
          /><br/><br/>
 
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.Change}
            required
          /><br/><br/>
 
          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.Change}
            required
          /><br/><br/><br/>
 
          <button type="submit">Register</button>
        </form>
          <br/><br/>
          <Link to="/Login">
          <button >Log In</button>
         </Link>
      </div>
    );
  }
}