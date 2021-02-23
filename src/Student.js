import React,{Component} from 'react'
import Marks from './Marks';

 class Student extends Component{
    constructor(){
        super();
        this.state={
            rno: 101,
            name: "shreya"
         }
        console.log("constructor in student");
    }
    onhandle=()=>{
        this.setState({rno: this.state.rno +2});
        console.log("handlemethod in student" );
    }
    render(){
        return(
            <div>
                    <p>rno is {this.state.rno} in student class</p>
                   < button onClick={this.onhandle}>click</button>
                     <Marks rno={this.state.rno}/>
                    render method in student class
            </div>

        );
    }
}
export default Student;