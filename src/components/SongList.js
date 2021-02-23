import React,{Component} from 'react';
import { connect } from 'react-redux';
import {selectstory} from '../actions';
class SongList extends Component{
    renderList(){
        return this.props.stories.map((story)=>{
            return (
                <div className="item" key={story.title}>

                    <div className="right floated content">
                        <button className="ui name primary"
                           onClick={()=>this.props.selectstory(story)}>
                           Storyy
                        </button>

                    </div>
                    <div className="content">{story.title}</div><br/>
                </div>
            );
        })
    }
    render(){
      //  console.log(this.props);
        return(

            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps =(state)=>{
   console.log(state);
    return {stories: state.stories};
}
export default connect(mapStateToProps,{selectstory:selectstory})(SongList);