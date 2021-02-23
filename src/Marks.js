import React,{Component} from 'react';
export default class Marks extends Component{
    constructor(props){
        super(props);
        this.state={
         mroll: this.props.rno 
        }
        console.log("constructor in marks" );
    }
    static getDerivedStateFromProps(props,state){
        console.log("get dervied state from props");
        console.log(props,state);
         if(props.rno !== state.mroll)
        return {mroll: props.rno}
        else
        return null;
    }
     render(){
         console.log("marks renderes");
        return(
            <div>
               marks rendered
                    <p>rno is {this.props.mroll} in marks class</p>
                   
            </div>

        );
    }
}
