<template>
  <div>
    <!-- <div v-bind:class="{ 'd-xl-flex content-flex': this.$route.meta.front }">
      <Header v-if="!this.$route.meta.front" />
      <HeaderDashboard v-else />
      <transition name="fade" mode="out-in">
        <router-view> </router-view>
      </transition>
    </div> -->
    <div v-bind:class="{ 'd-xl-flex content-flex': this.$route.meta.dashboard }">
        <Header v-if="!this.$route.meta.dashboard" />
      <HeaderDashboard v-else />
      <transition name="fade" mode="out-in">
        <router-view> </router-view>
      </transition>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import HeaderDashboard from "./components/HeaderDashboard";

import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
    HeaderDashboard,
  },
  created() {
    this.$store.dispatch("initAuth");
  },
};
</script>
