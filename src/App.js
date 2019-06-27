
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Login from './components/Login';
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute';
import JokeList from './jokes/JokeList'
import './css/App.css';







class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        {/* <SearchForm onSubmit={this.onSearchSubmit} /> */}
        <Route exact path="/" component={JokeList} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
        {/* <Route path='/search' component={SearchForm} /> */}
        <PrivateRoute path="/protected" component={JokeList} />
      </div>
      </Router>
    )
  }
}
     
        
        


export default App;
     
    
