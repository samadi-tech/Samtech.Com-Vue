export const HomeState = {
  namespaced: true,

  state: () => ({
    website: "Samadi Tech . Com",
    navbar,
  }),
  mutations: {
    setMenuActive(state, payload) {
      state.navbar.menuActive = payload;
    },
    setHiddenMenu(state) {
      !state.navbar.hiddenMenu;
    },
  },
  actions: {
    getMenuActive({ commit }, data) {
      commit("setMenuActive", data);
    },
    getHiddenMenu({ commit }) {
      commit("setHiddenMenu");
    },
  },
};

const navbar = {
  menuActive: "Home",
  hiddenMenu: true,
};
