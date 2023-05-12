import React, {useEffect, useState} from 'react';
import { Tabs} from "antd";
import Visit from "./visit";
import Stores from "./Store";
import getCity from "../../hooks/GetCity";
import "./index.css"
import Pagination from "../pagination/inedx";
import MyPagination from "../pagination/inedx";
const onChange = (key) => {
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
           <div className={"mb-3"}>
               当前地区:{city}
           </div>
            <ul className={"lieul"}>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
                <li className={"lieli"}></li>
            </ul>
            <MyPagination></MyPagination>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    );

};

export default VisitOrStore;