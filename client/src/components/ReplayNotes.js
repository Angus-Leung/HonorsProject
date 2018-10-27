import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button } from 'antd';
import "./NoteGenerator.css"

export default ({notesPlayed}) => {

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let handleClick = async () => {

        for (let i=0; i < notesPlayed.length; i++) {       
                
            const audio = new Audio(soundsArray[notesPlayed[i]]);
            audio.play();
            await delay(1000);
        };
    }
    
    return (
        <div className="note-generator-container">
            <Button
                className="note-generator-button"
                block
                onClick = {handleClick}
            >
                Replay Note(s)
            </Button>
        </div>
    );
};
