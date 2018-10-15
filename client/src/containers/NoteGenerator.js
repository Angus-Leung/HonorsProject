import React, { Component } from 'react';

import C4 from '../assets/sounds/C4.wav'
import Cs4 from '../assets/sounds/Cs4.wav'
import D4 from '../assets/sounds/D4.wav'
import Ds4 from '../assets/sounds/Ds4.wav'
import E4 from '../assets/sounds/E4.wav'
import F4 from '../assets/sounds/F4.wav'
import Fs4 from '../assets/sounds/Fs4.wav'
import G4 from '../assets/sounds/G4.wav'
import Gs4 from '../assets/sounds/Gs4.wav'
import A4 from '../assets/sounds/A4.wav'
import As4 from '../assets/sounds/As4.wav'
import B4 from '../assets/sounds/B4.wav'
import C5 from '../assets/sounds/C5.wav'

let soundDict = {};

soundDict[0] = C4;
soundDict[1] = Cs4;
soundDict[2] = D4;
soundDict[3] = Ds4;
soundDict[4] = E4;
soundDict[5] = F4;
soundDict[6] = Fs4;
soundDict[7] = G4;
soundDict[8] = Gs4;
soundDict[9] = A4;
soundDict[10] = As4;
soundDict[11] = B4;
soundDict[12] = C5;

class NoteGenerator extends Component {

    handleClick = () => {
        let randomSoundNum = Math.floor(Math.random() * 12);
        console.log(randomSoundNum);
        this.props.getNewNote(randomSoundNum);
        const audio = new Audio(soundDict[randomSoundNum]);
        audio.play();
    }

    render() {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                Click Me
                </button>
            </div>
        );
    }
}

export default NoteGenerator;