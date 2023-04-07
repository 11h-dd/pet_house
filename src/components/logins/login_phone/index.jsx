import React, {useState} from 'react';
import {
    Button, Form, Input, Row, Col,message
} from 'antd';
import "./index.module.css"
import service from "../../../requests/request";
import {SetToken} from "../../../store/features/UserSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
// import service from "../../../requests/request";

const LoginPhone = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const [isClick, SetIsClick] = useState({
        isClick: true
    })
    //发送验证码
    const sendSms = async (e) => {
        if (isClick.isClick) {
            const {user_phone, smsCode} = form.getFieldValue()
            if (!user_phone) {
                message.warning("手机号没有填写", 0.5)
                return
            }
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
                    url: `getSms?phone=${user_phone}`
                })
                console.log(response)
                smsCode.value = response.data
            } catch (err) {
                console.log(err)
            }
        }


    }
    //登录
    const onFinish =async  (values) => {
      try {
          const response = await service({
              url:"PhoneForLogin",
              method:"POST",
              data:{
                  phone:values.user_phone,
                  smsCode:values.smsCode
              }
          })
          dispatch(SetToken(response.data.token))
          message.success("登录成功", 0.5, () => {
              navigate("/", {replace: true})
          })
      }catch(error){
          message.error(error.msg)
      }
    };
    return (<Form
        name="normal_login"
        className="login-form form"
        form={form}
        initialValues={{
            user_phone: "", smsCode: ""
        }}
        onFinish={onFinish}
    >
        <Form.Item
            validateTrigger="onBlur"
            name="user_phone"
            rules={[{
                required: true, message: '请输入手机号',
            }, {
                pattern: /^1[3457869]\d{9}$/, message: "请输入11位手机号",
            }]}
        >
            <Input placeholder="手机号" className="h-12"
            />
        </Form.Item>
        <Form.Item
            name="smsCode"
            validateTrigger="onBlur"
            rules={[{
                required: true, message: '请输入验证码',
            }, {
                min: 5, message: "验证码长小于度六位"
            }, {
                max: 6, message: "验证码长度大于六位"
            }]}
        >
            <Input

                placeholder="验证码"
                className="h-12 w-[18rem]"
            />
        </Form.Item>
        <Form.Item className={"absolute right-0 bottom-[9.5rem] "}
        >
            <Row>
                <Col span={20}>
                    <Button className={"text-[#222222] h-12 w-24"} onClick={sendSms}
                    >发送验证码</Button>
                </Col>
            </Row>
        </Form.Item>
        <Form.Item className={"float-left pr-2 text-orange-800"}>
            验证即登录，未注册将自动创建百度帐号
        </Form.Item>

        <Form.Item className={"flex justify-center w-full"}>
            <Button
                type="primary" ghost htmlType="submit" className="login-form-button"
            >
                登录
            </Button>
        </Form.Item>
    </Form>);
};

export default LoginPhone;