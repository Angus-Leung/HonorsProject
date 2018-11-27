import React from 'react';
import { Input, Progress } from 'antd';

export default ({ score, total }) => {

    return (
        <div className="score-tracker fb-row pa-1">
            <div className="f-2 fl-3 fb-row fb-align-center pr-3" >
                Score: {score} / {total}
            </div>
            <div className="fl-1 pl-1 ">
                <Progress type="circle" percent={Number(((score/total) * 100 || 0).toFixed(2))} />
            </div>
        </div>
    );
};