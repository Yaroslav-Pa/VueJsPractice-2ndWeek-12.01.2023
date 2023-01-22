import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    count: 0,
    darkmode: false,
  },
  mutations: {
    setCount: (state, count) => (state.count = count),
    setMode: (state) => (state.darkmode = !state.darkmode),
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getMode: (state) => {
      return state.darkmode;
    },
  },
});
export default store;
