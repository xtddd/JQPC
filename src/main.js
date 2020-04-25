import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from 'axios';
import './axios/filter.js';
import ele from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;
Vue.use(ele);
function getServerConfig() {
  return new Promise((resolve, reject) => {
    axios.get('./serverConfig.json').then((result) => {
      console.log(result)  // 看打印出来的结果
      let config = result.data;
      // for (let key in result) {
<<<<<<< Updated upstream
        Vue.prototype.baseURL = config.baseURL;
        // axios.defaults.baseURL = config.baseURL;
=======
        axios.defaults.baseURL = config.baseURL;
>>>>>>> Stashed changes
      // }
      // console.log(axios.defaults.baseURL,'axios.defaults.baseURL00000')  // 验证是否已经把属性挂在了Vue上
      console.log(Vue.prototype.baseURL,'Vue.prototype.baseURL00000')
      resolve();
    }).catch((error) => {
      console.log(error);
      reject()
    })
  })
}

async function init() {
  await getServerConfig();
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

init()
