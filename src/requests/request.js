import axios from "axios"
import {store} from "../store";

const service = axios.create({
    baseURL: "http://192.168.229.129:10001/"
})

// 请求拦截
service.interceptors.request.use(config => {
    const state = store.getState()
    if (state.userConfigSlice.token) config.headers.Authorization = state.userConfigSlice.token
    return config;
})

// 响应拦截
service.interceptors.response.use(res => {

    if (res.data.status === 200) {
        return res.data
    }
    return Promise.reject(res.data)
})
export default service
