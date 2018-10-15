import React, { Component } from 'react'
import './App.css'
import GuessButton from './GuessButton';
import NoteGenerator from './NoteGenerator';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNote: 0 // need to use this to dynamically play a note
    };

  }

  setCurrNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber }, () => {
      console.log("currNote: " + this.state.currentNote);
    });
  }

  render () {
    return (
      <div>
        <NoteGenerator setCurrNote={this.setCurrNote} />
        <GuessButton guessNote="C" getCurrNote={this.state.currentNote} noteValue={0} />
        <GuessButton guessNote="C#" getCurrNote={this.state.currentNote} noteValue={1}/>
        <GuessButton guessNote="D" getCurrNote={this.state.currentNote} noteValue={2}/>
        <GuessButton guessNote="D#" getCurrNote={this.state.currentNote} noteValue={3}/>
        <GuessButton guessNote="E" getCurrNote={this.state.currentNote} noteValue={4}/>
        <GuessButton guessNote="F" getCurrNote={this.state.currentNote} noteValue={5}/>
        <GuessButton guessNote="F#" getCurrNote={this.state.currentNote} noteValue={6}/>
        <GuessButton guessNote="G" getCurrNote={this.state.currentNote} noteValue={7}/>
        <GuessButton guessNote="G#" getCurrNote={this.state.currentNote} noteValue={8}/>
        <GuessButton guessNote="A" getCurrNote={this.state.currentNote} noteValue={9}/>
        <GuessButton guessNote="A#" getCurrNote={this.state.currentNote} noteValue={10}/>
        <GuessButton guessNote="B" getCurrNote={this.state.currentNote} noteValue={11}/>
      </div>
    )
  }
  
}
export default App