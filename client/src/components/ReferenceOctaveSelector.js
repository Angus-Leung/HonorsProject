import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import "./ReferenceOctaveSelector.css"

export default ( {setReferenceOctave, referenceNoteOctave, currentKey} ) => {
    const menu = () => (
        <Menu>
            <Menu.Item
                onClick={() => setReferenceOctave(2)}
            >
                <a>{currentKey}2</a>
            </Menu.Item>
            <Menu.Item
                onClick={() => setReferenceOctave(3)}
            >
                <a>{currentKey}3</a>
            </Menu.Item>
            <Menu.Item
                onClick={() => setReferenceOctave(4)}
            >
                <a>{currentKey}4</a>
            </Menu.Item>
            <Menu.Item
                onClick={() => setReferenceOctave(5)}
            >
                <a>{currentKey}5</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="reference-octave-selector-container">
            <Dropdown overlay={menu()}>
                <a className="key-selector-dropdown">
                    Root Note Octave: {currentKey}{referenceNoteOctave} <Icon type="down" />
                </a>
            </Dropdown>
        </div>
    );
};
