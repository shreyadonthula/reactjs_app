import React from 'react';
import axios from 'axios';
import './App.css';
import Searchbar from './Searchbar';
class Api extends React.Component{
  state = {
       data: []
  } 
     onSearchSubmit = (term) => {
     console.log("serch submit executing");
    const APP_ID = 'Client-ID 9ikys_sLDEhW0kGguANAWGAJcJAmGyN72LWtR7Jg2kY'
    axios.get('https://api.unsplash.com/search/photos',{
    params:{query:term},
    headers:{
      Authorization:
      'Client-ID 9ikys_sLDEhW0kGguANAWGAJcJAmGyN72LWtR7Jg2kY'
    }
    }).then((response => this.setState({data: response.data.results})))
    
    //console.log(response.data.results);
    
  }
  render(){
    console.log("render in api executing");
  return (
    <div className="ui container">
      <Searchbar onSubmit={this.onSearchSubmit}/>
      
      {
        
          (this.state.data.length > 0)?
          this.state.data.map((img, index) => {
              return <img key={index} src={img.urls.small} alt={img.alt_description}/>

          })
          :<div>please search</div>

      }
    </div>
  );
  }
}

export default Api;