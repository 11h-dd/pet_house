import React from 'react';
import {
    Button, Checkbox, Col, Form, Input, Row,
} from 'antd';
import CharAddress from "./charAddress";
import MapsGd from "../MapsGD";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        }, sm: {
            span: 8,
        },
    }, wrapperCol: {
        xs: {
            span: 24,
        }, sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24, offset: 0,
        }, sm: {
            span: 16, offset: 8,
        },
    },
};
const CharRegister = (props) => {
    const [form] = Form.useForm();
    // console.log(form.getFieldValue,"form")
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (<Form
        {...formItemLayout}
        form={form}
        name="register"
        size={"large"}
        className={"ml-[180px]"}
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86',
        }}
        style={{
            maxWidth: 600,
        }}
        scrollToFirstError
    >
        <Form.Item
            name="charName"
            label="店名"
            rules={[{
                required: true, message: '请输入店名',
            },]}
        >
            <Input/>
        </Form.Item>


        <Form.Item
            name="charUsername"
            label="商家名字"
            rules={[{
                required: true, message: '请输入商家名字',
            },]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            name="charPhone"
            label="联系方式"
            rules={[{
                required: true, message: '请输入联系方式',
            },]}
        >
            <Input/>
        </Form.Item>
        {/*三级联动组件*/}
        <CharAddress/>
        {/*地图组件*/}
        <Form.Item>
            <div className={"w-[800px] ml-[50px] "}>
                <MapsGd></MapsGd>
            </div>
        </Form.Item>

        <Form.Item
            name="charInfo"
            label="店家自我介绍"
            rules={[{
                required: true, message: '请输入自我介绍',
            },]}
        >
            <Input.TextArea showCount maxLength={100}/>
        </Form.Item>


        <Form.Item label="验证码">
            <Row gutter={8}>
                <Col span={12}>
                    <Form.Item
                        name="captcha"
                        noStyle
                        rules={[{
                            required: true, message: '请输入验证码',
                        },]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Button>Get captcha</Button>
                </Col>
            </Row>
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[{
                validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('先选中此按钮')),
            },]}
            {...tailFormItemLayout}
        >
            <Checkbox>
                I have read the agreement
            </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" ghost={true} htmlType="submit">
                注册成为商家
            </Button>
        </Form.Item>
    </Form>);
};

export default CharRegister;