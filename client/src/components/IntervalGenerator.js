import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button } from 'antd';
import "./NoteGenerator.css"

export default ({
    arrayOfNotes,
    minRange,
    maxRange, 
    setCurrInterval,
    setNotesPlayed
}) => {

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let handleClick = async () => {

        console.log(soundsArray.length);
        let lowestNote = (minRange - 1) * 12;
        let highestNote = (maxRange - 1) * 12;

        let firstNotePlayed = Math.floor(Math.random() * (highestNote - lowestNote)) + lowestNote;
        let secondNotePlayed;
        if (firstNotePlayed > (soundsArray.length - 13)) {
            secondNotePlayed = Math.floor(Math.random() * (50 - (firstNotePlayed - 13))) + (firstNotePlayed - 13);
        } else {
            secondNotePlayed = Math.floor(Math.random() * ((firstNotePlayed + 13) - (firstNotePlayed - 13))) + (firstNotePlayed - 13);
        }
        
        
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
        setNotesPlayed(playedNotes);
        
    }
    
    return (
        <div className="interval-generator-container">
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
