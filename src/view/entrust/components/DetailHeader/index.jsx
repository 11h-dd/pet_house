import React from 'react';
import {useSelector} from "react-redux";
import {Button} from "antd";
import { Link, useNavigate} from "react-router-dom";
const DetailHeader = (props) => {
    const token = useSelector(state => state.userConfigSlice.token)
    const navigate = useNavigate()
    return (
        // bg-[#ffffff]
        <div className={"h-[70px] w-full bg-[#ffffff] shadow-lg fixed z-10 top-0   "}>
            <div className={"h-full container flex justify-between items-center"}>
                <div className={""} onClick={() => {
                    navigate(-1)
                }}>
                    Left
                </div>
                <div className={""}>
                    {!token? <Button>
                        <Link to={"/loginAndRegister"}>注册/登录</Link>
                    </Button>:<span>我的收藏</span>}
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;