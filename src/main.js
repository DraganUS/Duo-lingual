import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// Require dependencies
// var Vue = require('vue');
// var VueCookie = require('vue-cookie');
// // Tell Vue to use the plugin
// Vue.use(VueCookie);

// // From some method in one of your Vue components
// this.$cookie.set('test', 'Hello world!', 1);
// // This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day

// // To get the value of a cookie use
// this.$cookie.get('test');

// // To delete a cookie use
// this.$cookie.delete('test');


import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
 
// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })
 
// this.$http.get(api).then((response) => {
//   console.log(response.data)
// })