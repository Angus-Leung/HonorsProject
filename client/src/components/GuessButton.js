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
        <div className='button-container'>
            <Button
                block
                size="large"
                onClick={handleClick}
            >
                {guessNote}
            </Button>
        </div>
    );
};