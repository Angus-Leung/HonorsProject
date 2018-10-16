import React from 'react';
import soundsArray from '../utils/fileToArray';

export default ({setCurrNote}) => {
    let handleClick = () => {
        let randomSoundNum = Math.floor(Math.random() * 11);
        setCurrNote(randomSoundNum);
        const audio = new Audio(soundsArray[randomSoundNum]);
        audio.play();
    }
    
    return (
        <div className='button__container'>
            <button className='button' onClick={handleClick}>
            Click Me
            </button>
        </div>
    );
};