import React from 'react';
import soundsArray from '../utils/fileToArray';
import { Button } from 'antd';
import "./NoteGenerator.css"

export default ({
    notesPlayed
}) => {

    const delay = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let handleClick = async () => {

        if(notesPlayed.length === 2) {
            let audio = new Audio(soundsArray[notesPlayed[0]]);
            audio.play();
            await delay(1000);
            audio = new Audio(soundsArray[notesPlayed[1]]);
            audio.play();
            
        }
    }
    
    return (
        <div className="replay-interval-container">
            <Button
                className="replay-interval-button"
                block
                onClick = {handleClick}
            >
                Replay interval
            </Button>
        </div>
    );
};
