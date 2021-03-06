
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import JokeList from './jokes/JokeList'
import './css/App.css';
import AddJoke from './components/AddJoke';
import SearchForm from '../src/components/search/SearchForm'







class App extends Component {
  render() {
    return (
      
        
      <div className="App">
        <Navbar />
        {/* <Route path="searchjokes" onSubmit={this.onSearchSubmit} /> */}
        <Route exact path="/" component={JokeList} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Registration} />
        <PrivateRoute path="/protected" component={JokeList} />
        <Switch>
        <PrivateRoute path="/addjokes" component={AddJoke} /> 
        </Switch>
      </div>
      
   
    )
  }
}
     
        
        


export default App;
     
    
