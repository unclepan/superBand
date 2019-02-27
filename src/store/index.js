import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tiData: {},
    xuanDeDaAn: [],
  },
  mutations: {
    setTiData(state, v) {
      state.tiData = v;
    },
    setXuanDeDaAn(state, v) {
      state.xuanDeDaAn = v;
    },
  },
});
