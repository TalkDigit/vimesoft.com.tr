<template>
  <div class="register-wrapper wrapper">
    <div class="container">
      <div class="register-box">
        <div class="row g-0">
          <div class="col-xl-6 col-12 register-bg">
            <div class="register-left">
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/quick.svg" alt=""/>
                </div>
                <div class="register-text">
                  İhtiyacınıza <br/>Uygun Paketler
                </div>
              </div>
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/outline.svg" alt=""/>
                </div>
                <div class="register-text">
                  Sınırsız <br/>Konferans Oluşturma
                </div>
              </div>
              <div class="register-item">
                <div class="register-icon">
                  <img src="src/assets/img/multiscreen.svg" alt=""/>
                </div>
                <div class="register-text">
                  Sınırsız <br/>Konferans Oluşturma
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-12">
            <div class="register-right">
              <div class="contact-title">
                <div class="contact-h1">
                  <h1>Ücretsiz Deneyin</h1>
                  <div class="login">
                    <router-link :to="{name : 'login'}">
                      <a>Giriş Yap</a>
                    </router-link>
                  </div>
                </div>
                <p>
                  Kredi kartı bilgisi ve taahhüte gerek olmadan kullan!
                </p>
              </div>
              <div class="contact-form">
                <div class="alert alert-info" role="alert" v-if="createStatus">
                  Üyeliğiniz oluşturuldu. Kaydınızı tamamlamak için lütfen e-posta adresinize gelen doğrulama bağlantısını ziyaret edin.
                </div>
                <form @submit.prevent="onSubmit">
                  <div
                      class="contact-box-flex d-xl-flex align-items-center justify-content-between"
                  >
                    <div class="contact-input-box">
                      <input
                          type="text"
                          class="form-input"
                          id="fname"
                          name="fname"
                          autocomplete="off"
                          required="required"
                           v-model="$v.info.name.$model"
                       :class="{
                        'is-invalid': $v.info.name.$error,
                      }"
                      />
                      <label for="fname">Adınız</label>
                      <span class="contact-blue"></span>
                    </div>
                    <div class="contact-input-box">
                      <input
                          type="text"
                          class="form-input"
                          id="lname"
                          name="lname"
                          autocomplete="off"
                          required="required"
                          v-model="$v.info.surname.$model"
                       :class="{
                        'is-invalid': $v.info.surname.$error,
                      }"
                      />
                      <label for="lname">Soyadınız</label>
                      <span class="contact-blue"></span>
                    </div>
                  </div>
                  <div class="contact-input-box">
                    <input
                        type="email"
                        class="form-input"
                        id="email"
                        name="email"
                        autocomplete="off"
                        required="required"
                        v-model="$v.info.email.$model"
                       :class="{
                        'is-invalid': $v.info.email.$error,
                      }"
                    />
                    <label for="email">E-posta Adresiniz</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="contact-input-box">
                    <input
                        type="number"
                        class="form-input"
                        id="gsm"
                        name="text"
                        required="required"
                        autocomplete="off"
                        v-model="$v.info.phone.$model"
                       :class="{
                        'is-invalid': $v.info.phone.$error,
                      }"
                    />
                    <label for="gsm">GSM Numaranız</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="contact-input-box">
                    <input
                        type="password"
                        class="form-input"
                        id="sifre"
                        name="sifre"
                        required="required"
                        autocomplete="off"
                        v-model="$v.info.password.$model"
                       :class="{
                        'is-invalid': $v.info.password.$error,
                      }"
                    />
                    <label for="sifre">Şifrenizi Oluşturun</label>
                    <span class="contact-blue"></span>
                  </div>
                  <div class="contact-check-box d-flex">
                    <input
                        type="checkbox"
                        class="checkbox"
                        id="condition"
                        name="condition"
                        value="condition"
                        required
                    />
                    <label for="condition"
                    >Katılım Koşulları'nı Onaylıyorum.</label
                    >
                  </div>
                  <div class="contact-check-box d-flex">
                    <input
                        type="checkbox"
                        class="checkbox"
                        id="informed"
                        name="informed"
                        value="informed"
                        required="required"
                    />
                    <label for="informed">
                      May Tech ve Grup Şirketleri’nin avantajlı ürün ve
                      hizmetlerden haberdar olmak için 6563 sayılı Kanun ve
                      diğer ilgili mevzuat uyarınca aksi tarafımca belirtilene
                      kadar ticari elektronik ileti almak istiyorum.
                    </label>
                  </div>
                  <div class="contact-buttons">
                    <a href="#" class="btn-cancel me-1">İptal</a>
                    <button type="submit" class="btn-send me-xl-3 ">
                      Kayıt Ol
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
import axios from "axios";
import {required, minLength,numeric, email} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      info: {
        name: null,
        surname: null,
        email: null,
        phone: null,
        password: null,
      },
      createStatus : false,
      responseCode : ''
    };
  },
  validations: {
    info: {
      email: {
        required,
        email,
      },
      name: {
        required
      },
      surname : {
        required
      },
      phone : {
        required,
        numeric
      },
      password: {
        required
      }
    },
  },
  methods: {
    onSubmit() {
          axios
          .post("http://37.75.13.158/v1/account/create", {
            account_type: "individual",
            email: this.info.email,
            password: this.info.password,
            first_name: this.info.name,
            last_name: this.info.surname,
            language: "tr",
            mobile_phone: this.info.phone,
          })
          .then((response) => {
            console.log(response.data.code)
            if(response.status == 200) {
              this.responseCode = response.data.data.code,
              this.createStatus = true;
               Object.keys(this.info).forEach((i) => this.info[i] = null);
			        this.$nextTick(() => { this.$v.$reset() })
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
    },
  },
};
</script>
