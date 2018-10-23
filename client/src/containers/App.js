import React, { Component } from 'react';
import './App.css'
import GuessButton from './GuessButton';
import NoteGenerator from './NoteGenerator';
import NumNotesSlider from './NumNotesSlider'
import KeySelector from './KeySelector';
import RangeSlider from './RangeSlider'
 
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
      currentKey: 0,
      minRange: 3,
      maxRange: 4
    };

  }

  setCurrNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber });
  }

  updateNumNotes = (num) => {
    this.setState({ numNotesToPlay : num });
  }

  updateCurrKey = (num) => {
    this.setState({ currentKey : num}, () => console.log("currKey: " + this.state.currentKey));
  }

  updateRange = (newRange) => {
    this.setState({ minRange : newRange[0] }, () => console.log("minRange: " + this.state.minRange));
    this.setState({ maxRange : newRange[1] }, () => console.log("maxRange: " + this.state.maxRange));
  }

  render () {
    const { currentNote, numNotesToPlay, currentKey, minRange, maxRange } = this.state;

    return (
      <>
        <NoteGenerator 
        setCurrNote={this.setCurrNote}
        numNotesToPlay={numNotesToPlay} 
        currentKey={currentKey}
        minRange= {minRange}
        maxRange = {maxRange}
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
        <RangeSlider updateRange={this.updateRange} />
      </>
    )
  }
  
}
export default App;