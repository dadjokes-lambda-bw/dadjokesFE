import React, { Component } from 'react'
import axios from 'axios'
import { Redirect} from 'react-router'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://backend-dadjokes.herokuapp.com/api/auth/login', this.state)
      .then(res => console.log(res.data.token))
      .then(res => this.setState({isLoggedIn: true}))
      .catch(err => console.log(err))

      

    
  }
  render() {
    console.log(this.state)
    if(this.state.isLoggedIn) {
      return(
        <Redirect to="/" />
      )
    }
    else return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-5">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">username</label>
            <input type="username" id='username' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn