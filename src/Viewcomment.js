import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

const Viewcomment=()=>{
    return(
         <div >
           <br></br>
           <Link to ='/FetchRandomUser'>
              madhu
              </Link>
            <div className="metadata">
                 <span className="date">Today at 6:00PM</span>
            </div>
             <div className="text" >Nice post!</div>

          <br></br>
          <Link to ='/FetchRandomUser'>
             Sam
              </Link>
            <div className="metadata">
                 <span className="date">Today at 8:07AM</span>
            </div>
             <div className="text" >Fab</div>

          
        </div>


    );
}
export default Viewcomment;