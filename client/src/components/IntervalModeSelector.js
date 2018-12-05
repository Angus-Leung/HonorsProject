import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

export default ( {updateCurrOctaveMode, currentOctaveMode} ) => {
    const menu = () => (
        <Menu>
            <Menu.Item
                onClick={() => updateCurrOctaveMode("Ascending")}
            >
                <a>Ascending</a>
            </Menu.Item>
            <Menu.Item
                onClick={() => updateCurrOctaveMode("Descending")}
            >
                <a>Descending</a>
            </Menu.Item>
            <Menu.Item
                onClick={() => updateCurrOctaveMode("Both")}
            >
                <a>Both</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown overlay={menu()}>
                <a className="key-selector-dropdown">
                    Interval Mode: {currentOctaveMode} <Icon type="down" />
                </a>
            </Dropdown>
        </div>
    );
};
