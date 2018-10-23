import React, { Component } from 'react';
import './App.css'
import GuessButton from '../components/GuessButton';
import NoteGenerator from '../components/NoteGenerator';
import NumNotesSlider from '../components/NumNotesSlider'
import KeySelector from '../components/KeySelector';
import RangeSlider from '../components/RangeSlider'
 
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
      <div style={{height: "100%", width: "100%", display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <NoteGenerator 
          setCurrNote={this.setCurrNote}
          numNotesToPlay={numNotesToPlay} 
          currentKey={currentKey}
          minRange= {minRange}
          maxRange = {maxRange}
        />
        <div className="guess-button-container">
          {arrayOfNotes.map((note, i) => (
            <GuessButton 
              key={note}
              guessNote={note} 
              getCurrNote={currentNote} 
              noteValue={i} 
            />
          ))}
        </div>
        <NumNotesSlider 
          value={numNotesToPlay}
          updateNumNotes={this.updateNumNotes}
        />
        <KeySelector
          updateCurrKey={this.updateCurrKey}
          keys={["C", "D", "E", "F", "G", "A", "B"]}
        />
        <RangeSlider updateRange={this.updateRange} />
      </div>
    )
  }
}
export default App;