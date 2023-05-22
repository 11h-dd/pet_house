import React from 'react';
import {Empty} from "antd";

const MyEmpty = ({title}) => {
    return (
       <Empty description={title||"暂无数据1"} ></Empty>
    );
};

export default MyEmpty;