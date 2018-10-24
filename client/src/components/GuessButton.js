import React from 'react';
import { Button } from 'antd';
import "./GuessButton.css"

export default ({getCurrNote, noteValue, guessNote}) => {

    let handleClick = () => {
        if (getCurrNote === noteValue) {
            console.log("Hi i am true");
        } else {
            console.log("Hi i am false");
        }
    }

    return (
        <Button
            className='guess-button'
            onClick={handleClick}
        >
            {guessNote}
        </Button>
    );
};