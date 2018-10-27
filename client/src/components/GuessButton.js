import React from 'react';
import { Button } from 'antd';
import "./GuessButton.css"

export default ({ guessNote, onClick }) => (
    <Button
        className='guess-button'
        onClick={onClick}
    >
        {guessNote}
    </Button>
);