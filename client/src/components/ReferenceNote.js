import React from 'react';
import { Button } from 'antd';
import "./ReferenceNote.css"

export default ({currentKey, referenceNoteOctave, handleReferenceNoteClick}) => {

    
    return (
        <div className="reference-note-container">
            <Button
                className="reference-note-button pa-1"
                block
                onClick = {handleReferenceNoteClick}
            >
                Get Root Note
            </Button>
        </div>
    );
};
