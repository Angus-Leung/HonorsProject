import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import "./KeySelector.css"

export default ( {updateCurrKey, keys, currentKey} ) => {
    const menu = () => (
        <Menu>
            {keys.map((key, index) => (
                <Menu.Item
                    key={key}
                    onClick={() => updateCurrKey(index)}
                >
                    <a>{key}</a>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="key-selector-container">
            <Dropdown overlay={menu()}>
                <a className="key-selector-dropdown">
                    Current Key: {currentKey} <Icon type="down" />
                </a>
            </Dropdown>
        </div>
    );
};
