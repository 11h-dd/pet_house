import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Input, message} from "antd";
import request from "../../../../requests/request";
import {ChangeUsersUsernames} from "../../../../store/features/UserSlice";

const ChangeUserNames = (props) => {
    const  [usernames,SetUserNames] = useState()
    const username = useSelector(state => state.userConfigSlice.user.username)
    const dispatch = useDispatch()
    const ChangeUsername = async () => {
        try{
            const response = await request({
                url:"user/ChangeUserName",
                method:"PATCH",
                params:{
                    username:usernames
                }
            })
            message.success("修改成功")
            dispatch(ChangeUsersUsernames(response.data.username))
        }catch(err) {
            message.error(err.data)
        }
    }
    return (
        <div className={"mt-[40px] p-[40px]"}>
            <div className={"text-[30px] mb-[20px]"}>
                修改用户名
            </div>
            <div className={"mb-[20px]  "}>
                原:<Input value={username} disabled={true}></Input>
            </div>
            <div>
               新:<Input value={usernames} onChange={(e) => {
                SetUserNames(e.target.value)
            }}/>
            </div>
            <div className={"flex justify-center mt-[30px]"}>
                <Button onClick={ChangeUsername}>修改用户名</Button>
            </div>

        </div>
    );
};

export default ChangeUserNames;