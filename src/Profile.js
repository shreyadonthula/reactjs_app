import React from 'react';
import faker from 'faker';
import './App.css';
import Songdetail from './components/Songdetail'
import SongList from './components/SongList'


const Profile=()=> {
  return (
    <div className="comment">
    <div   className="column"   style={{float: 'left'}}>
  
     <img alt="avatar" src={faker.image.avatar()}/>
     
      <p>0 posts      100 followers      200 following</p>
      <div className="column" >
     <SongList/>
       </div>
       <div className="column">
     <Songdetail/>
       </div>   
    </div>
    kk
    </div>
  );
}

export default Profile;
