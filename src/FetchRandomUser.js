import React from 'react';
import {Link} from 'react-router-dom';
import Viewcomment from './Viewcomment';
import Songdetail from './components/Songdetail'
import SongList from './components/SongList'
export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        {/* <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div> */}
        <img src={this.state.person.picture.large} />
        <p>0 posts      100 followers      200 following</p>
      <div className="column" >
     <SongList/>
       </div>
       <div className="column">
     <Songdetail/>
       </div>   
        
      </div>
    );
  }
}