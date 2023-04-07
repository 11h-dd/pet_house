//节流弹框小工具
import {message} from "antd";
import {throttle} from "../torottle";

export const Message = throttle((state, content, timers = 1, fns = () => {
}) => {
    message[state](content, timers, fns)
})
