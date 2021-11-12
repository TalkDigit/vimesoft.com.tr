<template>
    <div>

        <div v-bind:class="{ 'd-xl-flex content-flex': this.$route.meta.dashboard }">
            <Header v-if="!this.$route.meta.dashboard"/>
            <HeaderDashboard v-else/>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <Trial></Trial>
        </div>
        <Footer/>
    </div>
</template>
<script>

import Header from "./components/Header";
import HeaderDashboard from "./components/HeaderDashboard";
import Footer from "./components/Footer";

import Trial from "./components/Trial";

export default {
    components: {
        Header,
        Footer,
        HeaderDashboard,
        Trial
    },
    created() {
        this.$store.dispatch("initAuth");
    },
    computed: {
        logo() {
            return 'http://localhost:8080/src/assets/img/vimesoft-logo.svg';
        }
    },

};
</script>
