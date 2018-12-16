import React from 'react';
import { Checkbox } from 'antd';

export default ({setPlayableScaleNotes}) => {
    const CheckboxGroup = Checkbox.Group;
    let majorScale = [0, 2, 4, 5, 7, 9, 11];
    let minorScale = [0, 2, 3, 5, 7, 8, 10];
    let majorPentatonic = [0, 2, 4, 7, 9];
    let minorPentatonic = [0, 3, 5, 7, 10];
    let majorBlues = [0, 2, 3, 4, 7, 9];
    let minorBlues = [0, 3, 5, 6, 7, 10];

    let playableNotes = [];

    let addScale = (scale) => {
        for (let i=0; i < scale.length; i++) {
            if(playableNotes.indexOf(scale[i]) === -1) {
                playableNotes.push(scale[i]);
              }
        }
    }

    let onChange = (checkedValues) => {
        playableNotes = [];
        console.log('checked = ', checkedValues);
        if (checkedValues.includes("Major")) {
            addScale(majorScale);    
        }
        if (checkedValues.includes("Minor")) {
            addScale(minorScale);   
        }
        if (checkedValues.includes("Major Pentatonic")) {
            addScale(majorPentatonic);   
        }
        if (checkedValues.includes("Minor Pentatonic")) {
            addScale(minorPentatonic);   
        }
        if (checkedValues.includes("Major Blues")) {
            addScale(majorBlues);   
        }
        if (checkedValues.includes("Minor Blues")) {
            addScale(minorBlues);   
        }
        
        setPlayableScaleNotes(playableNotes);
    }

    const plainOptions = [
                        'Major',
                        'Minor', 
                        'Major Pentatonic',
                        'Minor Pentatonic',
                        'Major Blues',
                        'Minor Blues'
                        ];

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
            <CheckboxGroup options={plainOptions} defaultValue={['Major']} onChange={onChange} />
        </div>
    );
};