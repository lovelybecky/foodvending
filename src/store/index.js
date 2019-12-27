import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	user:null,
	account:null
  },
  mutations: {
	storeUser:(state,info)=>{
		state.user=info
	},
	storeAccount:(state,info)=>{
		state.account=info
	}
  },
  actions: {
  },
  modules: {
  }
})
