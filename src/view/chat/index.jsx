import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {message} from "antd";
import io from 'socket.io-client'

const Chat = (props) => {
    const token = useSelector(state => state.userConfigSlice.token)
    const navigate = useNavigate()
    const getChat = () => {
        // const socket = io("http://192.168.229.129:10001/chatWs",{
        //     transports: ['websocket'],
        // })
        // socket.on("connect", () => {
        //     console.log("连接成功")
        // })
        const socket = new WebSocket("ws://192.168.229.129:10001/chatWs")
        socket.addEventListener("open",function(){
            console.log("连接成功")
            socket.send("添加数据,从前端发送过来的")
        })
    }
    useEffect(() => {
        if (!token) {
            message.warning("请登录")
            navigate("/", {replace: true})
        }
        getChat()
    }, [])
    const {charId} = useParams()
    return (<div className={"ml-auto mr-[18%] mb-auto mt-[50px] w-[1100px] h-[800px] bg-amber-400 rounded-2xl flex"}>
        <div className={"w-[30%]"}>左侧</div>
        <div>右侧</div>
    </div>);
};

export default Chat;