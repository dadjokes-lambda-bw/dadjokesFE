import React, {
  Component
} from "react";
import Joke from "./Joke";
import axios from "axios";
import uuid from "uuid/v4";
import "./JokeList.css";

class JokeList extends Component {
  state = { jokes: [], loading: false };

  static defaultProps = {
    numJokesToGet: 7
  };

  componentDidMount() {
    this.getNewJokes();
  }

  getNewJokes = () => {
    this.setState({ loading: true });
    this.getJokes();
  };

  getJokes = async () => {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes, loading: false });
  };
  handleVote(id, delta) {
    this.setState(
      st => ({
        jokes: st.jokes.map(j =>
          j.id === id ? {
            ...j,
            votes: j.votes + delta
          } : j
        )
      }),
      () =>
      window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }
  handleClick = () => {
    this.setState({
      loading: true
    }, this.getJokes);
  }
  render() {
      if (this.state.loading) {
        return (
          <div className='JokeList-spinner'>
            <i className='far fa-8x fa-laugh fa-spin' />
            <h1 className='JokeList-title'>Dad Jokes Loading...</h1>
          </div>
        );
      }
      let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
      return (
        <div className='JokeList'>
          <div className='JokeList-sidebar'>
            <h1 className='JokeList-title'>
              <span>DAD</span> Jokes
            </h1>
            <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="Laughing Face" />
            <button className='JokeList-getmore' onClick={this.handleClick}>
              Get Dad Jokes
            </button>
          </div>
  
          <div className='JokeList-jokes'>
            {jokes.map(j => (
              <Joke
                key={j.id}
                votes={j.votes}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  export default JokeList;