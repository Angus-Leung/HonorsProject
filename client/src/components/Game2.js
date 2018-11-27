import React, { Component } from 'react';
import '../containers/App.css'
import RangeSlider from '../components/RangeSlider'
import IntervalGenerator from './IntervalGenerator';
import ReplayInterval from './ReplayInterval';
import GuessButton from '../components/GuessButton';
import { Collapse, notification } from 'antd';
import ScoreTracker from './ScoreTracker';

const { Panel } = Collapse;

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
          currInterval: "",
          score: 0,
          totalPlayed: 0
        };
      }

    updateTotal = () => {
      this.setState({ totalPlayed : this.state.totalPlayed + 1});
    }
  
    updateScore = () => {
      this.setState({ score : this.state.score + 1});
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

        this.setState({ currInterval: "" });
        this.updateScore();
        this.updateTotal();
      } else if (getInterval === "") {
        notification['error']({
          message: 'Ooops',
          description: 'Please generate a new interval before guessing',
          duration: 1.5 
        });
      }else {
        notification['error']({
          message: 'Wrong : (',
          description: 'Guess Again',
          duration: 1.25 
        });
        this.updateTotal();
      }
    }

  render () {
    const { 
      arrayOfNotes,
      minRange, 
      maxRange,
      notesPlayed,
      currInterval,
      score,
      totalPlayed
    } = this.state;


    return (
      <div style={{height: "100%", width: "100%", display: 'flex', alignItems: 'center', flexDirection: "row"}}>
        <div className = "fb-col fl-2 h-100 br fb-align-center">
          <div className="fb-row pa-3 ">
            <IntervalGenerator
              className="ma-1" 
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
          <div className="w-100 fb-row fb-justify-center pb-1">
            <div className="guess-button-container fb-row fb-justify-center">
              {this.state.arrayOfIntervals.map((interval, i) => (
                <GuessButton 
                  key={interval}
                  guessName={interval} 
                  onClick={() => this.handleGuessClick(currInterval, i)}
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
            <Panel header="Available range of notes" key="2">
              <RangeSlider updateRange={this.updateRange} />
            </Panel>
          </Collapse>
        </div>

      </div>
    )
    
  }
}
