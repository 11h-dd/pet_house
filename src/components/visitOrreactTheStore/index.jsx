import React, {useEffect, useState} from 'react';
import {Tabs} from "antd";
import Visit from "./visit";
import Stores from "./Store";
import getCity from "../../hooks/GetCity";
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
    const [city,SetCity] = useState()
    useEffect(() => {
        getCity().then(res => {
            SetCity(res)
        })
    },[])
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            当前地区:{city}
        </div>
    );

};

export default VisitOrStore;