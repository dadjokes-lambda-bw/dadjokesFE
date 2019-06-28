import React, {Component} from 'react';
import axios from 'axios'
import '../../jokes/JokeList.css'




class SearchForm extends Component {
  state = {jokes: '', searchText: ''}

  onSearchSubmit = (event) => {
    event.preventDefault();
    axios.get('https://backend-dadJokes.herokuapp.com/api/publicJokes')
  .then (response => {
    this.setState({jokes:  response.data.filter(joke => {
      console.log(joke)
      
      return joke.joke.toLowerCase().includes(this.state.searchText.toLowerCase())
    })})
     
 this.props.searchJoke(this.state.jokes)
    
  })
}


  render() {
    return (
      <div className="ui segment" >
        <form onSubmit={this.onSearchSubmit} className="ui form">
          <div className="field">
            <h1><label htmlFor="search">Search Jokes</label></h1>
          </div>
          <input type="text" value={this.state.searchText} onChange={(e) => this.setState({searchText: e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default SearchForm




