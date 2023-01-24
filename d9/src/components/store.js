import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState()],
  state: {
    count: 0,
    darkmode: false,
    user: null,
  },
  mutations: {
    setCount: (state, count) => (state.count = count),
    setMode: (state) => (state.darkmode = !state.darkmode),
    setUser: (state, user) => (state.user = user),
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getMode: (state) => {
      return state.darkmode;
    },
    getUser: (state) => {
      return state.user;
    },
  },
});
export default store;
