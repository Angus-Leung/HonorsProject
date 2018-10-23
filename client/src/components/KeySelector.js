import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';


export default ( {updateCurrKey, keys} ) => {
    const menu = () => (
        <Menu>
            {keys.map((key, index) => (
                <Menu.Item onClick={() => updateCurrKey(index)}>
                    <a>{key}</a>
                </Menu.Item>
            ))}
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
