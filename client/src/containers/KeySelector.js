import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';


export default ( {updateCurrKey} ) => {

    const menu = () => (
        <Menu>
            <Menu.Item onClick={() => updateCurrKey(0)}>
                <a>C</a>
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(2)}>
                <a>D</a>
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(4)}>
                <a>E</a>    
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(5)}>
                <a>F</a>    
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(7)}>
                <a>G</a>    
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(9)}>
                <a>A</a>    
            </Menu.Item>
            <Menu.Item onClick={() => updateCurrKey(11)}>
                <a>B</a>    
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu()}>
            <a className="ant-dropdown-link">
            Hover me <Icon type="down" />
            </a>
        </Dropdown>
    );
};
