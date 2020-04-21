/**
 * api接口
 *
 * 修改了以前的对象的方式，以前各方法作为对象属性，问题在打包（build）后，会把整个对象打进去。
 * 现改用es6的模块方式，前端引用方法：
 *      import * as api from '../api.js';
 *      api.signin();
 * 打包时webpack的tree-shaking会只处理被引用的方法；
 *              -- Author by Dio Zhu. on 2017.6.26
 *
 * 添加了axios的替换方案
 *              -- Author by Dio Zhu. on 2017.6.26
 */
// import CONFIG from '../config';
// import _promise from '../utils/promise';
import store from '../store/';
// import router from '../router.js';
import * as utils from './utils.js';
import qs from 'qs';
import trans from '../js/trans.js';
import Vue from 'vue';
// import originJsonp from 'jsonp';
import Axios from 'axios';

let baseURL = '';
function getServerConfig() {
    return new Promise((resolve, reject) => {
        axios.get('./serverConfig.json').then((result) => {
            console.log(result)  // 看打印出来的结果
            let config = result.data;
            baseURL = config.baseURL;
            resolve();
        }).catch((error) => {
            console.log(error);
            reject()
        })
    })
}
async function init() {
    await getServerConfig();
}

init()
if (process.env.NODE_ENV === 'development') Axios.defaults.baseURL = '/virtual'; // 添加虚路径，避免开发时api与proxy冲突。 Author by Dio Zhu. on 2018.10.9
Vue.$http = Vue.prototype.$http = Axios;
// if (typeof Promise === 'undefined') {
//     var Promise = _promise;
// }

/*
 * 封装Axios
 * @param string url 请求的URL地址
 * @param Object params post发送的数据/get的参数
 * @param Object opts 请求的设置项
 *      loading:设置是否现实loading菊花
 *      method：设置get|post提交，默认是get
 *      emulateJSON：设置是否转为表单提交模式
 *      REST:设置{}拼接的方式
 * @return Promise 返回Promise对象
 * */
let request = (url, params = {}, opts = {}) => {
    // console.log(`api.request：`, url, params, opts);
    // 1. 加载菊花
    if (opts && opts.loading) store.commit('OPEN_LOADING'); // 显示菊花

    // 2. 组装请求的param
    let opt = opts || {},
        param = {
            url: url,
            method: opts.method || 'get',
            headers: {
                // 用户认证token
                // 'access-token': '水电费水电费的说法是否'
                // xhrFields: { withCredentials: false }
                sourceid: utils.getSessionStorage('AUTH').get('sourceid')
            },
            // xhrFields: { withCredentials: false },
            // crossDomain: true,
            params: {}
        };
    // 导出使用的

    // if (opt.exportFlag === 'exportFlag') param.headers['exportFlag'] = opt.exportFlag;
    // 导出
    if (opt.exportFlag) {
        param.headers['exportFlag'] = opt.exportFlag;
        // 导出时告诉服务器，本地显示的列有哪些，报表按此列表导出，如没有，不放，服务器导出全量。 add by Dio Zhu. on 2019.6.21
        let cols = [];
        let localTables = utils.getLocalStorage('TABLES').get(opt.exportFlag);
        if (localTables) {
            localTables = JSON.parse(localTables);
            [].forEach.call(localTables, c => (!c.hidden ? cols.push(c.prop) : undefined));
        }
        // 如果有设定隐藏的列（默认全部显示，不做所有字段的传输，后台判段空既是所有）
        if (cols && cols.length && cols.length !== localTables.length) param.headers['exportColumns'] = cols.join(',');
    }
    // 开启表单模式，转换对象、数组为string
    if (opt.emulateJSON) {
        // param.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        param.headers['Content-Type'] = 'application/json';
        // for (let k in params) {
        //     if (
        //         (params.hasOwnProperty(k) && Object.prototype.toString.call(params[k]) === '[object Object]') ||
        //         Object.prototype.toString.call(params[k]) === '[object Array]'
        //     )
        //         params[k] = JSON.stringify(params[k]);
        // }
        // // 转换数据格式
        // param.transformRequest = [
        //     function(data) {
        //         return qs.stringify(data);
        //     }
        // ];
    } else if (opt.REST) {
        param.url = url + params
    }

    else {
        param.paramsSerializer = function (data) {
            return qs.stringify(data);
        }; // 序列化query参数
    }

    // 跨域
    // if (opt.withCredentials) { // 服务端认证写在cookie中。。。跨域要带着cookie时配置此项。 add by Dio Zhu. on 2019.3.19
    param.withCredentials = true; // xhrFields: {withCredentials: true}, crossDomain: true
    // }

    // 3. post请求
    // if (param.method.toLowerCase() === 'post') {
    if (opt.emulateJSON) {
        // post、delete传递数据
        param.data = params;
    } else {
        // get请求
        // param.headers['access-token-bak'] = CONFIG.LAST_TOKEN;
        param.params = Object.assign(param.params, params);
    }
    // mock: 如果没有url说明走了本地proxy，eolinker的mock代理后不能加任何参数，否则他认为第二个？后面的不是参数而是路由，会报错：sorry,this api without the mock data. Author by Dio Zhu. on 2019.5.10
    // if (process.env.NODE_ENV === 'development' && !/^http/.test(url)) {
    if (
        (process.env.NODE_ENV === 'development' && !/^http/.test(url)) ||
        process.env.VUE_APP_CLEAR_REQUEST_PARAMS === '1'
    ) {
        param.data = {};
        param.params = {};
    }

    // 4. 发起请求
    // console.log(`${url}请求的参数：`, param);
    return Vue.$http
        .request(param)
        .then(res => {
            // console.log(`${url}返回的结果：`, res.data);
            // 请求成功，取消loading菊花
            if (opts && opts.loading) store.dispatch('CLOSE_LOADING'); // 隐藏菊花
            if (res && res.data && res.data.code === 200) {
                // 正常返回
                // console.warn('api.success: ', res);
                return Promise.resolve(res.data.data);
            } else if (res && res.data && res.data.status === 1001) {
                // 尚未登录
                // 成功返回，但是token失效，重新拉取token，只拉3次，防止死循环
                let session = utils.getSessionStorage('AUTH');
                // retryNum = session.get('retryNum') || 0;
                session.set('token', ''); // 清token
                // session.set('beforeLoginUrl', encodeURIComponent(router.currentRoute.fullPath)); // 保存用户进入的url
                // if (retryNum < 3) {
                //     retryNum++;
                //     session.set('retryNum', retryNum);
                //     router.push({ name: 'auth' }); // 跳登陆
                // }
                // router.push({
                //     name: 'auth'
                // }); // 跳登陆

                return Promise.reject(res);
            } else {
                /*
               获取页面DOM有没有class为 el-message，
               解决：多次弹窗拉火车
               解决：promise 走到 then后的catch又会捕获到else里的Promise.reject的错误 又执行了一遍  shenwenfei 2019.7.8
                */
                let elMessageBox = window.document.getElementsByClassName('el-message')[0];
                if (elMessageBox) {
                    //已有message不在弹窗message 只reject出返回值
                    return Promise.reject(res);
                } else {
                    // console.log('api.else', res);
                    Vue.prototype.$message.error(trans(res));
                    return Promise.reject(res);
                }
            }
        })
        .catch(e => {
            let elMessageBox = window.document.getElementsByClassName('el-message')[0];
            if (elMessageBox) {
                //已有message不在弹窗message 只reject出返回值
                return Promise.reject(e);
            } else {
                // console.log('api.catch', e);
                Vue.prototype.$message.error(trans(e));
                return Promise.reject(e);
            }
        });
};

/*
 * 封装jsonp
 * @param string url 请求的URL地址
 * @param Object params 请求的参数
 * @param Object opts 请求的设置项
 *  param: 设置回调函数名称
 *  timeout: 设置超时时间
 *  prefix：设置前缀名
 *
 * @return Promise 返回Promise对象
 *          Author By 刘俊俊 2018.9.12
 * */
// let jsonp = (url, params, opts = {}) => {
//     return new Promise((resolve, reject) => {
//         let param = qs.stringify(params);
//         let uri = url + '?' + param;

//         originJsonp(uri, opts, (err, data) => {
//             // console.log('jsonp返回结果:', err, data);
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data.content.address_detail.city);
//             }
//         });
//     });
// };

export const marketordereffectivedetail = (params, opts) =>
    request(baseURL + '/api-market/marketorder/marketordereffectivedetail', params, {
        ...opts,
        loading: true
    });