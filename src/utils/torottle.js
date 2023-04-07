//节流
//一段时间只执行一次 节流
export function throttle(fn) {
    var flag = true;
    return function() {
        if (flag) {
            setTimeout(() => {
                fn()
                flag = true;
            }, 2000);
        }
        flag = false;
    }
}
