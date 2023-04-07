//节流弹框小工具
import {message} from "antd";
import {throttle} from "../torottle";

export const Message = (state, content, timers = 1, fn = () => {
}) => {
    throttle(message[state](content,timers,fn))()
}
