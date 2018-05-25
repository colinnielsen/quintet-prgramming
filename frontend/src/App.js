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
      ShowJokes:false
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <JokeList />
        <Footer />
        <AddJoke />
      </div>
    )
  }
}

export default App
