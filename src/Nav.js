import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Nav() {
    const navStyle={
        color:'white'
    }

  return (
      <nav>
          <h3>Instagram</h3>
          <ul className="nav-links">
              
              {/* <Link style={navStyle} to ='/profile'>
              <li>Profile</li>
              </Link> */}
              <Link   style={navStyle} to ='/api'>
              Search
              </Link><br/>
              {/* <Link  style={navStyle} to ='/Fetch'>
              <li>Fetch</li>
              </Link> */}
              <Link  style={navStyle} to ='/Registration'>
              Sign up
              </Link> <br/>
              <Link  style={navStyle} to ='/Logout'>
              Sign out
              </Link> 
               {/* <Link  style={navStyle} to ='/Registration'>
              <li>Story</li>
              </Link>  */}
              {/*
              <Link  style={navStyle} to ='/Songdetail'>
              <li>Storydetail</li>
              </Link> */}
             
              </ul>
   
    </nav>
  );
}

export default Nav;
