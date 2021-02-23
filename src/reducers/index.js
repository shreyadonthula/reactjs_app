import  react,{Component } from 'react'
import {combineReducers} from 'redux';
const songReducer=()=>{
    return [
        {title: '_lifey', time: '4:05pm'},
        {title: 'chor',time: '3:05am'},
        {title: 'Babunubtechah', time: '8:05pm'},
        {title: 'Sam_chai', time: '1:05am'}
    ];
};

const selectedsongreducer=(selectedstory=null,action)=>{
    if(action.type==='STORY_SELECTED')
    {
        return action.payload;
    }
    return selectedstory;
};

export default combineReducers({
    stories : songReducer,
    selectedstory : selectedsongreducer

});


