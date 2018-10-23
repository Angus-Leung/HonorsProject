import React from 'react';
import soundsArray from '../utils/fileToArray';

export default ({setCurrNote, numNotesToPlay, currentKey, minRange, maxRange}) => {

    let majorScale = [0, 2, 4, 5, 7, 9, 11];
    //ToDo use random note to say add multiple of 8s depending on octave
    let handleClick = () => {
        for (let i=0; i < numNotesToPlay; i++) {
            setTimeout(() => {
                /*
                randomInterval: picks random notes within the scale array 
                        -toDo change hardCode to accomodate different scales with different lengths
                startingNote: Start note changes depending on what the user picks for range
                randomNote: 
                */
                let lowestNote = (minRange - 1) * 12;
                let highestNote = (maxRange - 1) * 12;
                let randomInterval = Math.floor(Math.random() * 7);
                let startingNote = currentKey + lowestNote;
                let randomNote = startingNote + majorScale[randomInterval] + 
                                (Math.floor((Math.random() * (Math.abs(maxRange - minRange))) * 8));
                
                setCurrNote(randomNote % 11);
                console.log(randomNote);
                const audio = new Audio(soundsArray[randomNote]);
                audio.play();
            }, 1000*i);
        };
    }
    
    return (
        <div className='button__container'>
            <button className='button' onClick = {handleClick}>
                Click Me
            </button>
        </div>
    );
};
