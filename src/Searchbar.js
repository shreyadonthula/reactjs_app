import React from 'react';

class Searchbar extends React.Component{
state={term:''};
    

    onSubmit = (e) => {
        console.log("onsubmit executing");
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    } 
   render( ){
    console.log("render in searchbar executing");
       console.log(this.props);
       
      return(
          
          <div className="ui segment">
             <form onSubmit={this.onSubmit} className="ui form">
                 <div className="field">
                   <label>image Search</label>
                    <input type="text"
                     value={this.state.term}
                      onChange={(e)=>this.setState({term: e.target.value})}/>
                   </div>
               </form>
            </div>


        );
    }
}
export default Searchbar;