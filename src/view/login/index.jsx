import React, {useState} from 'react';
import "./login.css"
import ani from "../../assets/images/Animal.png"
import LoginUser from "../../components/logins/login_user";
import LoginPhone from "../../components/logins/login_phone";

const Login = (props) => {
    const [active, UseActive] = useState("User")
    const taggleAction = (e) => {
        const name = e.currentTarget.innerHTML
        if (name === "账号登录") {
            UseActive("User")
            return
        }
        if (name === "手机登录") {
            UseActive("Phone")
            return
        }
    }
    const toggle = () => {
        if (active === "User") {
            return <LoginUser></LoginUser>
        }
        return <LoginPhone></LoginPhone>
    }
    return (<div className={"boog"}>
        <div className={"login_box"}>
            <div className={"box_left w-6/12"}>
                <div className={"box_left_top"}>
                    <img src={ani} alt="" className={"box_left_top_image"}/>
                    <h1>宠物寄养服务</h1>
                    <p>萌宠之选,爱宠之源,您的宠物之家</p>
                </div>
            </div>
            <div className={"box_right w-6/12"}>
                <div className={"login relative"}>
                    {/* 点击切换*/}
                    <div className={"flex justify-center relative z-30"}>
                        <h1 onClick={taggleAction}
                            className={active === "User" ? "underline decoration-4 text-orange-800 underline-offset-8" : ""}>账号登录</h1>
                        &nbsp;  &nbsp;
                        <h1 onClick={taggleAction}
                            className={active === "Phone" ? "underline decoration-4 text-orange-800 underline-offset-8" : ""}>手机登录</h1>
                    </div>
                       {toggle()}
                </div>
                <div></div>
            </div>
        </div>
    </div>);
};

export default Login;