import React, {useEffect} from 'react';
import "./header.css"
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Button, Dropdown, Space} from "antd";
import service from "../../requests/request";
import {getTokenZero} from "../../utils/tokenZero";
import animal from "../../assets/images/Animal.png"

const items = [{
    label: <Link to={"/person"}>
        个人主页
    </Link>, key: "1"
}, {label: "账号设置", key: "2"}, {label: "意见反馈", key: "3"}, {
    type: 'divider',
},{
    label: '退出登录', key: '4', danger: true,
},];

const Header = (props) => {
    const dispatch = useDispatch()
    //判断有无token
    const username = useSelector(state => state.userConfigSlice.user.username)
    const photo = useSelector(state => state.userConfigSlice.user.photo)
    const token = useSelector(state => state.userConfigSlice.token)
    useEffect(() => {
        (async function () {
            try {
                const response = await service({
                    url: "user/IsToken", method: "get"
                })
                console.log(response)
            } catch (err) {
                if (err !== "") {
                    getTokenZero(dispatch)
                }
            }
        })()
    })
    const onClick = (tags) => {
        console.log(tags)
    };
    const renderUsername = () => {

        if (token) {
            return (<>

                <Dropdown
                    menu={{
                        items, onClick,
                    }}

                >
                    <Space>
                        <li className={"mr-1 align-bottom"}>{username}</li>

                        <li>{photo ? <Avatar size={"large"} src={photo}/> :
                            <Avatar size="large">{username.slice(0, 1)}</Avatar>}
                        </li>
                    </Space>

                </Dropdown>
            </>)
        }
        return (<>
            <li><Button>
                <Link to={"/loginAndRegister"}>登录/注册</Link>
            </Button></li>
        </>)
    }
    return (<div className="headers con flex">
        <div className={"header_content container flex justify-between items-center text-[19px]"}>
            <ul className={"flex w-[50rem] justify-around items-center"}>
                <li>
                    <Link to={"/"}> <img src={animal} alt="宠物寄养" className={"w-[7rem] h-[5rem]"}/></Link>
                </li>
                <li><NavLink to={"/"}>首页</NavLink></li>
                <li><NavLink to={"/entrust"}>我要寄养</NavLink></li>
                <li><NavLink to={"/merchant"}>成为商家</NavLink></li>
                <li><NavLink to={"/petclinic"}>宠物护理</NavLink></li>
                <li><NavLink to={"/CollcaoTion"}>日常托管</NavLink></li>
                <li><NavLink to={"/adoptionCommunity"}>领养社区</NavLink></li>
            </ul>
            <ul className={"flex  items-center"}>
                {renderUsername()}
            </ul>
        </div>
    </div>);
};

export default Header;