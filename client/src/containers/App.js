import React, { Component } from 'react';
import './App.css'
import GuessButton from './GuessButton';
import NoteGenerator from './NoteGenerator';
import NumNotesSlider from './NumNotesSlider'
import KeySelector from './KeySelector';
import { Dropdown, Icon } from 'antd';

const arrayOfNotes = [
  "C", "C#", "D", "D#", "E", "F", "F#", "G#", "A", "A#", "B"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.updateNumNotes = this.updateNumNotes.bind(this);
    this.state = {
      currentNote: 0, 
      numNotesToPlay: 1,
      currentKey: 0
    };

  }

  setCurrNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber });
  }

  updateNumNotes = (num) => {
    this.setState({ numNotesToPlay : num });
  }

  updateCurrKey = (num) => {
    this.setState({ currentKey : num}, () => console.log(this.state.currentKey));
  }

  render () {
    const { currentNote, numNotesToPlay, currentKey } = this.state;

    return (
      <>
        <NoteGenerator 
        setCurrNote={this.setCurrNote}
        numNotesToPlay={numNotesToPlay} 
        currentKey={currentKey}
        />
        {arrayOfNotes.map((note, i) => (
          <GuessButton 
            key={note}
            guessNote={note} 
            getCurrNote={currentNote} 
            noteValue={i} 
          />
        ))}
        <NumNotesSlider 
            value={numNotesToPlay}
            updateNumNotes={this.updateNumNotes}
        />
        <KeySelector updateCurrKey={this.updateCurrKey} />
      </>
    )
  }
  
}
export default App;