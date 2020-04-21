import Vue from 'vue';
let that = Vue.prototype;

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
//今日警情
export const InitAlarmService = (params) => {
  let data = rest(params);
  let url = "/alarm/InitAlarmService" + data;
  return that.$axios.post(url);
};