import React, { Component } from 'react';
import '../containers/App.css'
import GuessButton from '../components/GuessButton';
import NoteGenerator from '../components/NoteGenerator';
import NumNotesSlider from '../components/NumNotesSlider'
import KeySelector from '../components/KeySelector';
import RangeSlider from '../components/RangeSlider'
import ReferenceNote from '../components/ReferenceNote';
import ReferenceOctaveSelector from '../components/ReferenceOctaveSelector';
import ReplayNotes from '../components/ReplayNotes';
import ScaleSelector from '../components/ScaleSelector';
import { notification } from 'antd';

export default class Game1 extends Component {
  constructor(props) {
    super(props);

    this.updateNumNotes = this.updateNumNotes.bind(this);
    this.state = {
      arrayOfNotes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      playableScaleNotes: [0, 2, 4, 5, 7, 9, 11],
      currentNote: 0, 
      numNotesToPlay: 1,
      currentKey: 0,
      minRange: 3,
      maxRange: 4,
      referenceNoteOctave: 4,
      notesPlayed: []
    };

  }

  setPlayableScaleNotes = (notesInScales) => {
    this.setState({playableScaleNotes : notesInScales})
  }

  setCurrNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber });
  }

  setReferenceOctave = (num) => {
    //minus 2 in the equation is to align with the correct value for referenceNoteOctave
    this.setState({ referenceNoteOctave: num });
  }

  setNotesPlayed = (notesPlayed) => {
    this.setState({ notesPlayed: notesPlayed});
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

  handleGuessClick = (getCurrNote, noteValue) => {
    const arrayOfNotes = this.state.arrayOfNotes;

    if (getCurrNote === noteValue) {
      notification['success']({
        message: 'Gottem',
        description: 'You got the correct note, it was ' + arrayOfNotes[getCurrNote % arrayOfNotes.length],
        duration: 1.5 
      });
    } else {
      notification['error']({
        message: 'Wrong : (',
        description: 'Guess Again',
        duration: 1.25 
      });
    }
  }

  render () {
    const { 
      arrayOfNotes, 
      currentNote, 
      numNotesToPlay, 
      currentKey, 
      minRange, 
      maxRange, 
      referenceNoteOctave,
      notesPlayed,
    } = this.state;

    return (
      <div style={{height: "100%", width: "100%", display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <div style={{height: "25%", width: "100%", display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
          <KeySelector
            updateCurrKey={this.updateCurrKey}
            keys={arrayOfNotes}
            currentKey={arrayOfNotes[currentKey]}
          />
          <NoteGenerator 
            arrayOfNotes={arrayOfNotes}
            setCurrNote={this.setCurrNote}
            numNotesToPlay={numNotesToPlay} 
            currentKey={currentKey}
            minRange={minRange}
            maxRange={maxRange}
            setNotesPlayed={this.setNotesPlayed}
          />
          <ReplayNotes 
            notesPlayed={notesPlayed}
          />
        </div>
        <div style={{height: "15%", width: "100%", display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start'}}>
          <ReferenceOctaveSelector
            setReferenceOctave={this.setReferenceOctave}
            referenceNoteOctave={referenceNoteOctave}
            currentKey={arrayOfNotes[currentKey]}
          />
          <ScaleSelector 
            setPlayableScaleNotes={this.setPlayableScaleNotes}
          />
          <ReferenceNote 
            referenceNoteOctave={referenceNoteOctave}
            currentKey={currentKey}
          />
        </div>
        <div className="guess-button-container">
          {this.state.arrayOfNotes.map((note, i) => (
            <GuessButton 
              key={note}
              guessName={note} 
              onClick={() => this.handleGuessClick(currentNote, i)}
            />
          ))}
        </div>
        <NumNotesSlider 
          value={numNotesToPlay}
          updateNumNotes={this.updateNumNotes}
        />
        <RangeSlider updateRange={this.updateRange} />
      </div>
    )
  }
}
