import React from 'react';
import {Rate} from "antd";

const MyRate = ({StartCount,isDisabled}) => {
    return (
        <div>
            评分:<Rate defaultValue={StartCount} disabled={isDisabled}/>
        </div>
    );
};

export default MyRate;