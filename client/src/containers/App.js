import React, { Component } from 'react'
import './App.css'

import middleC from '../assets/sounds/middleC.wav'

class App extends Component {
  state = {
    currentNote: 'middleC' // need to use this to dynamically play a note
  };

  handleClick = () => {
    const audio = new Audio(middleC);
    audio.play();
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  }
}
export default App