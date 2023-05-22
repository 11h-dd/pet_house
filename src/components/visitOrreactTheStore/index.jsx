import React, {useEffect, useState} from 'react';
import getCity from "../../hooks/GetCity";
import "./index.css"
import MyPagination from "../pagination/inedx";
import DetailList from "../../view/entrust/components/DetailList";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {PagesResultSelector} from "../../store/features/PagesSlice";
import {myWoW} from "../../utils/myWow";


const VisitOrStore = (props) => {
    const [city,SetCity] = useState()
    const navigate = useNavigate()
    const result = useSelector(PagesResultSelector)
    useEffect(() => {
        myWoW.init()
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
                {
                    result.map(res => (
                        <li key={res.char_id} className={"lieli animate__bounceIn"} onClick={() => {
                            navigate(`/entrust/details/${res.char_id}`)
                        }}>
                            <DetailList  res={res} />
                        </li>
                    ))
                }

            </ul>
            <MyPagination></MyPagination>
        </div>
    );

};

export default VisitOrStore;