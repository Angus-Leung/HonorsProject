import React from 'react';
import { Button } from 'antd';
import "./GuessButton.css"

export default ({ guessName, onClick }) => (
    <Button
        className='guess-button pa-1 ma-1'
        onClick={onClick}
    >
        {guessName}
    </Button>
);