<template>
  <div class="forgot_wrapper wrapper">
    <div class="container">
      <div class="contact-box">
        <div class="row g-0 align-items-center">
          <div class="col-xl-6">
            <div class="contact-title">
              <h1>Şifremi Unuttum</h1>
              <p>
                Geçici şifrenizi cep telefonunuza mı, mail adresinize mi yollayalım?
              </p>
            </div>
            <div class="forgot-form">
              <div class="forgot-box forgot-flex forgot-tabs">
                <a href="#" class="btn-forgot " data-tabx="forgot_email">Mail Olarak</a>
                <a href="#" class="btn-forgot active" data-tabx="sms">SMS Olarak</a>
              </div>
              <div class="alert mt-3 mb-3" role="alert"
                   :class="{'alert-danger' : !error.response, 'alert-success' : error.response}" v-if="error.status">
                {{ error.message }}
              </div>
              <div class="forgot-box forgot-gsm-box active" id="sms">
                <form @submit.prevent="onSubmitPhone">
                  <div class="contact-input-box">
                    <input type="text" class="form-input" id="gsm" name="gsm" required="required" autocomplete="off"
                           v-model="$v.phoneReset.phone.$model"
                           :class="{
                        'is-invalid': $v.phoneReset.phone.$error,
                      }">
                    <label for="gsm">Telefon Numaranız</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="forgot-box">
                    <button type="submit" :disabled="$v.phoneReset.phone.$invalid" class="btn-forgot2 btn-forgot-send">
                      Gönder
                    </button>
                  </div>
                </form>
              </div>
              <div class="forgot-box forgot-sms-box" id="forgot_email">
                <form @submit.prevent="onSubmitEmail">
                  <div class="contact-input-box">
                    <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                           required="required" v-model="$v.emailReset.email.$model"
                           :class="{
                        'is-invalid': $v.emailReset.email.$error,
                      }"/>
                    <label for="email">E-posta Adresiniz</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="forgot-box">
                    <button type="submit" :disabled="$v.emailReset.email.$invalid" class="btn-forgot2 btn-forgot-send">
                      Gönder
                    </button>
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
import {required, numeric, email} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      emailReset: {
        email: null
      },
      phoneReset: {
        phone: null
      },
      error: {
        status: null,
        response: null,
        message: '',
      }
    }
  },
  validations: {
    emailReset: {
      email: {
        email,
        required
      }
    },
    phoneReset: {
      phone: {
        numeric,
        required
      }
    },

  },
  methods: {

    onSubmitPhone() {
      alert('testphone')
    },
    onSubmitEmail() {
      axios.get('/account/user/reset_password_request/' + this.emailReset.email).then((response) => {
        if (response.data.status == 'success') {
          this.error.status = true;
          this.error.response = true;
          this.error.message = 'Geçişi şifreniz ' + this.emailReset.email + ' adresine gönderilmiştir. Giriş ekranına yönlendiriliyorsunuz.';
          this.emailReset.email = null;
          this.$nextTick(() => {
            this.$v.$reset()
          })
          setTimeout(() => {
              this.$router.push({name : "login"})
            }, 3600);
        }
      }).catch((error) => {
        alert(error.response.status)
        this.error.status = true;
        this.error.response = false;
        this.error.message = 'Sistemde belirttiğiniz e-posta adresiyle ilişkili bir hesap bulunamadı.';
        this.emailReset.phone = null
        this.$nextTick(() => {
          this.$v.$reset()
        })
      })
    }
  },
  mounted() {
    $(document).ready(function () {
      $(".forgot-tabs a").click(function () {
        var tab_idx = $(this).attr("data-tabx");

        $(".forgot-tabs a").removeClass("active");
        $(".forgot-box").removeClass("active");

        $(this).addClass("active");
        $("#" + tab_idx).addClass("active");
      });
    });
  }
}
</script>