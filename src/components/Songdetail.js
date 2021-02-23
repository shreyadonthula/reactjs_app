import React from 'react';
import {connect} from 'react-redux';

const Songdetail =({story})=>{
    if(!story){
    return <div> Select a Story </div>;
}
else
    return (<div>{ story.title},{story.time}</div>);
};
const mapStateToProps =state=>{
  return  {story :state.selectedstory}
}
export default connect(mapStateToProps)(Songdetail);