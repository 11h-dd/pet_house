import {WOW} from "wowjs";

export const myWoW = new WOW({
    boxClass: 'wow',//需要执行动画的元素的 class
    animateClass: 'animate__animated', //animation.css 动画的 class
    offset: -200,//距离可视区域多少开始执行动画
    mobile: true,//是否在移动设备上执行动画
    live: false//	异步加载的内容是否有效
})