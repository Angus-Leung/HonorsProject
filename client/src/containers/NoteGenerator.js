import React from 'react';
import soundsArray from '../utils/fileToArray';

export default ({setCurrNote, numNotesToPlay, currentKey}) => {

    let majorScale = [0, 2, 4, 5, 7, 9, 11];
    //ToDo use random note to say add multiple of 8s depending on octave choices
    let handleClick = () => {
        for (let i=0; i < numNotesToPlay; i++) {
            setTimeout(() => {
                let randomInterval = Math.floor(Math.random() * 7);
                let randomNote = currentKey + majorScale[randomInterval];
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
