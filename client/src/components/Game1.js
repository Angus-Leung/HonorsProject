import '../containers/App.css'

import React, { Component } from 'react';
import GuessButton from '../components/GuessButton';
import NoteGenerator from '../components/NoteGenerator';
import NumNotesSlider from '../components/NumNotesSlider'
import KeySelector from '../components/KeySelector';
import RangeSlider from '../components/RangeSlider'
import ReferenceNote from '../components/ReferenceNote';
import ReferenceOctaveSelector from '../components/ReferenceOctaveSelector';
import ReplayNotes from '../components/ReplayNotes';
import ScaleSelector from '../components/ScaleSelector';
import ScoreTracker from '../components/ScoreTracker';
import soundsArray from '../utils/fileToArray';

import { Collapse, notification } from 'antd';

const { Panel } = Collapse;

export default class Game1 extends Component {
  constructor(props) {
    super(props);

    this.updateNumNotes = this.updateNumNotes.bind(this);
    this.guessBuffer = []
    this.state = {
      arrayOfNotes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
      playableScaleNotes: [0, 2, 4, 5, 7, 9, 11],
      currentNote: "", 
      numNotesToPlay: 1,
      currentKey: 0,
      minRange: 3,
      maxRange: 4,
      referenceNoteOctave: 4,
      notesPlayed: [],
      score: 0,
      totalPlayed: 0
    };

  }

  clearGuess = () => {
    this.guessBuffer = [];
  }

  updateTotal = () => {
    this.setState({ totalPlayed : this.state.totalPlayed + 1});
  }

  updateScore = () => {
    this.setState({ score : this.state.score + 1});
  }

  setPlayableScaleNotes = (notesInScales) => {
    this.setState({playableScaleNotes : notesInScales});
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
    this.setState({ minRange : newRange[0] });
    this.setState({ maxRange : newRange[1] });
  }

  playReferenceNote = () => {
        
    const octave = 12 * (this.state.referenceNoteOctave - 2);
    const audio = new Audio(soundsArray[this.state.currentKey + (octave)]);
    audio.play();
  }

  handleGuessClick = (notesPlayed, guessNote) => {
    const { arrayOfNotes } = this.state

    if (!notesPlayed.length) {
      notification['error']({
        message: 'Ooops',
        description: 'Please generate a new note before guessing',
        duration: 1.5 
      });
      return;
    }

    this.guessBuffer.push(guessNote);

    if (this.guessBuffer.length === notesPlayed.length) {
      const resolveSuccessful = this.guessBuffer.every(
        (value, i) => value === notesPlayed[i] % 12 // mod 12 for octave
      )

      if (resolveSuccessful) {
        notification['success']({
          message: 'Gottem',
          description: `Correct, you guessed ${this.guessBuffer.map(noteIndex => arrayOfNotes[noteIndex]).join(', ')}`,
          duration: 1.75 
        });
        // this.setState({ currentNote : "" });
        this.setNotesPlayed([]);
        this.updateScore();
        this.updateTotal();
      } else {
        notification['error']({
          message: 'Wrong : (',
          description: 'Guess Again',
          duration: 1.25 
        });
        this.updateTotal();
      }
      this.guessBuffer = []
    }
    

  }

  render () {
    const { 
      arrayOfNotes, 
      currentNote,
      playableScaleNotes, 
      numNotesToPlay, 
      currentKey, 
      minRange, 
      maxRange, 
      referenceNoteOctave,
      notesPlayed,
      score,
      totalPlayed
    } = this.state;

    return (
      <div style={{height: "100%", width: "100%", display: 'flex', flex: 1, alignItems: 'center', flexDirection: "row"}}>

         <div className='game-container h-100 fl-2 overflow-y-scroll br pr-1'>
          <div className='pa-3 w-100' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
            <KeySelector
              updateCurrKey={this.updateCurrKey}
              keys={arrayOfNotes}
              currentKey={arrayOfNotes[currentKey]}
            />
            <NoteGenerator 
              arrayOfNotes={arrayOfNotes}
              setCurrNote={this.setCurrNote}
              playableScaleNotes={playableScaleNotes}
              numNotesToPlay={numNotesToPlay} 
              currentKey={currentKey}
              minRange={minRange}
              maxRange={maxRange}
              setNotesPlayed={this.setNotesPlayed}
              playReferenceNote={this.playReferenceNote}
            />
            <ReplayNotes 
              notesPlayed={notesPlayed}
            />
          </div>
          <div className='pa-2' style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
            <ReferenceNote 
              referenceNoteOctave={referenceNoteOctave}
              currentKey={currentKey}
              handleReferenceNoteClick={this.playReferenceNote}
            />
          </div>
          <div className="w-100 fb-row fb-justify-center pb-1">
            <div className="guess-button-container">
              {this.state.arrayOfNotes.map((note, i) => (
                <GuessButton 
                  key={note}
                  guessName={note} 
                  onClick={() => this.handleGuessClick(notesPlayed, i)}
                />
              ))}
            </div>
          </div>
          <div className='fb-row fb-justify-center pt-2'>
            <ScoreTracker 
              score={score}
              total={totalPlayed}
            />
          </div>
        </div> 
         
        <div className='settings-panel w-100 h-100 fl-1'>
          <Collapse style={{ width: '100%' }} bordered={false} defaultActiveKey={['1']}>
            <Panel header="Number of notes" key="1">
              <NumNotesSlider 
                value={numNotesToPlay}
                updateNumNotes={this.updateNumNotes}
                clearGuess={this.clearGuess}
                setNotesPlayed={this.setNotesPlayed}
              />
            </Panel>
            <Panel header="Available range of notes" key="2">
              <RangeSlider updateRange={this.updateRange} />
            </Panel>
            <Panel header="Octave" key="3">
              <ReferenceOctaveSelector
                setReferenceOctave={this.setReferenceOctave}
                referenceNoteOctave={referenceNoteOctave}
                currentKey={arrayOfNotes[currentKey]}
              />
            </Panel>
            <Panel header="Scale" key="4">
              <ScaleSelector 
                setPlayableScaleNotes={this.setPlayableScaleNotes}
              />
            </Panel>

          </Collapse>
        </div>
      </div>
    )
  }
}
