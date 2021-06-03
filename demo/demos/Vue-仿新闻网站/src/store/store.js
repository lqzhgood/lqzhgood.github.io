import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    headShow: true,
    loading: false,
    footerShow: true
}

const getters = {
    headShow: state => state.headShow,
    loading: state => state.loading,
    footerShow: state => state.footerShow
}

const mutations = {
    HeadShowTrue(state) {
        state.headShow = true;
    }, HeadShowFalse(state) {
        state.headShow = false;
    }, FooterShowTrue(state) {
        state.footerShow = true;
    }, FooterShowFalse(state) {
        state.footerShow = false;
    }, LoadingShowTrue(state){
        state.loading = true;
    }, LoadingShowFalse(state){
        state.loading = false;
    }
}

const actions = {
    HeadShowTrue:({commit,state})=>{commit('HeadShowTrue')},
    HeadShowFalse:({commit,state})=>{commit('HeadShowFalse')},
    FooterShowTrue:({commit,state})=>{commit('FooterShowTrue')},
    FooterShowFalse:({commit,state})=>{commit('FooterShowFalse')},
    LoadingShowTrue:({commit,state})=>{commit('LoadingShowTrue')},
    LoadingShowFalse:({commit,state})=>{commit('LoadingShowFalse')},
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
