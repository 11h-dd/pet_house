import React from 'react';
import {Tabs} from "antd";
import Visit from "./visit";
import Stores from "./Store";
import MapsGd from "../MapsGD";
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `上门`,
        children: <Visit/>,
    },
    {
        key: '2',
        label: `到店`,
        children: <Stores/>,
    }
];
const VisitOrStore = (props) => {
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                {/*地图组件*/}
                {/*<Maps>*/}
                    <MapsGd></MapsGd>
                {/*</Maps>*/}
        </div>
    );
};

export default VisitOrStore;