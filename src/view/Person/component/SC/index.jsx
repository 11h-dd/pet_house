import React, {useEffect} from 'react';
import MyEmpty from "../../../../components/Empties";
import request from "../../../../requests/request";
import {CollectSelector, MyCollect} from "../../../../store/features/PersonSlice";
import {useDispatch, useSelector} from "react-redux";
import MyRate from "../../../../components/MyRate";
import styles from "./index.module.css"
import {useNavigate} from "react-router-dom";
import {Button, message} from "antd";
const ShouCang = (props) => {
    const dispatch = useDispatch()
    const collect = useSelector(CollectSelector)
    const navigate = useNavigate()
    const GetSCData = () => {
        request({
            url: "/user/ISCollect", method: "get"
        }).then(res => {
            dispatch(MyCollect({
                char: res.data.char, count: res.data.count
            }))
        })
    }
    useEffect(() => {
        GetSCData()
    }, [])
    const getData = () => {
        return <div className={"mt-[50px] px-[20px]"}>
            <ul>
                {
                    collect.char.map(item => <li key={item.char_id} className={styles.lis} onClick={() => {
                        navigate(`/entrust/details/${item.char_id}`)
                    }}>
                        <img src={item.char_avatar} alt=""/>
                        <div className={"h-full relative"}>
                            <div>{item.char_shop_name}</div>
                            <div>{item.char_info}</div>
                            <MyRate StartCount={item.char_status} isDisabled={true}/>
                            <div className={"absolute top-[20px] right-[15px]"}>
                                <Button onClick={(e) => {
                                    e.stopPropagation()
                                    request({
                                        url:"user/deleteCollect",
                                        method:'get',
                                        params:{
                                            char_id:item.char_id
                                        }
                                    }).then(res => {
                                        GetSCData()
                                        message.success(res.data)
                                    })
                                }}>删除</Button>
                            </div>
                        </div>

                    </li>)
                }
            </ul>
        </div>
    }
    return (<div>
        <div>
            { collect.count === 0 ?
                <div className={"mt-[200px]"}><MyEmpty title={"暂无收藏列表"}/></div> : getData()}
        </div>

    </div>);
};

export default ShouCang;