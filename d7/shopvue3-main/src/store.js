import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    setCount: (state, count) => (state.count = count),
    setToCart: (state, tovar) => state.cart.push(tovar),
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getCart: (state) => {
      return state.cart;
    },
  },
});
export default store;
