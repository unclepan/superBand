import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tiData: {},
  },
  mutations: {
    setTiData(state, v) {
      state.tiData = v;
    },
  },
});
