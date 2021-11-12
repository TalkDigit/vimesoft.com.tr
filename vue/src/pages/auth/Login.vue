<template>
  <div class="register-wrapper wrapper">
    <div class="container">
      <div class="register-box">
        <div class="row g-0">
          <div class="col-xl-6 col-12 register-bg">
            <div class="register-left">
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/quick.svg" alt="" />
                </div>
                <div class="register-text">
                  İhtiyacınıza <br />Uygun Paketler
                </div>
              </div>
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/outline.svg" alt="" />
                </div>
                <div class="register-text">
                  Sınırsız Konferans Oluşturma
                </div>
              </div>
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/multiscreen.svg" alt="" />
                </div>
                <div class="register-text">
                  Mobil veya Web Ortamdan Bağlantı
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-12">
            <div class="register-right">
              <div class="contact-title">
                <div class="contact-h1">
                  <h1>Giriş Yap</h1>
                  <div class="login">
                    <router-link :to="{name : 'register'}">
                      <a>Kayıt Ol</a>
                    </router-link>
                  </div>
                </div>
                <p>
                  Tekrardan hoşgeldin!
                </p>
              </div>
              <div class="contact-form">
                <transition name="fade">
                  <div
                    class="alert alert-warning mb-3"
                    role="alert"
                    v-if="error.status"
                  >
                    {{ error.message }}
                  </div>
                  <div
                    class="alert alert-success mb-3"
                    role="alert"
                    v-if="error.status == false"
                  >
                    {{ error.message }}
                  </div>
                </transition>
                <form @submit.prevent="onSubmit">
                  <div class="contact-input-box">
                    <input
                      type="email"
                      v-model="$v.user.email.$model"
                       :class="{
                        'is-invalid': $v.user.email.$error,
                      }"
                      class="form-input"
                      id="email"
                      name="email"
                      autocomplete="off"
                      required="required"

                    />

                    <label for="email">E-posta Adresiniz</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="contact-input-box">
                    <input
                      v-model="user.password"
                      type="password"
                      class="form-input"
                      id="sifren"
                      name="sifren"
                      required="required"
                      autocomplete="off"
                    />
                    <label for="sifren">Şifreniz</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div
                    class="contact-box-flex d-xl-flex align-items-center justify-content-between"
                  >
                    <div class="contact-check-box d-flex">
                      <input
                        type="checkbox"
                        class="checkbox"
                        id="oturum"
                        name="oturum"
                        value="oturum"
                        v-model="user.keepAlive"
                      />
                      <label for="oturum">Oturumu Açık Tut</label>
                    </div>
                    <div class="contact-check-box">
                    <router-link :to="{name : 'forgot'}">
                         <a  class="sifre_unuttum">Şifremi Unuttum</a>
                    </router-link>
                    </div>
                  </div>
                  <div class="contact-buttons w-100 mt-5 mb-4">
                    <button
                      type="submit"
                      class="btn-send me-xl-3 w-100 text-center"
                      :disabled="$v.$invalid"
                    >
                      Gönder
                    </button>
                  </div>
                  <div
                    class="contact-buttons social-buttons d-xl-flex align-items-center justify-content-between"
                  >
                    <div class="social-btn">
                      <a href="#" class="btn-gf"
                        ><img src="src/assets/img/google-btn.svg" alt="" /><span
                          >Google ile Giriş Yap</span
                        ></a
                      >
                    </div>
                    <div class="social-btn">
                      <a href="#" class="btn-gf"
                        ><img
                          src="src/assets/img/facebook-btn.svg"
                          alt=""
                        /><span>Facebook ile Giriş Yap</span></a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        keepAlive: null,
      },
      isUser: false,
      error: {
        status: null,
        message: null,
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", { ...this.user }).then((response) => {
        console.log(response.error)
          this.error.status = false;
           this.error.message = "Giriş başarılı. Dashboard'a yönlendiriliyorsunuz."
            setTimeout(() => {
              this.$router.push({name : "dashboard"})
            }, 3600);
      }, (error) => {
          this.error.status = true;
           this.error.message = error.response.data.message
      });
    },
  },
};
</script>
