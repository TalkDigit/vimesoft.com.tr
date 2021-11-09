import Vue from "vue";
import VueRouter from "vue-router";
import Header from "./components/Header";
import HeaderDashboard from "./components/HeaderDashboard";
import Homepage from "./pages/Homepage";
import Packages from "./pages/front/Packages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

//Dashboard
import Dashboard from "./pages/dashboard/Dashboard";
//Dashboard

import store from "./store";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      //Anasayfa
      path: "",
      component: Homepage,
      name: "anasayfa",
      meta: {
        dashboard: false,
      },

    },
    {
      //Paketler
      path: "/paketler",
      component: Packages,
      name: "paketler",
      meta: {
        dashboard: false,
      },
    },
    {
      //Kayıt Ol
      path: "/kayit-ol",
      component: Register,
      meta: {
        dashboard: false,
      },
      name: "register",
    },
    {
      //Giriş Yap
      path: "/giris-yap",
        component: Login,
        name: "login",
        meta: {
          dashboard: false,
        },
      },
    // {
    //   path: "/verification/:code",
    //     component: Verification,
    //     name: "verification",
    //     meta: {
    //       dashboard: false,
    //     },
    //   },




      //DASHBOARD GRUBU
      {
      path: '/dashboard',
      component: Dashboard,
        meta: {
        dashboard: true,
      }, name : "dashboard",
        beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          console.log(store.getters.isAuthenticated)
          next();
        } else {
          next({ name: "login" });
        }
      },
      // children: [
      //   {
      //
      //     path: 'profile',
      //     component: Home
      //   },
      //   {
      //
      //     path: 'posts',
      //     component: Home
      //   }
      // ]
    }
  ],
  mode: "history",
});
