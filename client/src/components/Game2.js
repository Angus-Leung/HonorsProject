import React, { Component } from 'react';
import '../containers/App.css'
import RangeSlider from '../components/RangeSlider'
import IntervalGenerator from './IntervalGenerator';
import ReplayInterval from './ReplayInterval';
import GuessButton from '../components/GuessButton';
import { notification } from 'antd';


export default class Game2 extends Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
          arrayOfNotes: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
          arrayOfIntervals: ["Unison", "Min 2nd", "Maj 2nd", "Min 3rd", "Maj 3rd", "Perfect 4th", "Tri Tone",
                             "Perfect 5th", "Min 6th", "Maj 6th", "Min 7th", "Maj 7th", "Perfect Octave"],
          notesPlayed: [],
          minRange: 3,
          maxRange: 4,
          currInterval: 0
        };
      }

    updateRange = (newRange) => {
        this.setState({ minRange : newRange[0] }, () => console.log("minRange: " + this.state.minRange));
        this.setState({ maxRange : newRange[1] }, () => console.log("maxRange: " + this.state.maxRange));
    }
    setNotesPlayed = (notesPlayed) => {
      this.setState({ notesPlayed: notesPlayed});
    }

    setCurrInterval = (interval) => {
      this.setState({ currInterval: interval });
    }

    handleGuessClick = (getInterval, guessInterval) => {
      const arrayOfIntervals = this.state.arrayOfIntervals;
  
      if (getInterval === guessInterval) {
        notification['success']({
          message: 'Gottem',
          description: 'You got the correct interval, it was ' + arrayOfIntervals[guessInterval],
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
      minRange, 
      maxRange,
      notesPlayed,
      currInterval
    } = this.state;


    return (
      <div style={{height: "100%", width: "100%", display: 'flex', alignItems: 'center', flexDirection: "column"}}>
        <div style={{height: "25%", width: "100%", display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}> 
          <RangeSlider updateRange={this.updateRange} />
          <IntervalGenerator 
            arrayOfNotes={arrayOfNotes}
            minRange={minRange}
            maxRange={maxRange}
            setCurrInterval={this.setCurrInterval}
            setNotesPlayed={this.setNotesPlayed}
          />
          <ReplayInterval
            notesPlayed={notesPlayed}
          />
        </div>
        <div className="guess-button-container">
          {this.state.arrayOfIntervals.map((interval, i) => (
            <GuessButton 
              key={interval}
              guessName={interval} 
              onClick={() => this.handleGuessClick(currInterval, i)}
            />
          ))}
        </div>
      </div>
    )
    
  }
}
