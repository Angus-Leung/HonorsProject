import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button, notification } from 'antd';
import "./NoteGenerator.css"

export default ({
    arrayOfNotes,
    arrayOfIntervals,
    minRange,
    maxRange, 
    setCurrInterval,
    setNotesPlayed,
    currentOctaveMode,
    playableIntervals
}) => {

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let handleClick = async () => {

        // console.log(soundsArray.length);
        let firstNotelowest = minRange * 12;
        let firstNoteHighest = maxRange * 12;
        let firstNotePlayed = Math.floor(Math.random() * (firstNoteHighest - firstNotelowest)) + firstNotelowest;
        

        const reducer = (a, c) => [...a, c, -c];
        let availableIntervals = [];


        if (currentOctaveMode === "Ascending") {
            availableIntervals = playableIntervals;
        } else if (currentOctaveMode === "Descending") {
            availableIntervals = playableIntervals.map(x => -x);
        } else {
            availableIntervals = playableIntervals.reduce(reducer, []);
        }

        if (availableIntervals.length === 0) {
            notification['error']({
                message: 'Ooops',
                description: 'Please choose at least 1 of the intervals then retry',
                duration: 3 
              });
            return;
        }
        
        let randomInterval = Math.floor(Math.random() * availableIntervals.length)
        let secondNotePlayed = availableIntervals[randomInterval] + firstNotePlayed;

        let playedNotes = [];
        let currInterval = 0;

        let audio = new Audio(soundsArray[firstNotePlayed]);
        playedNotes.push(firstNotePlayed);
        audio.play();
        await delay(1000);
        audio = new Audio(soundsArray[secondNotePlayed]);
        playedNotes.push(secondNotePlayed);
        audio.play();

        currInterval = Math.abs(firstNotePlayed - secondNotePlayed);
        setCurrInterval(currInterval);

        console.log("first note played: " + playedNotes[0] + " = " + (arrayOfNotes[playedNotes[0] % 12] ));
        console.log("second note played: " + playedNotes[1] + " = " + (arrayOfNotes[playedNotes[1] % 12] ));
        console.log("Interval: " + arrayOfIntervals[currInterval]);
        setNotesPlayed(playedNotes);
        
    }
    
    return (
        <div className="interval-generator-container ma-1">
            <Button
                className="interval-generator-button"
                block
                onClick = {handleClick}
            >
                Generate interval
            </Button>
        </div>
    );
};
