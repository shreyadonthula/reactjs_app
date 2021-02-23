import React from 'react';
import '../App.css';
import Nav from '../Nav';
import Fetch from '../Fetch';
import Login from '../Login';
import Api from '../Api';
import Viewcomment from '../Viewcomment';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import SongList from  './SongList';
import Songdetail from './Songdetail';
import Registration from '../Registration';
import FetchRandomUser from '../FetchRandomUser';


function App() {
  return (
    <Router>
    <div className="App" >
      <Nav/>
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/FetchRandomUser" component={FetchRandomUser}/>
      <Route path="/Api" component={Api}/>
      <Route path="/Fetch" component={Fetch}/>
      
      <Route path="/Login" component={Login}/>
      <Route path="/Registration" component={Registration}/>
      <Route path="/Viewcomment" component={Viewcomment}/>
      <Route path="/SongList" component={SongList}/>
      <Route path="/Songdetail" component={Songdetail}/>
      <Route path="/Logout" exact component={Logout}/>
       {/* <Redirect from ='/Login' to ='/Api'/>   */}
      </Switch> 
     </div>
      </Router>
  );
}

const Logout=()=> {
   
 
  
  window.location.href = 'http://localhost:3000/Login';
  //<Redirect from ='/App' to ='/Login'/> 
}





const Home=()=>{
  return <div>Home page</div>

  
  
}


// function getTime() {
//   return (new Date()).toLocaleTimeString()
// }

// // Creates a functional component
// const App = () => {
//   return (
//       <div>
//           <div>Current Time:</div>
//           <h3>{getTime()}</h3>
//       </div>
//   );
// }

export default App;
