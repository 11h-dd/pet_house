import axios from "axios";
//单例属性请求
export default class AxiosPet {
    static _instance = undefined;
    static myAxios;

    static constructor(props) {
        AxiosPet.myAxios = axios.create({baseURL: "http://192.168.229.129:10001/"})
        //请求拦截器
        AxiosPet.myAxios.interceptors.request.use(config => {
            const token = ""
            if (toekn) config.headers = `Authorization:${token}`
            return config
        }, err => {
            return err
        })
        AxiosPet.myAxios.interceptors.response.use((response) => {
            return response.data
        })
        // 响应拦截器
    }

    get Instantiation() {
        if (typeof AxiosPet._instance === "undefined") {
            AxiosPet._instance = new AxiosPet
        }
        return AxiosPet._instance
    }

}