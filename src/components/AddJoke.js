import React, { Component } from "react";
import { connect } from "react-redux";
import { addjoke } from '../actions/addJokeAction';



class AddJoke extends Component {

    state = {
          joke: ""
    }

    handleChange = e => {
        this.setState({ 
                [e.target.name]: e.target.value
    
            })
    }

    addjoke = e => {
        e.preventDefault();
        console.log("this is our state", this.state.joke);
        this.props.addjoke(this.state)
        .then(() => {
            this.props.history.push('/');
          });
    };

    render(){
        console.log("looking for props", this.props);
        return (
            
    <form onSubmit={this.addjoke} className="sign-up">
        <h1 className="sign-up-title">Add A Joke</h1>
        <input name="joke" value={this.state.joke} onChange={this.handleChange} type="text" className="sign-up-input" placeholder="What's your joke?" />
        {/* <input type="submit" value="Add Joke!" className="sign-up-button"/> */}
        <button className="sign-up-input" >Add Joke</button>
  </form>
        )
    }

}
const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, { addjoke })(AddJoke)
