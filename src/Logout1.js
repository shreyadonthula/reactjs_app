import React, { Component } from 'react'

export default class Logout1 extends Component {

    logout=()=> {
     
        window.location.href = 'http://localhost:3000/Login';
        // localStorage.clear();
    }
    render() {
        return (
           
               <div>
   <a href="#" onClick={this.logout()}>LOGOUT</a>
        </div> 
           
        )
    }
}
