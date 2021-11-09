import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    refreshtoken: "",
    accountInformation : null
  },
  mutations: {
    setToken(state, token) {
      state.token = token.token;
      state.refreshtoken = token.refreshtoken;
    },
    clearToken(state) {
      state.token = "";
    },
    setAccountInformation(state) {

    }
  },
  actions: {

    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");
      let refreshtoken = localStorage.getItem("refreshtoken");

      if (token) {

        let expirationDate = localStorage.getItem("expirationDate");

        console.log(expirationDate);

        let time = new Date().getTime();

        if (time >= +expirationDate) {
          console.log('token süresi geçmiş')
          dispatch("logout");
        } else {
          commit("setToken", { token, refreshtoken });
          let timerSecond = +expirationDate - time
          dispatch("authExpire", timerSecond);
        }
      } else {
        router.push({name:'login'})
        return false;
      }
    },

    login({ commit, dispatch, getters }, authData) {
      axios
        .post("http://37.75.13.158/v1/user/login", {
          username: authData.email,
          password: authData.password,
        })
        .then((response) => {
          console.log(response.data.data);
          if (response.status == 200) {
            this.commit("setToken", { ...response.data.data });
            localStorage.setItem("token", response.data.data.token);

            localStorage.setItem(
              "refreshtoken",
              response.data.data.refreshtoken
            );

            let time = null;

            if (authData.keepAlive) {
              time = 3600 * 1000;
            } else {
              time = 3600 * 1000;
            }
            // localStorage.setItem("expirationDate", new Date().getTime() + time * 1000)

            localStorage.setItem("expirationDate", new Date().getTime() + time);

            dispatch("authExpire", time);
            router.push({name : "dashboard"})

           // const token =  getters.getToken;
           //
           //  axios.post("http://37.75.13.158/v1/account/info",{
           //    headers: {
           //      'Authorization': 'Bearer ' + token
           //    }
           //  }).then((response) => {
           //    console.log(data);
           //  })


          }
          return "response";
        })
        .catch((error) => {
          // if (error.response.data.status == "error") {
          //   this.error.status = true;
          //   this.error.message = error.response.data.message;
          // }
          return error.response;
        });
    },

    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("expirationDate");
      router.replace({name : 'login'});
    },

    authExpire({ dispatch }, time) {
      setTimeout(() => {
        dispatch("logout");
      }, time);
    },
  },
  getters: {
    isAuthenticated(state) {
      if( state.token !== '' || localStorage.getItem('token') !== '') {
        return true
      } else {
        return false
      }
    },
    getToken(state) {
      return state.token;
    }
  },
});

export default store;
