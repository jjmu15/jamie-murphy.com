import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import VTooltip from 'v-tooltip';


window.Vue = Vue;
window.axios = axios;

// use vue plugins
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VTooltip);
Vue.directive('tooltip', VTooltip.VTooltip);
Vue.directive('close-popover', VTooltip.VClosePopover);
Vue.component('v-popover', VTooltip.VPopover);

// if token is set, then send with all axios requests for basic auth
// const token = localStorage.getItem('token');
// if (token) {
//     axios.defaults.headers.common['X-API-KEY'] = token
// }
axios.defaults.headers.post['Content-Type'] = 'application/json';
