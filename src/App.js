
import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import JokeList from './jokes/JokeList'
import SearchForm from './components/search/SearchForm'
import './css/App.css';







class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Navbar />
      <Switch>
        <Route exact path = '/' component={JokeList} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/search' component={SearchForm} />
        <SearchForm onSubmit={this.onSearchSubmit} />
      </Switch>  
      </div>
      </HashRouter>
    )
  }
}
     
        
        


export default App;
