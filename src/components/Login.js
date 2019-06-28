import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actions';
import './Login.css'




class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
                }
            })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
            console.log('Look at me')
            return this.props.history.push('/protected');
          });
    };

    render(){
        return (
            <form className="sign-up" onSubmit={this.login}>
        <h1 className="sign-up-title">Please Sign In</h1>
        <input type="text" className="sign-up-input" placeholder="What's your username?" />
        <input type="password" className="sign-up-input" placeholder="Choose a password"/>
        <input type="submit" value="Sign In" className="sign-up-button"/>
  </form>
        )
    }

}
const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})
export default connect(mapStateToProps, { login })(Login)
