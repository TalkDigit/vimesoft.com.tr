<template>
    <div class="account-inp ms-xl-3 ms-0">
        <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
            <div class="contact-input-box">
                <input type="text" class="form-input editable"
                       :value="this.$store.state.accountInformation[0].account" id="fname"
                       name="fname"
                       autocomplete="off" required="required"/>
                <label for="fname">Adınız</label>
            </div>
            <div class="contact-input-box">
                <input type="text" class="form-input editable"
                       :value=" this.$store.state.accountInformation[0].account " id="lname"
                       name="lname"
                       autocomplete="off" required="required"/>
                <label for="lname">Soyadınız</label>
            </div>
        </div>
        <div class="contact-input-box">
            <input type="email" class="form-input editable"
                   :value="this.$store.state.accountInformation[0].email" id="email"
                   name="email" autocomplete="off" required="required"/>
            <label for="email">E-posta Adresiniz</label>
        </div>
        <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
            <div class="contact-input-box">
                <input type="text" class="form-input editable" value="+90 555 555 55 55" id="gsm"
                       name="gsm" required="required" autocomplete="off">
                <label for="gsm">Cep Telefonunuz</label>
            </div>
            <div class="contact-input-box">
                <input type="password" class="form-input editable" value="" id="sifre"
                       name="sifre" required="required" autocomplete="off">
                <label for="sifre">Şifreniz</label>
                <div class="password-icon">
                    <svg class="psw-hide" id="eye" xmlns="http://www.w3.org/2000/svg" width="20"
                         height="16" viewBox="0 0 20 16">
                        <path id="eye-2" data-name="eye"
                              d="M3,14A10.158,10.158,0,0,1,13,6a10.159,10.159,0,0,1,10,8,10.158,10.158,0,0,1-10,8A10.159,10.159,0,0,1,3,14Zm10,5a5,5,0,1,0-5-5A5,5,0,0,0,13,19Zm0-2a3,3,0,1,0-3-3A3,3,0,0,0,13,17Z"
                              transform="translate(-3 -6)" fill="#90a0b3" fill-rule="evenodd"/>
                    </svg>
                    <svg class="psw-show" id="eye" xmlns="http://www.w3.org/2000/svg" width="20"
                         height="16" viewBox="0 0 20 16">
                        <path id="eye-2" data-name="eye"
                              d="M3,14A10.158,10.158,0,0,1,13,6a10.159,10.159,0,0,1,10,8,10.158,10.158,0,0,1-10,8A10.159,10.159,0,0,1,3,14Zm10,5a5,5,0,1,0-5-5A5,5,0,0,0,13,19Zm0-2a3,3,0,1,0-3-3A3,3,0,0,0,13,17Z"
                              transform="translate(-3 -6)" fill="#007bff" fill-rule="evenodd"/>
                    </svg>
                </div>
            </div>
        </div>

        <div class="account-edit-completed">
            <div class="row">
                <div class="col-auto">
                    <div class="account-edit-complete delete mb-4 d-flex align-items-center">
                        <img src="src/assets/img/edit.svg" alt="">
                        <span class="ps-2">Tamamla</span>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="account-edit-delete delete mb-4 d-flex align-items-center">
                        <span class="ps-2">Sil</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-input-box">
            <input type="text" class="form-input" value="156 984 855" id="gsm" name="gsm"
                   required="required" autocomplete="off">
            <label for="gsm">Kişisel Toplantı ID</label>
            <div class="inp-edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.34" height="20"
                     viewBox="0 0 25.34 20">
                    <path id="edit"
                          d="M12.613,15l1.647-1.647L12.1,11.193,10.454,12.84v.8h1.364V15h.8Zm6.25-10.227a.294.294,0,0,0-.469.014L13.423,9.758a.322.322,0,1,0,.455.455l4.971-4.971a.293.293,0,0,0,.014-.469ZM20,13.21v2.7A4.1,4.1,0,0,1,15.909,20H4.091A3.939,3.939,0,0,1,1.2,18.8,3.944,3.944,0,0,1,0,15.909V4.091A3.939,3.939,0,0,1,1.2,1.2,3.944,3.944,0,0,1,4.091,0H15.909a3.905,3.905,0,0,1,1.662.355.433.433,0,0,1,.256.327.443.443,0,0,1-.128.412l-.7.7a.416.416,0,0,1-.455.114,2.517,2.517,0,0,0-.639-.086H4.091a2.188,2.188,0,0,0-1.605.667A2.188,2.188,0,0,0,1.819,4.09V15.908a2.188,2.188,0,0,0,.667,1.605,2.188,2.188,0,0,0,1.605.667H15.909a2.279,2.279,0,0,0,2.273-2.273V14.119a.425.425,0,0,1,.128-.313l.909-.909a.427.427,0,0,1,.5-.1A.412.412,0,0,1,20,13.21ZM18.635,2.727l4.091,4.091-9.545,9.545H9.091V12.273ZM24.942,4.6,23.636,5.909,19.545,1.818,20.851.511a1.371,1.371,0,0,1,1.932,0l2.159,2.159a1.315,1.315,0,0,1,.4.966,1.315,1.315,0,0,1-.4.966Z"
                          fill="#007bff"/>
                </svg>
            </div>
        </div>
        <div class="contact-input-box">
            <input type="text" class="form-input" value="https://vimesoft.com/156984855" id="gsm"
                   name="gsm" required="required" autocomplete="off">
            <label for="gsm">Kişisel Toplantı Adresi</label>
            <div class="inp-edit">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.34" height="20"
                     viewBox="0 0 25.34 20">
                    <path id="edit"
                          d="M12.613,15l1.647-1.647L12.1,11.193,10.454,12.84v.8h1.364V15h.8Zm6.25-10.227a.294.294,0,0,0-.469.014L13.423,9.758a.322.322,0,1,0,.455.455l4.971-4.971a.293.293,0,0,0,.014-.469ZM20,13.21v2.7A4.1,4.1,0,0,1,15.909,20H4.091A3.939,3.939,0,0,1,1.2,18.8,3.944,3.944,0,0,1,0,15.909V4.091A3.939,3.939,0,0,1,1.2,1.2,3.944,3.944,0,0,1,4.091,0H15.909a3.905,3.905,0,0,1,1.662.355.433.433,0,0,1,.256.327.443.443,0,0,1-.128.412l-.7.7a.416.416,0,0,1-.455.114,2.517,2.517,0,0,0-.639-.086H4.091a2.188,2.188,0,0,0-1.605.667A2.188,2.188,0,0,0,1.819,4.09V15.908a2.188,2.188,0,0,0,.667,1.605,2.188,2.188,0,0,0,1.605.667H15.909a2.279,2.279,0,0,0,2.273-2.273V14.119a.425.425,0,0,1,.128-.313l.909-.909a.427.427,0,0,1,.5-.1A.412.412,0,0,1,20,13.21ZM18.635,2.727l4.091,4.091-9.545,9.545H9.091V12.273ZM24.942,4.6,23.636,5.909,19.545,1.818,20.851.511a1.371,1.371,0,0,1,1.932,0l2.159,2.159a1.315,1.315,0,0,1,.4.966,1.315,1.315,0,0,1-.4.966Z"
                          fill="#007bff"/>
                </svg>
            </div>
        </div>
        <div class="acc-language">
            <label class="spe-select">
                <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                    <option value=""></option>
                    <option value="lorem1" selected>Türkçe</option>
                    <option value="lorem4">İngilizce</option>
                    <option value="lorem3">Almanca</option>
                </select>
                <span class="check-select-name">Dil</span>
            </label>
        </div>
        <div class="time-period-plans">
            <label class="spe-select">
                <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                    <option value=""></option>
                    <option value="lorem4" selected>GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                    <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                    <option value="lorem3">GMT-04 New York, Amerika</option>
                    <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                </select>
                <span class="check-select-name">Zaman Dilimi</span>
            </label>
        </div>
        <div class="acc-up-btn mb-5">

                                    <router-link :to="{name : 'AdditionalTab'}">
                                        <a class="acc-btn-up"> Tamamla</a>
                                    </router-link>
                                </div>
    </div>
</template>

<script>
export default {
    name: "Info.vue",
    mounted() {
        $(document).ready(function () {

            var selectricOptions = {
                disableOnMobile: false,
            };

            $(function () {
                $('.spe-select select').selectric(selectricOptions);
            });

            $('.spe-select select').on('change', function () { // fires when the value changes

                var returnvalue;
                if ($(this).val() !== "") {
                    $(this).closest(".spe-select").find(".check-select-name").addClass("active");
                    returnvalue = false;
                } else {
                    $(this).closest(".spe-select").find(".check-select-name").removeClass("active");
                }
                return returnvalue;

            });
            $(".account-edit-text-button").click(function () {
                $(".editable").val("");
                $(this).hide();
                $(".account-edit-completed").show();
            })
            $(".account-edit-complete").click(function () {
                $(".account-edit-text-button").show();
                $(".account-edit-completed").hide();
            })
        });
    }
}
</script>

<style scoped>

</style>