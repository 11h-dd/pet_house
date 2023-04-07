//节流
//一段时间只执行一次 节流
export function throttle(fn,tim) {
    var flag = true;
    return function(content,timers) {
        if (flag) {
            setTimeout(() => {
                fn(content,timers)
                flag = true;
            }, tim);
        }
        flag = false;
    }
}
