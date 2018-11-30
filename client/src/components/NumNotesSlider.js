import React, { Component } from 'react';
import { Slider, InputNumber } from 'antd';
import "./NumNotesSlider.css"

class NumNotesSlider extends Component {

    render() {
        const {updateNumNotes, value, clearGuess, setNotesPlayed} = this.props

        let onChange = (value) => {
            updateNumNotes(value);
            setNotesPlayed([]);
            clearGuess();
        };
//onChange={updateNumNotes}

        return (
            <div className='num-notes-slider-container'>
                <div className='num-notes-component-slider'>
                    <Slider
                        className='num-notes-slider'
                        min={1}
                        max={20}
                        onChange={onChange}
                        value={typeof value === 'number' ? value : 0}
                    />
                </div>
                <div className='num-notes-input-container'>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={updateNumNotes}
                    />
                </div>
            </div>

        );
    }
}

export default NumNotesSlider;