import React, { Component } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import JokeList from './components/JokeList'
import AddJoke from './components/AddJoke'
import Footer from './components/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Categories />
        <JokeList />
        <Footer />
        <AddJoke />
      </div>
    )
  }
}

export default App
