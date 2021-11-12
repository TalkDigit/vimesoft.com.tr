<template>
  <div class="meeting_wrapper wrapper">
    <div class="container">
      <div class="contact-box">
        <div class="row g-0 align-items-center">
          <div class="col-xl-12" v-if="verificationStatus">
            <div class="contact-title pb-xl-5 pb-4">
              <h1 class="meeting-h1 verify"><span>Hoşgeldin</span></h1>
              <p class="meeting-p-text d-flex align-items-center">
                E-posta doğrulaması başarıyla tamamlandı. Giriş yaparak devam edebilirsin.
              </p>
            </div>
            <div class="meeting-form">
              <div class="meeting-box">
                <router-link :to="{name : 'login'}">
                  <a  class=" btn-buy-xl2 meeting-btn">Giriş Yap</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-xl-12" v-else>
            <div class="contact-title pb-xl-5 pb-4">
              <h1 class="meeting-h1 verify"><span>Hata</span></h1>
              <p class="meeting-p-text d-flex align-items-center">
                Doğrulama kodu hatalı.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      code : this.$route.query.code,
      verificationStatus : null
    }
  },
  beforeMount() {
    axios
        .get("/account/user/verify/"+this.code)
    .then((response) => {
      console.log(response);
      if(response.status) {
        this.verificationStatus = true
      }
    }).catch((error) => {
      if(error.response.status === 404) {
        this.verificationStatus = false
      }
    })
  }
}
</script>