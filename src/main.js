// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import $ from "jquery"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import './style/element-variables.scss'
import md5 from 'js-md5'

Vue.use(ElementUI);

import * as filters from "./lib/filters"
Object.keys(filters).forEach(key=>{
  Vue.filter(key,filters[key]);
});

import axios from 'axios'
// axios.defaults.baseURL = 'http://wx.printhome.com/mall-web';
axios.defaults.baseURL = 'http://192.168.1.121:8080';
axios.defaults.withCredentials=true;
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded';
Vue.prototype.axios=axios;  //只能使用这种方法全局挂载，因为axios没有install方法

Vue.prototype.imgUrl_head="http://img.printhome.com/imgs/";  //只能使用这种方法全局挂载，因为axios没有install方法

Vue.prototype.md5=md5;

import "./style/reset.css" //引入公共css
import "./style/common.css" //引入公共css
import install from "./lib/install" //引入自定义的全局方法并use
Vue.use(install);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
