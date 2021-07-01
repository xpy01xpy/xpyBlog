/*
 * @Author: xpy
 * @Description: global
 * @Date: 2021-07-01 10:22:08
 * @LastEditTime: 2021-07-01 19:10:48
 */
import getOrders from '../request/api';

const token =
  'eyJiYXNlQ3BJZCI6MjMyLCJiYXNlRGF0YVVybCI6ImpkYmM6bXlzcWw6Ly9ybS1icDE1azJ5ZDc1bTRxZDVpeTJvLm15c3FsLnJkcy5hbGl5dW5jcy5jb206MzMwNi9lbGFzY2xvdWRfbGluZT9zZXJ2ZXJUaW1lem9uZT1Bc2lhL1NoYW5naGFpJnVzZU9sZEFsaWFzTWV0YWRhdGFCZWhhdmlvcj10cnVlJnplcm9EYXRlVGltZUJlaGF2aW9yPWNvbnZlcnRUb051bGwiLCJiYXNlRGF0YU5hbWUiOiJlbGFzY2xvdWRfbGluZSIsImJhc2VEYXRhVXNlck5hbWUiOiJ5emhfbGluZSIsImJhc2VEYXRhUGFzc3dvcmQiOiJmZWdld3FmZXczIiwiZmxhZyI6MSwiYWxnIjoiSFM1MTIifQ.eyJleHAiOjE2MjU3MTQzNDIsImp0aSI6IjMxIn0.Glxf7T88IAQndGDG_fTriph30huUcWuOpZ3d6Pqa-F-PH-3KUPJxrG1H3DRJi-5wibLHJ6vlgI7QFkhV_s7ztw';
document.cookie = 'token' + '=' + String(token);

function setCookie(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  exp.setTime(exp.getTime() + strsec);
  document.cookie =
    name + '=' + escape(value) + ';expires=' + exp.toGMTString();
}
function getsec(str) {
  var str1 = str.substring(1, str.length) * 1;
  var str2 = str.substring(0, 1);
  if (str2 == 's') return str1 * 1000;
  else if (str2 == 'h') return str1 * 60 * 60 * 1000;
  else if (str2 == 'd') return str1 * 24 * 60 * 60 * 1000;
}
setCookie('tokentoken', token, 'd3');

export default {
  namespace: 'global',

  state: {
    name: 'is-my',
  },

  effects: {
    *query({ payload, cb }, { call }) {
      const res = yield call(getOrders, payload);
      if (res.code == 1000) cb(res.rst);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
