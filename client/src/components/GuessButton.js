import React from 'react';
import { Button } from 'antd';

export default ({getCurrNote, noteValue, guessNote}) => {

    let handleClick = () => {
        if (getCurrNote === noteValue) {
            console.log("Hi i am true");
        } else {
            console.log("Hi i am false");
        }
    }

    return (
        <div className='button2__container'>
            <Button size="large" block onClick={handleClick}>
                {guessNote}
            </Button>
        </div>
    );
};