import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  }
    
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://backend-dadjokes.herokuapp.com/api/auth/register', this.state)
      .then(res => console.log(res.data.password))
      .catch(err => console.log(err))
      
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="username">UserName</label>
            <input type="username" id='username' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
