import { createStore } from "vuex";

const store = createStore({
  state: {
    test: "123",
    user: {
      token: null,
      data: {},
    },
  },
  getters: {},
  actions: {},
  mutations: {},
});

export default store;
