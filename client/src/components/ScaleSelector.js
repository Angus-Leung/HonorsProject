import React from 'react';
import { Checkbox } from 'antd';

export default () => {
    const CheckboxGroup = Checkbox.Group;
    let majorScale = [0, 2, 4, 5, 7, 9, 11];
    let minorScale = [0, 2, 3, 5, 7, 8, 10];
    let majorPentatonic = [0, 2, 4, 7, 8];
    let minorPentatonic = [0, 3, 5, 7, 10];
    let majorBlues = [0, 2, 3, 4, 7, 8];
    let minorBlues = [0, 3, 5, 6, 7, 10];


    function onChange(checkedValues) {
        //setPlayableScaleNotes
        console.log('checked = ', checkedValues);
        if (checkedValues.includes("Major")) {
            console.log("has major!")
        } else {
            console.log("cibai")
        }
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
        <div style={{height: "100%", width: "25%", display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
            <CheckboxGroup options={plainOptions} defaultValue={['Major']} onChange={onChange} />
        </div>
    );
};