import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Loading from './components/Loading'



import routes from './routeConfig.js'
import store from './store/store'
import filters from './filters/index.js'


Vue.use(VueRouter);
Vue.use(Loading)

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))



require('./assets/css/base.css');

const router = new VueRouter({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    store.dispatch('LoadingShowTrue')
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    store.dispatch('LoadingShowFalse')
    return response;
}, function (error) {
    return Promise.reject(error);
});



Vue.prototype.$http = axios;

new Vue({
    el: "#app"
    , router
    , store
    , render: h => h(App)
})