import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NoteTraining from '../components/Game1';
import IntervalTraining from '../components/Game2';

import './App.css'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameToPlay: 1
    };

  }

  navigateTo = (e) => {
    debugger
    this.setState({
      gameToPlay: e.target.value,
    });
    
  }

  render () {
    console.log(this.state.gameToPlay);
    const { location } = window
    return (
      <Router>
        <div className='fb-row fl-1'>
          <div className='side-bar fl-1'>
            <Menu
              className='h-100'
              defaultSelectedKeys={[location.pathname]}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="experiment" /><span>Training</span></span>}>
                <MenuItemGroup key="g1">
                  <Menu.Item key="/">
                    <Link to="/">Note Training</Link>
                  </Menu.Item>
                  <Menu.Item key="/interval-training">
                    <Link to="/interval-training">Interval Training</Link>
                  </Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </div>
          <div className='fl-5 fb-col'>
            <div className='header pa-3 bb'>
              <Icon type='book'/> Ear Trainer
            </div>
            <div className='content fl-8 pa-3'>
              <Route exact path="/" component={NoteTraining} />
              <Route path="/interval-training" component={IntervalTraining} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;