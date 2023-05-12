import React from 'react';
import animal from "../../../../assets/images/Animal.png";
import {Link, Navigate} from "react-router-dom";
import {Avatar, message} from "antd";
import {useSelector} from "react-redux";
const PersonHeader = () => {
    const username = useSelector(state => state.userConfigSlice.user.username)
    const photo = useSelector(state => state.userConfigSlice.user.photo)
    const token = useSelector(state => state.userConfigSlice.token)
    if(!token){
        message.error("您没有登陆")
        return <Navigate to={"/"}></Navigate>
    }
    return (
            <div className={"w-full h-[60px] bg-[#f9f9fa] flex justify-between pl-1 pr-5"}>
                <div className={"flex items-center"}>
                    <Link to={"/"}> <img src={animal} alt="宠物寄养" className={"w-[7rem] h-[5rem]"}/></Link>
                    <span>
                        个人中心
                    </span>
                </div>
                <div>
                    {photo? <Avatar size={"large"} src={photo}/> :
                        <Avatar size="large">{username.slice(0, 1)}</Avatar>}
                    {username}
                </div>
            </div>
    );
};

export default PersonHeader;