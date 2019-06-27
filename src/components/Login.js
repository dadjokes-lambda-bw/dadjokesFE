import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { login } from '../actions/actions';




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
            this.props.history.push('/protected');
          });
    };

    render(){
        return (
            <ul className="right">
            <li><NavLink to='/'></NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>Add A Joke</NavLink></li>
            {/* <li className="btn btn-floating pink lighten-3">DJ</li> */}
        </ul>
        )
    }

}
const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})
export default connect(mapStateToProps, { login })(Login)