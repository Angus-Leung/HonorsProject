import React, { Component } from 'react'
import './App.css'
import GetNewNoteButton from './NoteGenerator';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNote: 0 // need to use this to dynamically play a note
    };

  }

  getNewNote = (noteNumber) => {
    this.setState({ currentNote : noteNumber }, () => {
      console.log("currNote: " + this.state.currentNote);
    });
  }

  render () {
    return (
      <GetNewNoteButton getNewNote={this.getNewNote} />
    )
  }
  
}
export default App