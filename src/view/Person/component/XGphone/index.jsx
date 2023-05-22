import React, {useEffect, useState} from 'react';
import {Button, Input, message, Modal} from "antd";
import request from "../../../../requests/request";

const ChangePhone = (props) => {
    const [Phone, SetPhone] = useState(0)
    const [open, setOpen] = useState(false);
    const [newPhone,SetNewPhone] = useState()
    const [confirmLoading, setConfirmLoading] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const cacen = () => {
        setOpen(false);
    }
    const hideModal = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setOpen(false);
            request({
                url:"/user/ChangePhones",
                method:"PATCH",
                params:{
                    phone:newPhone
                }
            }).then(res => {
                message.success(res.data)
            })
        }, 1000);
    };
    const getPhone = async () => {
        const response = await request({
            url: "user/GetPhonePersonal",
        })
        SetPhone(response.data)
    }
    useEffect(() => {
        getPhone()
    }, [])
    const PhonesChange = () => {
        var phone2= "" + Phone;
        var ary = phone2.split("");
        ary.splice(3,4,"****");
         phone2=ary.join("");
        return phone2

    }
    return (<div className={"mt-[50px] px-[20px] "}>
        <div className={"w-[300px]"}>
            <div className={"text-[14px] mb-[10px]"}>已有手机号</div>
            <div className={"text-[30px] mb-[5px]"}>
                {PhonesChange()}
            </div>
            <Button onClick={showModal}>更换手机号</Button>
            <Modal
                title="修改密码"
                open={open}
                onOk={hideModal}
                onCancel={cacen}
                okText="确认"
                okType={"default"}
                cancelText="取消"
                confirmLoading={confirmLoading}
            >
                <div className={"mb-[10px]"}>
                    <Input placeholder={"请输入新的手机号"} maxLength={11} onChange={(e) => {
                        SetNewPhone(e.target.value)
                    }} value={newPhone} confirmLoading={true}></Input>

                </div>
                <div className={"flex"}>
                    <Input placeholder={"验证码"} value={"26581"}/>
                    <Button>发送验证码</Button>
                </div>
            </Modal>
        </div>
    </div>);
};
export default ChangePhone;