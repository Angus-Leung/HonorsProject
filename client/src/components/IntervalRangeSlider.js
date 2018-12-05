import React from 'react';
import { Slider } from 'antd';

export default ({updateRange}) => {

    
    const marks = {
        1: 'C3',
        2: 'C4',
        3: 'C5',
    };
    
    return (
        <div style={{width: "80%"}}>
            <Slider 
                range 
                tipFormatter={null}
                min={1} 
                max={3} 
                marks={marks}
                step={1} 
                defaultValue={[2, 3]}
                onChange={updateRange} 
            />


        </div>
    );
};