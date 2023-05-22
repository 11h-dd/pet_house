import React, {useEffect, useRef} from 'react';
import "../../index.css"
import {useDispatch, useSelector} from "react-redux";
import {Avatar} from "antd";
import {NavLink, Outlet} from "react-router-dom";
import {CollectSelector, MyCollect} from "../../../../store/features/PersonSlice";
import request from "../../../../requests/request";

const GetUser = (props) => {
    const {count} = useSelector(CollectSelector)
    const dispatch = useDispatch()
    const MouseMove = (event) => {
        const classNames = event.target.nodeName
        if (classNames.toLowerCase() === "a") {
            // event.target.className = "PersonList PersonActive"
            event.target.parentNode.className = "PersonList PersonListActive"

        }
    }
    const MouseOut = (event) => {
            const classNames = event.target.nodeName
            if (classNames.toLowerCase() === "a") {
                event.target.parentNode.className = "PersonList"
            }
    }
    const activeClassName = ({ isActive }) => (isActive ? "inline-block w-[160px] h-[32px] PersonActive" : "inline-block w-[160px] h-[32px]");
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

    },[])
    const div = useRef()
    const avatar = useSelector(state => state.userConfigSlice.user.photo)
    const username = useSelector(state => state.userConfigSlice.user.username)
    return (<div className={"fool"}>
        <div className={"person_left"}>
            <div className={"mt-[40px] flex flex-col items-center"}>
                <div className={"w-[70px] h-[70px]"}>
                    {avatar ? <Avatar className={"w-full h-full"} size={"large"} src={avatar}/> :
                        <Avatar className={"w-full h-full"} size={70}>{username.slice(0, 1)}</Avatar>}
                </div>
                <span className={"mb-[20px]"}>{username}</span>
                <div className={"flex flex-col items-center mb-[40px]"}>
                    <span className={"text-[18px] text-[#222222]"}>{count}</span>
                    <span className={"text-[#9195A3] text-[12px]"}>收藏店铺</span>
                </div>
                <ul ref={div}  onMouseMove={MouseMove} onMouseOut={MouseOut}>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName}  to={"collect"}>收藏</NavLink>
                    </li>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName} to={"order"}>订单</NavLink>

                    </li>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName} to={"phone"}>修改手机</NavLink>
                    </li>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName} to={"password"}>修改密码</NavLink>
                    </li>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName} to={"email"}>修改头像</NavLink>
                    </li>
                    <li className={"PersonList"}>
                        <NavLink  className={activeClassName} to={"usernames"}>修改用户名</NavLink>
                    </li>
                </ul>

            </div>

        </div>
        <div className={"person_center"}>
            <Outlet/>
        </div>
        <div className={"person_right"}>右侧</div>
    </div>);
};

export default GetUser;