import React, { Component } from 'react';
import './App.css'
import GuessButton from './GuessButton';
import NoteGenerator from './NoteGenerator';


const arrayOfNotes = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G#", "A", "A#", "B"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNote: 0 // need to use this to dynamically play a note
    };

  }

  setCurrNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber });
  }

  render () {
    const { currentNote } = this.state;

    return (
      <>
        <NoteGenerator setCurrNote={this.setCurrNote} />
        {arrayOfNotes.map((note, i) => (
          <GuessButton 
            key={note}
            guessNote={note} 
            getCurrNote={currentNote} 
            noteValue={i} 
          />
        ))}
      </>
    )
  }
  
}
export default App;