import React, { Component } from 'react';
import Game1 from '../components/Game1';
import Game2 from '../components/Game2';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameToPlay: 1
    };

  }

  onChange = (e) => {
    
    this.setState({
      gameToPlay: e.target.value,
    });
    
  }

  render () {
    console.log(this.state.gameToPlay);

    return (
      <div>
        <RadioGroup onChange={this.onChange} defaultValue={1}>
          <Radio style={{display: 'block'}} value={1}>Note Identification </Radio>
          <Radio style={{display: 'block'}} value={2}>Interval Identification</Radio>
        </RadioGroup>
        {this.state.gameToPlay == 1 ? <Game1 /> : <Game2 />}
        
      </div>
    )
  }
}
export default App;