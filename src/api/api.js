import Vue from 'vue';
let that = Vue.prototype;

let baseURL = Vue.prototype.baseURL;
// console.log(that.$axios.defaults.baseURL,'1111');
console.log(Vue.prototype.baseURL,'Vue.prototype.baseURL1111')
console.log(baseURL,'baseURL1111')


//rest
const rest = (data) => {
  let parmas = '';
  console.log(data, 'data');
  for (const key in data) {
    // if (data.prototype.hasOwnProperty(key)) {
    parmas = parmas + '/' + data[key];
    // }
  }
  console.log(parmas, 'parmas');
  return parmas;
};
//今日警情--列表
export const InitAlarmService = (params) => {
  let data = rest(params);
  let url = baseURL + "/alarm/InitAlarmService" + data;
  return that.$axios.post(url);
};

//根据机构ID获取该机构所有消防车
export const findCarByJgid = (params) => {
  let data = rest(params);
  let url = baseURL + "/fireCar/findCarByJgid" + data;
  return that.$axios.post(url);
};

//今日警情--补发报警短信
export const callAlarmSms = (params) => {
  let data = rest(params);
  let url = 'http://121.36.199.22:8080/DispatchService' + "/alarm/callAlarmSms" + data;
  return that.$axios.post(url);
};

export const InitLogin = () => {
  let url = "/enterprise/Yhxx/login";
  let data = {
    yhm: 'mhjy',
    mm: '123456'
  };
  return that.$axios.post(url, data);
};

export const CzcsSearch = (args, token) => {
  let url = "/enterprise/bwwlapi/Dlxx/findByLabelForOutfire";
  console.log(
    token
  )
  return that.$axios.get(url, {
    params: {
      data: args,
    },
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
};
