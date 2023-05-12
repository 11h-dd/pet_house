import React, {useState} from 'react';
import {PlusOutlined, UploadOutlined} from '@ant-design/icons';
import {
    Button, Checkbox, Col, Form, Input, message, Row, Upload
} from 'antd';
import CharAddress from "./charAddress";
import MapsGd from "../MapsGD";
import request from "../../requests/request";

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
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
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [form] = Form.useForm();
    const propss = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        }, beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        }, fileList, maxCount: 1
    };
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const avatarFile = values.charAvatar[0].originFileObj// file
        const charAddress = values.charAddress.join("") + values.charAddressText
        let formData = new FormData()
        formData.append("file", avatarFile)
        formData.append("char_info",values.charInfo)
        formData.append("char_shop_name",values.charName)
        formData.append("char_user_name",values.charUsername)
        formData.append("char_phone",values.charPhone)
        formData.append("char_address",charAddress)
        try {
            const response = await request({
                url: "user/Char/join ", method: "post", data: formData
            })
            console.log(response)
            message.success("创建成功")

        } catch (err) {
            console.log(err)
        }
        form.resetFields()
        // values.charPhone = ""
        // values.charName = ""
        // values.charInfo = ""
        // values.charUsername = ""
        // values.charAddressText  = ""
        // values.charAddress= []
        // values.charAddress = []
        // values.agreement = false
    };
    return (<Form
        {...formItemLayout}
        form={form}
        name="register"
        size={"large"}
        className={"ml-[180px]"}
        onFinish={onFinish}
        initialValues={{
            captcha:63461
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
        </Form.Item
        >
        <Form.Item
            rules={[{
                required: true, message: '请防止图片',
            }]}

            name="charAvatar" label="店头像" valuePropName="fileList" getValueFromEvent={normFile}
        >
            <Upload {...propss}>
                <Button icon={<UploadOutlined/>}>Upload</Button>
                {/*<div>*/}
                {/*    <PlusOutlined/>*/}
                {/*    <div style={{marginTop: 8}}>Upload</div>*/}
                {/*</div>*/}
            </Upload>
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
        <Form.Item
            name="charAddressText"
            label="具体地址"
            rules={[{
                required: true, message: '请输入具体地址',
            },]}
        >
            <Input/>
            {/*<div className={"w-[800px] ml-[-200px] mt-[40px] rounded-2xl overflow-hidden "}>*/}
            {/*    <MapsGd ></MapsGd>*/}
            {/*</div>*/}
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
                            required: true, message: '请输入验证码'
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