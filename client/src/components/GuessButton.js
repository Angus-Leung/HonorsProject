import React from 'react';
import { Button } from 'antd';
import "./GuessButton.css"

export default ({ guessName, onClick }) => (
    <Button
        className='guess-button'
        onClick={onClick}
    >
        {guessName}
    </Button>
);