import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import Typing from 'react-typing-animation';
import './JokeList.css';
import SearchForm from '../components/search/SearchForm'

class JokeList extends Component {
  
  state = { jokes: [], loading: false };

  static defaultProps = {
    numJokesToGet: 10
  };

  componentDidMount() {
    this.getNewJokes();
  }

  getNewJokes = () => {
    this.setState({ loading: true });
    this.getJokes();
  };

  getJokes = async () => {
    let jokesA = [];
    while (jokesA.length < this.props.numJokesToGet) {
      let res = await axios.get(
        'https://backend-dadJokes.herokuapp.com/api/publicJokes'
      );
      console.log('This is the log', res.data);

      jokesA.push(res.data);
    }

    let jokes = jokesA[0].map(j => {
      return j;
    });

    this.setState({ jokes, loading: false });
    console.log('this is state', this.state.jokes);
  };
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id
            ? {
                ...j,
                votes: j.votes + delta
              }
            : j
        )
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }
  handleClick = () => {
    this.setState(
      {
        loading: true
      },
      this.getJokes
    );
  };

searchJoke = (list) => {
  this.setState({
    ...this.state, jokes: list
  })
}

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-7x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Dad Jokes Loading...</h1>
        </div>
      );
    }

    return (
      <div classname='container'>
          <SearchForm className='search-bar' searchJoke = {this.searchJoke} />
      <div className="JokeList">
        <div className="top-word">
        </div>
      
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <Typing>
            <span>DAD</span> Jokes
            </Typing>
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Laughing Face"
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            Get Dad Jokes
          </button>
        </div>

        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.joke}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}
export default JokeList;

