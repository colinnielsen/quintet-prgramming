import React from 'react'

class JokeList extends React.Component {

  render (props) {
    // const jokes = this.props.jokes.map(joke => {
    //   return <li key={joke}>{joke}</li>
    // })
    return(
      <section>
        <ul className="joke-list">
          <li>Test Joke</li>
        </ul>
      </section>
    )
  }
}

export default JokeList