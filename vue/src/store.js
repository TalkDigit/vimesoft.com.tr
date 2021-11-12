import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {router} from "./router";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null,
        refreshtoken: "",
        accountInformation: null,
        loginResponse: null,
        packages: null,
        selectedPackage: null,
        selectedRenewable: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token.token;
            state.refreshtoken = token.refreshtoken;
        },
        setUserInfo(state, info) {
            state.accountInformation = info;
        },
        clearToken(state) {
            state.token = "";
        },
        setAccountInformation(state) {
            state.loginResponse = state
        },
        setPackages(state, packages) {
            state.packages = packages;
        },
        setSelectedPackage(state, selectedPackage) {
            state.selectedPackage = selectedPackage;
        },
        setSelectedRenewable(state, selectedRenewable) {
            state.selectedRenewable = selectedRenewable;
        },
        setSelectedAdditional(state, selectedAdditional) {
            state.selectedAdditional = selectedAdditional;
        }

    },
    actions: {

        getPackages({commit, dispatch, getters}) {
            axios
                .get('/package/list')
                .then(response => {
                    commit('setPackages', response.data.data.items);
                })
        },

        selectFirstPackage({commit}, selectedPackage) {
            commit('setSelectedPackage', selectedPackage);
        },
        setSelectedRenewable({commit}, selectedRenewable) {
            commit('setSelectedRenewable', selectedRenewable)
        },
        setSelectedAdditional({commit}, selectedAdditional) {
            commit('setSelectedAdditional', selectedAdditional)
        },

        initAuth({commit, dispatch}) {
            let token = localStorage.getItem("token");
            let refreshtoken = localStorage.getItem("refreshtoken");
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (token) {

                let expirationDate = localStorage.getItem("expirationDate");


                let time = new Date().getTime();

                if (time >= +expirationDate) {
                    dispatch("logout");
                } else {
                    commit("setToken", {token, refreshtoken});
                    commit("setUserInfo", userInfo);
                    let timerSecond = +expirationDate - time
                    dispatch("authExpire", timerSecond);
                }
            } else {
                return false;
            }
        },

        login({commit, dispatch, getters}, authData) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/user/login", {
                        username: authData.email,
                        password: authData.password,
                    })
                    .then((response) => {
                        if (response.status == 200) {
                            this.commit("setToken", {...response.data.data});
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

                            axios.get("/account/info", {
                                headers: {
                                    "Authorization": "Bearer " + response.data.data.token,
                                },
                            }).then((response) => {
                                let userInfo = [];
                                userInfo.push(response.data.data)
                                this.commit("setUserInfo", userInfo)
                                localStorage.setItem('userInfo', JSON.stringify(userInfo))
                            })

                        }
                        resolve(response)

                    })
                    .catch((error) => {
                        reject(error);
                    });
            })
        },

        logout({commit}) {
            commit("clearToken");
            localStorage.removeItem("token");
            localStorage.removeItem("refreshtoken");
            localStorage.removeItem("expirationDate");
            router.replace({name: 'login'});
        },

        authExpire({dispatch}, time) {
            setTimeout(() => {
                dispatch("logout");
            }, time);
        },
    },
    getters: {
        isAuthenticated(state) {
            if (state.token !== '' || localStorage.getItem('token') !== null) {
                return true
            } else {
                return false
            }
        },
        getToken(state) {
            return state.token;
        },
        getLoginResponse(state) {
            return state.loginResponse
        },
        getPackages(state) {
            return state.packages
        },
        getRenewOptions(state) {
            return state.packages.filter(function (item) {
                return item.id == state.selectedPackage;
            });
        },
    },
});

export default store;
