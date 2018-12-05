import React from 'react';
import { Checkbox } from 'antd';

export default ({setPlayableIntervals, arrayOfIntervals}) => {
    const CheckboxGroup = Checkbox.Group;
    

    let playableIntervals = [];

    let onChange = (checkedValues) => {
        playableIntervals = [];
        console.log('checked = ', checkedValues);

        for (let i=0; i < arrayOfIntervals.length; i++) {
            if (checkedValues.includes(arrayOfIntervals[i])) {
                playableIntervals.push(i);
            }
        }
        console.log(playableIntervals);
        setPlayableIntervals(playableIntervals);
    }


    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
            <CheckboxGroup 
                options={arrayOfIntervals} 
                defaultValue={["Maj 2nd", "Min 3rd", "Maj 3rd", "Perfect 4th", "Perfect 5th", "Perfect Octave"]} 
                onChange={onChange} />
        </div>
    );
};