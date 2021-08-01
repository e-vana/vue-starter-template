import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    SET_LOADING: (state) => {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
    setLoading: (context) => {
      context.commit('SET_LOADING')
    }
  },
  getters: {
    getLoading: (state) => {
      return state.isLoading;
    }
  }
})
