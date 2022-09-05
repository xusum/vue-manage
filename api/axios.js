import axios from 'axios'
import { options } from 'less'
import config from '../config'

const baseURL = process.env.NODE_EAV === 'develoment' ? config.baseURL.dev : config.baseURL.pro

class HttpRequest {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseURL,
            header: {

            }
        }
        return config
    }
    interceptors(instance) {
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(){
        const instance = axios.create()
        // eslint-disable-next-line no-import-assign
        options = {
            ...this.getInsideConfig(),
            ...options
        }
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseURL)