import { createStore } from "vuex";
import { HomeState } from "./module/HomeState";
import { ProfilState } from "./module/ProfilState";

export const store = createStore({
  modules: {
    HomeState,
    ProfilState,
  },
});
