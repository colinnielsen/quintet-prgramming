import React from 'react'
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentJokes: [],
      activeItem: '',
      votes: 0
    }
  }
   upvote = (vote) => {
      this.setState({
        votes: +1
      }) 
    }

   downvote = (vote) =>{
       this.setState({ votes: -1 });
    }
   
  renderJokes = () => {
    console.log(this.state.currentJokes);
    return this.state.currentJokes.map(joke =>{
      return <li key={joke.id}>
             <h5>{joke.joke}</h5>
             <p>Votes: {this.state.votes}</p> 
             <button onClick={this.upvote}>+</button>
             <button onClick={this.downvote}>-</button>
             </li>;
    })
  }

  fetchJokes = (id) => {
    console.log("hello");
    
    fetch ("http://jokes-for-days.herokuapp.com/jokes/"+id)
    .then (response=> response.json())
    .then (data => this.setState({
      currentJokes: data.jokes
    }))
  }
  
  render() {
    const { activeItem } = this.state


    return <div>
        <header className="App-header" style={{ backgroundImage: `url(${"./stripes.png"})` }}>
          <img src="../stupidlaughingemoji.png" style={{ height: "120px", width: "auto" }} />
          <img src="../stupidlaughingemoji.png" style={{ height: "120px", width: "auto" }} />
          <img src="../JokeOff2.png" style={{ height: "190px", width: "auto" }} />
          <img src="../stupidlaughingemoji.png" style={{ height: "120px", width: "auto" }} />
          <img src="../stupidlaughingemoji.png" style={{ height: "120px", width: "auto" }} />
        </header>
        <Menu>
          <Menu.Item name="Clean" active={activeItem === "Clean"} content="Clean" onClick={e => this.fetchJokes(1)} style={{ width: "200px", textAlign: "center" }} />

          <Menu.Item name="Dirty" active={activeItem === "Dirty"} content="Dirty" onClick={e => this.fetchJokes(2)} style={{ width: "200px", textAlign: "center" }} />

          <Menu.Item name="Dad" active={activeItem === "Dad"} content="Dad" onClick={e => this.fetchJokes(3)} style={{ width: "200px", textAlign: "center" }} />
        </Menu>
        <div className="jokeBucket">
          <ul>{this.renderJokes()}</ul>
        </div>
      </div>;
  }
}

export default Header
