import { createStore } from "vuex";

const store = createStore({
  state: {
    test: "123",
    user: {
      token: "4567",
      data: {},
    },
  },
  getters: {},
  actions: {},
  mutations: {},
});

export default store;
