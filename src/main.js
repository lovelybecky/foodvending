import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueRouter);
Vue.use(new VueSocketIO({
	debug:true,
	connection:'http://localhost:4000',
	vuex:{
	}
}))

const _axios = axios.create({
  baseURL:'http://localhost:4000'
});
Vue.prototype.$http = _axios;

/*var url="http://localhost:3000"
axios.get(url+'/product')
  .then(function (response) {
    console.log(response);
	console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });*/

const router = new VueRouter({
	routes:Routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
