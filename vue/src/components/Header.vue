<template>
  <header class="header">
    <div class="top-head d-xl-flex align-items-center">
      <div class="main-logo">
        <router-link to="/" tag="a" class="nav-item">
          <a href="#"><img src="/src/assets/img/vimesoft-logo.svg" alt=""/></a>
        </router-link>
      </div>
      <div
        class="main-menu d-xl-flex align-items-center justify-content-between"
      >
        <div class="menu-left">
          <nav class="nav-head-menu">
            <ul class="d-xl-flex align-items-center">
              <li><a href="#">Ürünler</a></li>
              <router-link :to="{ name: 'paketler' }" tag="li">
                <a>Paketler</a>
              </router-link>
            <router-link tag="li" :to="{name : 'contact'}">
                <a href="">İletişim</a>
            </router-link>
            </ul>
          </nav>
        </div>
        <div class="menu-right">
          <nav class="nav-head-select">
            <ul class="d-xl-flex align-items-center">
              <router-link :to="{ name : 'buyStart'}" tag="li" >
                <a class="btn-buy">Satın Al</a>
              </router-link>
              <router-link :to="{ name : 'register'}" tag="li" >
                <a class="btn-buy">Ücretsiz Dene</a>
              </router-link>
              <router-link to="/giris-yap" tag="li" >
                <a class="btn-login">Giriş Yap</a>
              </router-link>

              <li><img src="/src/assets/img/menu-icon.svg" alt="" /></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="mobile-menu-icon">
        <img src="/src/assets/img/menu-icon.svg" alt="" />
      </div>
      <div class="mobile-menu">
        <div class="mobile-menu-close">
          <img src="/src/assets/img/close.png" alt="" />
        </div>
        <div class="mobile-logo">
          <img src="/src/assets/img/mobile-logo.png" alt="" />
        </div>
        <div class="mobile-navbar">
          <nav>
            <ul class="mobilenav-ul">
              <li class="mobilenav-li"><a href="#">Ürünler</a></li>
              <li class="mobilenav-li"><a href="#">Paketler</a></li>
            <router-link tag="li" class="mobilenav-li" :to="{name : 'contact'}">
                <a href="">İletişim</a>
            </router-link>
            </ul>
          </nav>
        </div>
        <div class="mobile-nav-btns">
          <nav>
            <ul>
              <li><a href="#" class="btn-buy">Satın Al</a></li>
              <router-link :to="{ name : 'register'}" tag="li">
                <a class="btn-buy">Ücretsiz Dene</a>
              </router-link>
              <router-link :to="{ name: 'login' }" tag="li" v-if="this.$store.state.token !=  ''">
                <a class="btn-login">Giriş Yap</a>
              </router-link>
               <router-link :to="{ name: 'dashboard' }" tag="li" v-else>
                <a class="btn-login">Dashboard</a>
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
   data() {
    return {
      authenticated: null,
    };
  },
  methods: {
    logout() {},
  },
  computed: {
    logoutClass() {
      console.log(this.authenticated)
      console.log('adsasda')

      this.authenticated = this.$store.getters.isAuthenticated;
    },
  },
};
</script>
