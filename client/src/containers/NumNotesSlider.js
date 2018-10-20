import React, { Component } from 'react';
import { Slider, InputNumber, Col } from 'antd';

class NumNotesSlider extends Component {

    render() {
        const {updateNumNotes, value} = this.props
        return (
            <div className='button3__container'>
                {/* <button className='button' 
                        onClick={this.props.updateNumNotes}>
                        {this.props.value}
                </button> */}
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={updateNumNotes}
                        value={typeof value === 'number' ? value : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={updateNumNotes}
                    />
                </Col>
            </div>

        );
    }
}

export default NumNotesSlider;