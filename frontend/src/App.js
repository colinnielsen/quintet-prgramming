import React, { Component } from 'react'
import Header from './components/Header'

import JokeList from './components/JokeList'
import AddJoke from './components/AddJoke'
import Footer from './components/Footer'

import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:[],
      JokeCategory:"",
      ShowJokes:false,
      votes: 0
    }
  }

  componentDidMount() {
    fetch('http://jokes-for-days.herokuapp.com/jokes')
    .then(response => response.json())
    .then(response => this.displayJokes(response))
  }

  displayJokes = (category) => {
    console.log(category)
    this.setState({
      showJokes: true,
      jokeCategory: category
    })
  }



  render() {
    return (
      <div className="App">
        <Header displayJokes={this.displayJokes}/>

        <JokeList votes={this.state.votes} jokeCategory={this.state.jokeCategory} />
        <AddJoke />

        <Footer />
      </div>
    )
  }
}

export default App
