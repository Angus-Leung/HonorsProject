import React from 'react';
import { Slider } from 'antd';

export default ({updateRange}) => {

    
    const marks = {
        1: 'C2',
        2: 'C3',
        3: 'C4',
        4: 'C5',
        5: 'C6',
    };
    
    return (
        <div>
            <Slider 
                range 
                min={1} 
                max={5} 
                marks={marks}
                step={1} 
                defaultValue={[3, 4]}
                onChange={updateRange} 
            />


        </div>
    );
};