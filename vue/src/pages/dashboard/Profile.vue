<template>
    <div class="meeting-plans-wrapper acc-packets2 tabs pb-5">
        <div class="my-account-title setting-title mb-md-5 mb-4 row g-0 align-items-center justify-content-between">
            <div class="col-md-6 col-12 d-flex align-items-center">
                <h1>Hesabım</h1>
                <div class="card-head-right card-ticket2 ms-3" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
                    <span> {{ this.$store.state.accountInformation[0].package }}</span>
                </div>
            </div>
            <div class="col-md-6 col-12 text-md-center">
                <router-link :to="{name : 'profileinfo'}">
                    <a class="btn-subs pt-md-3 pt-2 pb-md-3 pb-2 hover-bg me-4">Hesap Detayları</a>
                </router-link>
                <router-link :to="{name : 'AdditionalTab'}">
                                        <a class="btn-subs2 pt-md-3 pt-2 pb-md-3 pb-2 hover-bg"> Yükselt / Satın Al</a>
                                    </router-link>
            </div>
        </div>
        <div class="account-content">
            <div class="account-content-wrapper"
                 :class="{'account-content-wrapper' : this.$route.meta.narrow,' acc-slide' : !this.$route.meta.narrow}">
                <div class="row">
                    <div class="col-xl-4 col-12">
                        <div class="account-pic-line">
                            <div class="account-pic mb-4">
                                <img src="/src/assets/img/profil-pic.png" alt="">
                            </div>
                            <div class="account-personal-name p-box-name mb-4">
                            </div>
                            <div class="account-content-text">
                                <div class="act-flex d-flex mb-3 align-items-center justify-content-between">
                                    <span>Katılımcı Sayısı</span>
                                    <div class="btn-acc">{{ this.$store.state.accountInformation[0].users_count }}</div>
                                </div>
                                <div class="act-flex d-flex mb-5 align-items-center justify-content-between">
                                    <span>Toplantı</span>
                                    <div class="btn-acc2">{{ this.$store.state.accountInformation[0].meetings_time }}
                                    </div>
                                </div>
                                <div class="acc-up-btn">

                                    <router-link :to="{name : 'AdditionalTab'}">
                                        <a class="acc-btn-up"> Yükselt / Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-12">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>


                </div>
            </div>
        </div>
        <div class="detail-popup path-pp2">
            <div class="calendar-popup-content path-popup">
                <div class="path-popup-title d-flex align-items-center justify-content-between">
                    <span>Seçilen Ürün Özeti</span><span class="delete"><img class="pe-2" src="/src/assets/img/downloadicon.svg"
                                                                             alt="">İndir</span></div>
                <div class="path-popup-flex d-flex align-items-center justify-content-between">
                    <div class="path-popup-item">
                        <div class="pp-tt">Business</div>
                    </div>
                    <div class="path-popup-item">
                        <div><b>₺69</b> Aylık</div>
                    </div>
                </div>
                <div class="path-popup-flex d-flex align-items-center justify-content-between">
                    <div class="path-popup-item">
                        <div class="pp-tt">Konferans Katılımcısı<span>(25)</span></div>
                    </div>
                    <div class="path-popup-item">
                        <div><b>₺29</b> Aylık</div>
                    </div>
                </div>
                <div class="path-popup-flex x d-flex align-items-center justify-content-between">
                    <div class="path-popup-item">
                        <div class="pp-tt">Ek Kayıt Alanı<span>(50GB)</span></div>
                    </div>
                    <div class="path-popup-item">
                        <div><b>₺400</b> Aylık</div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between pt-3">
                    <div class="pp-tt">Genel Toplam</div>
                    <div class="px-t"><b>₺498</b> Aylık</div>
                </div>
            </div>
            <div class="calendar-popup"></div>
        </div>
        <!-- Credit Card Info -->
        <div class="acc-packets2-popup">
            <div class="calendar-popup-content packets2-popup">
                <div class="path-popup-title d-flex align-items-center justify-content-between mb-4">Kredi Kartı ve
                    Ödeme Bilgisi Ekle
                </div>
                <div class="credit-card-info">
                    <div class="col-12 acp2-scroll">
                        <form action="/" method="get">
                            <div class="contact-input-box mb-4">
                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                       required="required"/>
                                <label for="fname">Kart İsmi Giriniz</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="contact-input-box mb-4">
                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                       required="required"/>
                                <label for="fname">Kart Sahibinin Adı, Soyadı</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="contact-input-box mb-4">
                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                       required="required"/>
                                <label for="fname">Kart Numarası</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="contact-box-flex row g-0 align-items-center mb-4">
                                <div class="time-period-plans col-md-3 col-6 pe-3 mb-md-0 mb-4">
                                    <label class="spe-select  mb-0">
                                        <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                            <option value=""></option>
                                            <option value="lorem4">1</option>
                                            <option value="lorem4">2</option>
                                            <option value="lorem4">3</option>
                                            <option value="lorem4">4</option>
                                            <option value="lorem4">1</option>
                                            <option value="lorem4">2</option>
                                            <option value="lorem4">3</option>
                                            <option value="lorem4">4</option>
                                            <option value="lorem4">1</option>
                                            <option value="lorem4">2</option>
                                            <option value="lorem4">3</option>
                                            <option value="lorem4">4</option>
                                        </select>
                                        <span class="check-select-name">Ay</span>
                                    </label>
                                </div>
                                <div class="time-period-plans col-md-3 col-6 pe-md-3 pe-0 mb-md-0 mb-4">
                                    <label class="spe-select  mb-0">
                                        <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                            <option value=""></option>
                                            <option value="lorem4">21</option>
                                            <option value="lorem4">22</option>
                                            <option value="lorem4">23</option>
                                            <option value="lorem4">24</option>
                                            <option value="lorem4">25</option>
                                        </select>
                                        <span class="check-select-name">Yıl</span>
                                    </label>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="contact-input-box mb-0 me-0">
                                        <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                               required="required"/>
                                        <label for="lname">CCV Kodu</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="contact-check-box d-flex mb-0 w-50">
                                    <input type="checkbox" class="checkbox" id="condition" name="condition"
                                           value="condition"/>
                                    <label for="condition">Her Ay Otomatik Yenileme Talimatı</label>
                                </div>
                                <div class="contact-check-box d-flex mb-0 w-50">
                                    <input type="checkbox" class="checkbox" id="birincil" name="birincil"
                                           value="birincil"/>
                                    <label for="birincil">Birincil Ödeme Yöntemim Yap</label>
                                </div>
                            </div>
                            <div>
                                <button id="pc2-off" class="btn-send pc2-off">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="calendar-popup"></div>
        </div>

        <!-- Address and invoice info -->
        <div class="acc-packets2-popup2">
            <div class="calendar-popup-content packets2-popup tab-system">
                <div class="path-popup-title d-flex align-items-center justify-content-between mb-4">
                    <span>Adres ve Fatura Bilgisi Ekle</span>
                    <ul class="user-invoice-info-ul d-flex align-items-center tabs">
                        <li class="tabs-item active" data-item="sahis2"><img class="user-blue"
                                                                             src="/src/assets/img/awesome-user-alt-blue.svg" alt=""><img
                            class="user-gray" src="/src/assets/img/awesome-user-alt-gray.svg" alt=""><span>Şahıs</span></li>
                        <li class="tabs-item ms-4" data-item="sirket2"><img class="users-gray" src="/src/assets/img/users-gray.svg"
                                                                            alt=""><img class="users-blue"
                                                                                        src="/src/assets/img/users-blue.svg" alt=""><span>Şirket</span>
                        </li>
                    </ul>
                </div>
                <div id="sahis2" class="col-12 acp2-scroll tab-content active">
                    <div class="contact-input-box">
                        <input type="tc" class="form-input" id="tc" name="tc" autocomplete="off" required="required"/>
                        <label for="tc">TC Kimlik Nonuz</label>
                        <span class="contact-blue"></span>
                    </div>
                    <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                        <div class="contact-input-box">
                            <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                   required="required"/>
                            <label for="fname">Adınız</label>
                            <span class="contact-blue"></span>
                        </div>
                        <div class="contact-input-box">
                            <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                   required="required"/>
                            <label for="lname">Soyadınız</label>
                            <span class="contact-blue"></span>
                        </div>
                    </div>
                    <div class="contact-input-box">
                        <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                               required="required"/>
                        <label for="email">E-posta Adresiniz</label>
                        <span class="contact-blue"></span>
                    </div>
                    <div class="contact-input-box">
                        <input type="adress" class="form-input" id="adress" name="adress" autocomplete="off"
                               required="required"/>
                        <label for="adress">Adresiniz</label>
                        <span class="contact-blue"></span>
                    </div>
                    <div class="row g-0">
                        <div class="col-xl-6">
                            <div class="time-period-plans  me-xl-4">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">İstanbul</option>
                                        <option value="lorem4">Ankara</option>
                                        <option value="lorem4">İzmir</option>
                                        <option value="lorem4">Antalya</option>
                                    </select>
                                    <span class="check-select-name">İl</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="time-plans">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">Bağcılar</option>
                                        <option value="lorem4">Kadıköy</option>
                                        <option value="lorem4">Beşiktaş</option>
                                        <option value="lorem4">Esenler</option>
                                        <option value="lorem4">Tuzla</option>
                                        <option value="lorem4">Levent</option>
                                    </select>
                                    <span class="check-select-name">İlçe</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0">
                        <div class="col-xl-6">
                            <div class="time-period-plans  me-xl-4">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">Türkiye</option>
                                        <option value="lorem4">Dakka</option>
                                        <option value="lorem4">Bangladeş</option>
                                        <option value="lorem4">Papua Yeni Gine</option>
                                    </select>
                                    <span class="check-select-name">Ülke</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="contact-input-box">
                                <input type="pk" class="form-input" id="pk" name="pk" autocomplete="off"
                                       required="required"/>
                                <label for="pk">Posta Kodunuz</label>
                                <span class="contact-blue"></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button id="pc2-off" class="btn-send pc2-off2">Kaydet</button>
                    </div>
                </div>
                <div id="sirket2" class="col-12 acp2-scroll  tab-content">
                    <div>
                        <div class="col-12">
                            <div class="contact-input-box">
                                <input type="tc" class="form-input" id="tc" name="tc" autocomplete="off"
                                       required="required"/>
                                <label for="tc">Şirketinizin Adı</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                           required="required"/>
                                    <label for="fname">Adınız</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                           required="required"/>
                                    <label for="lname">Soyadınız</label>
                                    <span class="contact-blue"></span>
                                </div>
                            </div>
                            <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                           required="required"/>
                                    <label for="fname">Vergi No</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                           required="required"/>
                                    <label for="lname">Vergi Dairesi</label>
                                    <span class="contact-blue"></span>
                                </div>
                            </div>
                            <div class="contact-input-box">
                                <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                                       required="required"/>
                                <label for="email">E-posta Adresiniz</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="contact-input-box">
                                <input type="adress" class="form-input" id="adress" name="adress" autocomplete="off"
                                       required="required"/>
                                <label for="adress">Adresiniz</label>
                                <span class="contact-blue"></span>
                            </div>
                            <div class="time-period-plans">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">5-10</option>
                                        <option value="lorem4">50-100</option>
                                        <option value="lorem4">100-250</option>
                                        <option value="lorem4">250-500</option>
                                        <option value="lorem4">50-100</option>
                                        <option value="lorem4">100-250</option>
                                        <option value="lorem4">250-500</option>
                                    </select>
                                    <span class="check-select-name">Şirketinizdeki Toplam Çalışan Sayısı</span>
                                </label>
                            </div>
                            <div class="row g-0">
                                <div class="col-xl-6">
                                    <div class="time-period-plans  me-xl-4">
                                        <label class="spe-select">
                                            <select class="selectric-select" id="nicer-select-id" name="mySelect"
                                                    reqiured>
                                                <option value=""></option>
                                                <option value="lorem4">İstanbul</option>
                                                <option value="lorem4">Ankara</option>
                                                <option value="lorem4">İzmir</option>
                                                <option value="lorem4">Antalya</option>
                                            </select>
                                            <span class="check-select-name">İl</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="time-plans">
                                        <label class="spe-select">
                                            <select class="selectric-select" id="nicer-select-id" name="mySelect"
                                                    reqiured>
                                                <option value=""></option>
                                                <option value="lorem4">Bağcılar</option>
                                                <option value="lorem4">Kadıköy</option>
                                                <option value="lorem4">Beşiktaş</option>
                                                <option value="lorem4">Esenler</option>
                                                <option value="lorem4">Tuzla</option>
                                                <option value="lorem4">Levent</option>
                                            </select>
                                            <span class="check-select-name">İlçe</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-0">
                                <div class="col-xl-6">
                                    <div class="time-period-plans  me-xl-4 mb-3">
                                        <label class="spe-select mb-0">
                                            <select class="selectric-select mb-0" id="nicer-select-id" name="mySelect"
                                                    reqiured>
                                                <option value=""></option>
                                                <option value="lorem4">Türkiye</option>
                                                <option value="lorem4">Dakka</option>
                                                <option value="lorem4">Bangladeş</option>
                                                <option value="lorem4">Papua Yeni Gine</option>
                                            </select>
                                            <span class="check-select-name">Ülke</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="contact-input-box mb-3">
                                        <input type="pk" class="form-input" id="pk" name="pk" autocomplete="off"
                                               required="required"/>
                                        <label for="pk">Posta Kodunuz</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button id="pc2-off" class="btn-send pc2-off2">Kaydet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calendar-popup"></div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $('.s-detail, .share-calendar-link').on('click', function(e) {
            e.preventDefault();
            $('.detail-popup').toggleClass('is-visible');
        });
                // Packets Active Border
        $(function () {
            $('.extra-buy-packet').click(function(){
                $(this).closest('.extra-buy-packet').toggleClass('active');
            });
        });
        // Add to Credit Cart Popup /  AddClass
        $('.pc2-popup-card').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').toggleClass('active');
        });
        //Add to Credit Cart Popup / RemoveClass
        $('.calendar-popup').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').removeClass('active');
        });
        // Click to exit popup
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').removeClass('active');
        });
        // Add to Credit Card info
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.card-box-all').addClass('active');
        });
        // Button click to display none ('.meeting-box-date')
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.meeting-box-date').addClass('d-none');
        });
        // Address and info popup AddClass
        $('.pc2-popup-address').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').toggleClass('active');
        });
        //Address and info popup RemoveClass
        $('.calendar-popup').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').removeClass('active');
        });
        // Click to exit popup
        $('.pc2-off2').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').removeClass('active');
        });
        $('.pc2-off2').on('click', function(e) {
            e.preventDefault();
            $('.card-box-all2').addClass('active');
            $('.mtb2').addClass('d-none');
        });

        $('.card-box').click(function(){
            $(this).next('.mpj-toggle').slideToggle(300);
            $(this).find(".card-box-arrow").toggleClass("c-rotate")
        });
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
    }
}
</script>

<style scoped>

</style>