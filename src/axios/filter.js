import axios from 'axios'
// import VueAxios from 'vue-axios'
import Vue from 'vue'
import ElementUI, { Loading } from 'element-ui';
//import Qs from 'qs'

let loading //定义loading变量
function startLoading() { //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '请稍等...',
        background: 'rgba(0, 0, 0, 0.2)'
    })
}

function endLoading() { //使用Element loading-close 方法
    loading.close()
}

let needLoadingRequestCount = 0

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}


//axios配置和处理
// Vue.use(VueAxios, axios);
// axios.defaults.baseURL = '/api';//项目的的基础url  enterprise   api
// axios.defaults.baseURL = Vue.prototype.baseURL; //项目的的基础url
// axios.defaults.headers.common['Authorization'] = ""; //请求token信息配置
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //请求type设置
// axios.defaults.headers.put['Content-Type'] = 'application/json'; //请求type设置
axios.defaults.timeout = 30000; //在超时前，所有请求都会等待30秒
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    /* let newdata = Qs.stringify(config.data);
     config.data = newdata;*/
    // 在发送请求之前处理
    // config.headers.common['Authorization'] = localStorage.getItem('Authorization'); //判断token在前台session中是否存在
    showFullScreenLoading();
    return config;
}, function (error) {
    // 对请求错误做处理
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据处理
    /* var jsonresultTemp = JSON.parse(response.data.jsonresult);
     var jsonresult = jsonresultTemp.data[0].data;
     response.data = jsonresult;*/
    tryHideFullScreenLoading();
    if (response && (response.code == 200)) {
        if (response.data.exceptionMes) {
            ElementUI.MessageBox({
                type: 'info',
                title: response.data.exceptionMes,
                message: response.data.debugMes
            });
        }
        return response.data;

    }
    return response;
}, function (error) {
    tryHideFullScreenLoading();
    // 对响应错误处理
    if (error.response && error.response.code == 401) {
        location.href = error.response.data.info.url

        //去登陆 执行login
        //localStorage.removeItem('Authorization');
        //window.location.reload();
    }
    // if (error.response && error.response.code == 500) {
    //     ElementUI.MessageBox({
    //         title: '提示',
    //         message: '服务器未启动或正在重启，请稍后再试！'
    //     });
    // }
    return Promise.reject(error);
});
console.log(axios.defaults.baseURL, '11111');
Vue.prototype.$axios = axios; //定义调用方式
