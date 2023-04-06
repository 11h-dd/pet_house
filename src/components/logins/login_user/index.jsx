import React from 'react';
import "./index.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import {Link} from "react-router-dom";
const LoginUser = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <Form
            name="normal_login"
            className="login-form form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名或手机号',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名手机号" className="h-12"

                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码',
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                    label="Password"
                    className="h-12"
                />
            </Form.Item>
            <Form.Item className={"float-right pr-2"}>
                <Link className="login-form-forgot text-orange-800" href="">
                    忘记密码?
                </Link>
            </Form.Item>

            <Form.Item className={"flex justify-center w-full"}>
                <Button
                    type="primary" ghost  htmlType="submit"  className="login-form-button  " >
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginUser;