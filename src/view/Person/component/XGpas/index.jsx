import React, {useState} from 'react';
import {Button, Input, message} from "antd";
import {useSelector} from "react-redux";
import request from "../../../../requests/request";

const ChangePass = (props) => {
    const username = useSelector(state => state.userConfigSlice.user.username)
    const [pas, SetPas] = useState("")
    const clickChange = async () => {
        const response = await request({
            url:"user/ChangePassword",
            method:"PATCH",
            params:{
                pas:pas
            }
        })
       message.success(response.data)
    }
    return (<div className={"mt-[40px] px-[20px]"}>
        <h1 className={"mb-[20px] text-[30px]"}>请输入新密码</h1>
        <div>
            <span className={"text-[14px] text-[#333]"}>用户名:</span>
            <br/>
            <Input className={"w-[240px] mt-[12px] h-[40px]"} value={username} disabled={true}></Input>
        </div>
        <div>
            <span className={"text-[14px] text-[#333]"}>新密码:</span>
            <br/>
            <Input.Password placeholder={"请输入新密码"} className={"w-[240px] mt-[12px] h-[40px]"} value={pas} onChange={(e) => {
                SetPas(e.target.value)
            }}></Input.Password>
        </div>
        <div className={"mt-[20px] h-[40px] w-[40px]"}>
            <Button disabled={pas.length <= 0} onClick={clickChange}>确定</Button>
        </div>
    </div>);
};

export default ChangePass;