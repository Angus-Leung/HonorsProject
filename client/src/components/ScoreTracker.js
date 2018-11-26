import React from 'react';
import { Input, Progress } from 'antd';

export default ({ score, total }) => {

    return (
        <div className="score-tracker">
            <Input size="large" disabled={true} value={score} />
            <Progress type="circle" percent={total} />
        </div>
    );
};