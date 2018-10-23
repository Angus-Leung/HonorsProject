import React from 'react';

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
            <button className='button' onClick={handleClick}>
                {guessNote}
            </button>
        </div>
    );
};