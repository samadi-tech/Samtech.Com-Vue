import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DasboardView.vue";
import BlankView from "@/views/BlankView.vue";
import {
  HomePage,
  ProfilPage,
  GalleryPage,
  LoginPage,
  AboutPage,
} from "@/pages/";
import { PostDetail } from "@/components";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
      },
      {
        path: "post/:id",
        name: "PostDetail",
        component: PostDetail,
      },
      {
        path: "profil",
        name: "Profil",
        component: ProfilPage,
      },
      {
        path: "gallery",
        name: "Gallery",
        component: GalleryPage,
      },
      {
        path: "about",
        name: "About",
        component: AboutPage,
      },
    ],
  },

  {
    path: "/",
    name: "Blank",
    component: BlankView,
    children: [
      {
        path: "login",
        name: "Login",
        component: LoginPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
