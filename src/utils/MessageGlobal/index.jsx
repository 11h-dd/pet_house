//节流弹框小工具
import {message} from "antd";
import {throttle} from "../torottle";

export const Message = throttle((state, content) => {
    message[state](content)
},1000)
