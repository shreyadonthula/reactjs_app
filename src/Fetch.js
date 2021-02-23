import React from "react";
import {Link} from 'react-router-dom';
import Newvideo from './Newvideo'

export default class Fetch extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

       return (
      <div>
        {this.state.people.map(person => (
          <div key={person.name.first + person.name.last}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} />
            <Link to ='/Viewcomment'  >
              <li>View Comments</li>
              </Link><br></br>
          </div>
          
        ))}
        <Newvideo videoId='naW9U8MiUY0'/>
       
      </div>
      
    );
  }
}