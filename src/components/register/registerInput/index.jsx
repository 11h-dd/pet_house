import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Input, message} from "antd";
import {LockOutlined, UserOutlined, PhoneOutlined, CodepenOutlined} from "@ant-design/icons";
import service from "../../../requests/request";
import {trimAll} from "../../../utils/Strings/trims";
import {useDispatch} from "react-redux";
import {getStoreToUserToken} from "../../../utils/stroages";


function RegisterInput(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isClick, SetIsClick] = useState({
        isClick: true
    })
    const [form, SetForm] = useState({
        username: '', password: '', phone: "", smsCode: ""
    })
    const [isPassword, SetIsPassowd] = useState("")
    const [isShows, SetIsShows] = useState("")
    const [isShowsPhone, SetIsShowsPhone] = useState("")
    const [isShowsPassword, SetIsShowsPassword] = useState("")
    const Submit = async () => {
        const response = await service({
            method: "post", url: "register", data: {
                username: form.username, password: form.password, phone: form.phone, smsCode: form.smsCode
            }
        })
        if(response.status===200) {
            getStoreToUserToken(dispatch,response)
            message.success("注册成功",0.5,() => {
                navigate("/",{replace:true})
            })
        }
    }
    const onChanges = (e) => {
        SetForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const isOne = () => {
        if (isPassword !== form.password) {
            SetIsShowsPassword("error")
            message.warning("密码不一致", 0.5)
            return
        }
        SetIsShowsPassword("")
    }
    //发送验证码
    const smsCodes = async (e) => {
        if (form.phone === "") {
            message.warning("需要填写手机号",0.5)
            SetIsClick({
                isClick: false
            })
            return
        }
        if(form.phone.length < 11 ) {
            message.warning("手机号不能小于11位",0.5)
            SetIsClick({
                isClick: false
            })
            return
        }
        if(form.phone.length > 11) {
            message.warning("手机号不能大于11位",0.5)
            SetIsClick({
                isClick: false
            })
            return
        }
        if(!isClick.isClick) return
        var timer = 60
        var sss = setInterval(() => {
            SetIsClick({
                isClick: false
            })
            timer -= 1
            e.target.innerText = timer

            if (timer === 0) {
                e.target.innerText = "获取验证码"
                clearInterval(sss)
                SetIsClick({
                    isClick: true
                })
            }
        }, 1000)
        try {
            const response = await service({
                url: `getSms?phone=${form.phone}`
            })
            // console.log(response)
            SetForm({
                ...form,
                smsCode:response.data
            })
        } catch (err) {
            console.log(err)
            SetForm({
                ...form,
                smsCode:err.data
            })
        }

    }
    //验证用户名是否存在
    const UserIsShow = async () => {
        SetForm({
            ...form, username: trimAll(form.username),
        })
        const response = await service({
            method: "get", url: `getUserName?username=${form.username}`,
        })
        if (response.data) {
            console.log("用户名有重复的")
            SetIsShows("error")
            message.warning("账户名被使用了,请换一个", 0.5)
            return
        }
        SetIsShows("")
    }
    const PhoneIsShow = async () => {
        if (form.phone.length < 11) {
            SetIsShowsPhone("error")
            message.warning("手机号不能小于11位")
            return
        }
        if (form.phone.length > 11) {
            SetIsShowsPhone("error")
            message.warning("手机号不能大于11位")
            return
        }
        const response = await service({
            url: `getPhone?phone=${form.phone}`, method: "get",
        })
        if (response.data) {
            SetIsShowsPhone("error")
            message.warning("手机号已经被使用", 0.5)
            return
        }
        SetIsShowsPhone("")


    }
    return (<div>
        <Input size="large" status={isShows} placeholder="用户名" name={"username"} value={form.username.trim()}
               onChange={onChanges}
               onBlur={UserIsShow}
               className={"mb-2"}
               prefix={<UserOutlined/>}/>
        <Input.Password size="large" placeholder="密码" name={"password"} value={form.password} onChange={onChanges}
                        className={"mb-2"}
                        prefix={<LockOutlined className="site-form-item-icon"/>}/>
        <Input.Password size="large" status={isShowsPassword} placeholder="确认密码" name={"isPassword"} value={isPassword}
                        onChange={(e) => {
                            SetIsPassowd(e.target.value)
                        }} prefix={<LockOutlined className="site-form-item-icon"/>}
                        onBlur={isOne} className={"mb-2"}
        />
        <Input size="large" status={isShowsPhone} placeholder="手机号" name={"phone"} value={form.phone}
               onChange={onChanges}
               className={"mb-2 float-left w-60"}
               max={11}
               onBlur={PhoneIsShow}
               prefix={<PhoneOutlined/>}/>
        <Button className={"text-[#222222] h-10 w-24"} onClick={smsCodes}>发送验证码</Button>
        <Input size="large" placeholder="验证码" name={"smsCode"} value={form.smsCode} onChange={onChanges}
               className={"mb-2"}
               prefix={<CodepenOutlined/>}/>
        <Button onClick={Submit}> 注册 </Button>
    </div>);
}

export default RegisterInput;