import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { registration } from '../actions/actions';





class Registration extends React.Component {

    state = {
        credentials: {
            username: '',
            password: '',
           
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

    registration = e => {
        e.preventDefault();
        this.props.registration(this.state.credentials)
        .then(() => {
            this.props.history.push('/protected');
          });
    };

    render(){
        return (
    <form className="sign-up">
        <h1 className="sign-up-title">Sign up in seconds</h1>
        <input type="text" className="sign-up-input" placeholder="What's your username?" />
        <input type="password" className="sign-up-input" placeholder="Choose a password"/>
        <input type="submit" value="Sign me up!" className="sign-up-button"/>
  </form>
        )
    }

}
const mapStateToProps = state => ({
    isRegistering: state.isRegistering
})
export default connect(mapStateToProps, { registration })(Registration)
