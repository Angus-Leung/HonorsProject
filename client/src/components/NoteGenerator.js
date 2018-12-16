import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button, notification } from 'antd';
import "./NoteGenerator.css"

export default ({
    arrayOfNotes, 
    setCurrNote, 
    playableScaleNotes,
    numNotesToPlay, 
    currentKey, 
    minRange,
    maxRange, 
    setNotesPlayed,
    playReferenceNote
}) => {

    let playedNotes = [];
    //ToDo use random note to say add multiple of 8s depending on octave

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let handleClick = async () => {
        if (minRange === maxRange) {
            notification['error']({
                message: 'Ooops',
                description: 'The available note range cannot be 0, please move the range slider to different values and retry',
                duration: 3 
              });
            return;
        }

        let lowestNote = (minRange - 1) * 12;
        let highestNote = (maxRange - 1) * 12;
        
        let scaleAdjustedForKey = playableScaleNotes.map((x => (x + currentKey) % 12));

        let playableNotes = [];
        for (let j=lowestNote; j < highestNote; j++) {
            if (scaleAdjustedForKey.includes(j % 12)) {
                playableNotes.push(j);
            }
        }

        if (playableNotes.length === 0) {
            notification['error']({
                message: 'Ooops',
                description: 'Please choose one of the scales then retry',
                duration: 3 
              });
            return;
        }

        let consoleLogPlayableNotes = [];
        for (let j=0; j < 7; j++) {
            consoleLogPlayableNotes.push(arrayOfNotes[(playableNotes[j] % 12)]);
        }
        console.log("Playable Notes: " + consoleLogPlayableNotes);


        playReferenceNote(); 
        await delay(1200);

        for (let i=0; i < numNotesToPlay; i++) {       

            let randomNote = (Math.floor(Math.random() * playableNotes.length));

            setCurrNote(playableNotes[randomNote] % 12);
            console.log("note generated: " + playableNotes[randomNote] + " = " +
                        arrayOfNotes[(playableNotes[randomNote] % 12)]);
            const audio = new Audio(soundsArray[playableNotes[randomNote]]);
            playedNotes.push(playableNotes[randomNote]);
            audio.play();
            await delay(1000);


        };
        
        setNotesPlayed(playedNotes);
        
    }
    
    return (
        <div className="note-generator-container">
            <Button
                className="note-generator-button pa-1"
                block
                onClick = {handleClick}
            >
                Generate Note
            </Button>
        </div>
    );
};
