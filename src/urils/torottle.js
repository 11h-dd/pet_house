//节流
//一段时间只执行一次 节流
export function throttle(fn) {
    var flag = true;
    return function(content,timers,fns) {
        if (flag) {
            setTimeout(() => {
                fn(content,timers,fns)
                flag = true;
            }, 2000);
        }
        flag = false;
    }
}
