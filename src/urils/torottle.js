//节流
//一段时间只执行一次 节流
export function throttle(fn, content, timers, fns) {
    var timer = null;
    return function () {
        if (timer) return
        timer = setTimeout( ()=> {
            // fn.apply(context,args);
            fn(content, timers, fns)
            timer = null;
        }, 2000)
    }
}