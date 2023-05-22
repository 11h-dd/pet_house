import React, {useRef} from 'react';
import {Avatar, Button, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import request from "../../../../requests/request";
import ChangePhone from "../XGphone";
import {ChangePhoto} from "../../../../store/features/UserSlice";

const BDEmail = (props) => {
    const username = useSelector(state => state.userConfigSlice.user.username)
    const photo = useSelector(state => state.userConfigSlice.user.photo)
    const dispatch = useDispatch()
    const files = useRef()
    const SubmitImgs =async  () => {
        const file = files.current.files[0]
        let formData = new FormData()
        formData.append("file", file)
        const response = await request({
            url:"user/ChangePhoto",
            method:"POST",
            data:formData
        })
        message.success("修改成功")
        dispatch(ChangePhoto(response.data.avatar))
    }
    return (<div className={"mt-[40px] p-[40px]"}>
       <ul className={" flex justify-center flex-wrap items-center"}>
           <li className={" w-[200px] h-[200px] rounded-full overflow-hidden"}>{photo ?
               <img className={"h-full w-full object-cover"} src={photo} alt=""/> : <Avatar size="large">{username.slice(0, 1)}</Avatar>}
           </li>
           <li>
               <input ref={files}  type="file"/>
           </li>
           <li>
               <Button onClick={SubmitImgs}>
               上传
           </Button></li>
       </ul>
    </div>);
};

export default BDEmail;