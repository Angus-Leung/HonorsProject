import React, { Component } from 'react';

class GuessButton extends Component {

    handleClick = () => {
        
        if (this.props.getCurrNote === this.props.noteValue) {
            console.log("Hi i am true");
        } else {
            console.log("Hi i am false");
        }

    }

    render() {
        return (
            <div className='button2__container'>
                <button className='button' onClick={this.handleClick}>
                    {this.props.guessNote}
                </button>
            </div>
        );
    }
}

export default GuessButton;