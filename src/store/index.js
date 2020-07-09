import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  mutations,
  actions,
  getters,
  state: {
    userLife: 5,
    currentLevel: null,
    currentChallenge: null,
    levelId: 1,
    levels: [],
  },
});
