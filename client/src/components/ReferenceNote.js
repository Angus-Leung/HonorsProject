import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button } from 'antd';
import "./ReferenceNote.css"

export default ({currentKey, referenceNoteOctave}) => {

    let handleClick = () => {
        
        const octave = 12 * referenceNoteOctave;
        const audio = new Audio(soundsArray[currentKey + (octave)]);
        audio.play();
    }
    
    return (
        <div className="reference-note-container">
            <Button
                className="reference-note-button"
                block
                onClick = {handleClick}
            >
                Get Root Note
            </Button>
        </div>
    );
};
