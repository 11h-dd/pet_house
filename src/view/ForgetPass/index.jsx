import React, {useState} from 'react';
import {Button, Input, message, Result,  Steps} from "antd";
import service from "../../requests/request";
import {Link} from "react-router-dom";

const ForGetPass = (props) => {
    const [PhoneValue, SetPhoneValue] = useState("")
    const [PhoneCode, SetCode] = useState("")
    const [isShow, SetIsShow] = useState("")
    //进度条进度
    const [current, SetCurrent] = useState(0)
    let [sms, SetSms] = useState();
    const [form, SetForm] = useState({
        //密码
        password: "", //重复密码
        passwords: ""
    })
    const [status, Setstatus] = useState("")
    const PasswordsChange = (e) => {
        SetForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const changes = (e) => {
        SetPhoneValue(e.target.value)
    }
    const changescode = (e) => {
        SetCode(e.target.value)
    }
    const SendSms = async () => {
        if(PhoneValue=== ""){
            message.error("请输入手机号",0.5)
            return
        }
        try {
            const response = await service({
                url: `getSms?phone=${PhoneValue}`,
            })
            SetCode(response.data)
        } catch (err) {
            SetCode(err.data)
            SetSms(err.data)
        }
    }
    const SendRe = () => {
        SetCurrent(current - 1)

    }
    const SendOk = () => {
        if (PhoneValue === "") {
            message.warning("请输入手机号", 0.5)
            return
        }
        if (PhoneCode === "") {
            message.warning("请输入验证码", 0.5)
            return
        }
        if (current === 2) {
            return
        }
        if (PhoneCode !== sms) {
            message.error("验证码不正确", 0.5)
            return
        }
        SetCurrent(current + 1)

    }
    const renderOne = () => {
        return (<> <Input onBlur={isHanlder} status={isShow} placeholder={"请输入手机号"} value={PhoneValue}
                          onChange={changes}
                          className={"mb-1"}
        ></Input>
            <Input placeholder={"验证码"} value={PhoneCode} onChange={changescode}></Input>
            <Button onClick={SendSms}>发送验证码</Button>
            <Button onClick={SendOk}>下一步</Button>

        </>)
    }
    const renderTwo = () => {
        return (<>
            <Input.Password value={form.password} onChange={PasswordsChange} placeholder={"请输入密码"} name={"password"}
                            className={"mb-1"}></Input.Password>
            <Input.Password value={form.passwords} status={status} onChange={PasswordsChange} onBlur={() => {
                if (form.password !== form.passwords) {
                    Setstatus("error")
                    return
                }
                Setstatus("")
            }} placeholder={"请重新输入密码"} name={"passwords"}></Input.Password>
            <Button onClick={SendRe}>上一步</Button>
            <Button onClick={async () => {
                const response = await service({
                    url: "ForPass", method: "PUT", params: {
                        phone: PhoneValue, password: form.password
                    }
                })
                console.log(response)
                SetCurrent(current + 1)
            }}>下一步</Button>
        </>)
    }
    const renderSuccess = () => {
        return <>
            <Result
                title="修改成功"
            />
            <Button className={"absolute top-[11.6rem] right-[9rem]"}>
                <Link to={"/loginAndRegister"}>返回登录</Link>
            </Button>
        </>
    }

    const isHanlder = async () => {
        const response = await service({
            url: `getPhone?phone=${PhoneValue}`
        })
        if (!response.data) {
            SetIsShow("error")
            message.warning("手机号不存在", 0.5)
            return
        }
        SetIsShow("")
    }
    return (<div className={"w-full h-full bg-[#f5f7f9] absolute flex justify-center items-center"}>
        <div className={"w-[50rem] h-[21rem] bg-[#ffffff] text-center  flex justify-center items-center"} id={"forWade"}>

            <div className={"relative top-[-6rem] left-[12rem]"}>
                <Steps
                    current={current}
                    items={[{
                        title: '手机号', description: "验证手机号"
                    }, {
                        title: '设置新密码', description: "修改密码"
                    }, {
                        title: '成功', description: "完成"
                    },]}
                />
            </div>
            <div className={"w-96 relative top-[3.25rem] right-[12rem]"}>
                {current === 0 ? renderOne() : current === 1 ? renderTwo() : renderSuccess()}
            </div>
        </div>
    </div>);
};

export default ForGetPass;