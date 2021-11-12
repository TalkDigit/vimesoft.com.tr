<template>
    <div class="meeting-plans-wrapper">
        <div class="user-panel-title">
            <h1>Selam, <span>{{ this.$store.state.accountInformation[0].account }}.</span></h1>
            <p>İlk toplantını oluşturmak için her şey hazır! </p>
        </div>
        <div class="contact-box">
            <div class="row g-0 align-items-center">
                <div class="col-xl-6">
                    <div class="meeting-plans-form">
                        <div class="contact-input-box">
                            <input type="text" class="form-input" id="kname" name="kname" autocomplete="off"
                                   required="required"/>
                            <label for="kname">Konferans Adı</label>
                            <span class="contact-blue"></span>
                        </div>
                        <label class="spe-select">
                            <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                <option value=""></option>
                                <option value="lorem4">Kişisel ID</option>
                                <option value="lorem3">Sadece Davet Edilen Kullanıcılar</option>
                                <option value="lorem2">Sadece Davet Edilen Kullanıcılar</option>
                                <option value="lorem">Kişisel ID</option>
                                <option value="ipsum">Kişisel ID</option>
                                <option value="dolor">Kişisel ID</option>
                            </select>
                            <span class="check-select-name">Seçim Yapınız</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-12">
                    <div class="user-invite-form">
                        <div class="row gx-xl-4 gy-xl-4 gx-3 gy-3 user-invite-items">
                            <div class="col-lg-6 user-invite-more">
                                <div class="user-invite-box d-flex align-items-center">
                                    <div class="contact-input-box">
                                        <input type="email" class="form-input" id="email" name="email"
                                               autocomplete="off" required="required">
                                        <label for="email">E-posta Adresiniz</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                    <div class="user-invite-icon" v-on:click="step++">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                                  d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z"
                                                  transform="translate(0 -2.25)" fill="#007bff"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 user-invite-more" id="user-invite-item2" v-show="step > 1">
                                <div class="user-invite-box d-flex align-items-center">
                                    <div class="contact-input-box"><input type="email" class="form-input" id="email"
                                                                          name="email[2]" autocomplete="off"
                                                                          required="required"> <label for="email">E-posta
                                        Adresiniz</label><span class="contact-blue"></span></div>
                                    <div class="user-remove-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                                  d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z"
                                                  transform="translate(0 -2.25)" fill="#007bff"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 user-invite-more" id="user-invite-item3" v-show="step > 2">
                                <div class="user-invite-box d-flex align-items-center">
                                    <div class="contact-input-box"><input type="email" class="form-input" id="email"
                                                                          name="email[3]" autocomplete="off"
                                                                          required="required"> <label for="email">E-posta
                                        Adresiniz</label><span class="contact-blue"></span></div>
                                    <div class="user-remove-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                             viewBox="0 0 22 22">
                                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                                  d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z"
                                                  transform="translate(0 -2.25)" fill="#007bff"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 user-invite-more4" v-show="step > 2">
                                <button id="myBtn" class="btn-buy2">Kullanıcı Ekle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="password-guard">
                <div class="row g-0 align-items-center">
                    <div class="col-sm-3 col-md-2 col-12">
                        <div class="password-title user-invite-title mb-0">Şifre Korumalı</div>
                    </div>
                    <div class="col-sm-9 col-md-10 col-12 d-xl-flex align-items-center">
                        <div class="password-guard-check me-sm-5 align-items-center">
                            <div class="label-control label-x d-flex align-items-center">
                                <label for="psw_btn" data-name="psw_no" class="psw-no">Hayır</label>
                                <input type="checkbox" class="switch_1 switch_x switch_btn" id="psw_btn" v-model="checked">
                                <label for="psw_btn" data-name="psw_yes" class="psw-yes">Evet</label>
                            </div>
                            <div class="password-input" v-if="checked">
                                <div class="contact-input-box m-0">
                                    <input type="password" class="form-input" id="sifre" name="sifre"
                                           required="required" autocomplete="off">
                                    <label for="sifre">Şifre</label>
                                    <span class="contact-blue"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="moderator-management">
                <div class="moderator-title user-invite-title">Moderasyon Yönetimi</div>
                <button type="button" class="btn-buy2 me-xl-5 me-md-3" data-tabx="danisilsin">Danışılsın</button>
                <button type="button" class="btn-buy2 me-xl-5 me-md-3" data-tabx="danisilmasin">Danışılmasın</button>
                <button type="button" class="btn-buy2" data-tabx="yonetici">Yönetici Karar Versin</button>
            </div>
            <div class="camera-auto row g-0 align-items-center">
                <div class="camera-title user-invite-title col-sm-3 col-md-2 col-5 mb-0">Kamera Paylaşımları <br>
                    Otomatik Başlasın
                </div>
                <div
                    class="label-control label-xc d-flex align-items-center col-sm-9 col-md-10 col-7 ps-xl-0 ps-sm-0 ps-3">
                    <label for="camera_btn" data-name="camera_yes" class="camera-no">Hayır</label>
                    <input type="checkbox" class="switch_1 switch_y" id="camera_btn">
                    <label for="camera_btn" data-name="camera_yes" class="camera-yes">Evet</label>
                </div>
            </div>
            <div class="row g-0">
                <div class="col-xl-6">
                    <div class="row g-0">
                        <div class="col-xl-6">
                            <div class="date-plans me-xl-4">
                                <div class="spe-select spe-proid sp-ac">
                                    <input type="text" autocomplete="off" name="checkIn" id="datepicker" value=""
                                           class="calendar">
                                    <span class="check-select-name spe-proid-name">Tarih</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="hour-plans">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">00:00</option>
                                        <option value="lorem3">00:30</option>
                                        <option value="lorem2">01:00</option>
                                        <option value="lorem4">01:30</option>
                                        <option value="lorem3">02:00</option>
                                        <option value="lorem2">02:30</option>
                                        <option value="lorem4">03:00</option>
                                        <option value="lorem3">03:30</option>
                                        <option value="lorem2">04:00</option>
                                        <option value="lorem4">04:30</option>
                                        <option value="lorem3">05:00</option>
                                        <option value="lorem2">05:30</option>
                                        <option value="lorem4">06:00</option>
                                        <option value="lorem3">06:30</option>
                                        <option value="lorem2">07:00</option>
                                        <option value="lorem4">07:30</option>
                                        <option value="lorem3">08:00</option>
                                        <option value="lorem2">08:30</option>
                                        <option value="lorem4">09:00</option>
                                    </select>
                                    <span class="check-select-name">Saat</span>
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
                                        <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                        <option value="lorem3">GMT-04 New York, Amerika</option>
                                        <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                    </select>
                                    <span class="check-select-name">Zaman Dilimi</span>
                                </label>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <div class="time-plans">
                                <label class="spe-select">
                                    <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                        <option value=""></option>
                                        <option value="lorem4">10 Dk</option>
                                        <option value="lorem4">15 Dk</option>
                                        <option value="lorem4">30 Dk</option>
                                        <option value="lorem4">45 Dk</option>
                                        <option value="lorem4">60 Dk</option>
                                        <option value="lorem4">90 Dk</option>
                                    </select>
                                    <span class="check-select-name">Süre</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="again-meeting" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
                <input type="checkbox" id="again_meeting" disabled>
                <label for="again_meeting">Tekrarlanan Toplantı</label>
                <div class="tooltipx">
                    <div class="tooltipx-text">
                        Sadece Ücretli Aboneler Tarafından Kullanılabilir. Paketinizi Yükseltmek için <a href="#">Hemen
                        Tıklayın.</a>
                        <span class="tx-span"></span>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="contact-check-box d-flex mb-4">
                    <input type="checkbox" class="checkbox ag-plans" id="conditionx" name="conditionx"
                           value="conditionx"/>
                    <label for="conditionx">Tekrarlanan Toplantı</label>
                </div>
                <div class="row g-0 ag-content">
                    <div class="col-xl-6">
                        <div class="row g-0">
                            <div class="col-xl-6">
                                <div class="time-period-plans  me-xl-4">
                                    <label class="spe-select">
                                        <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                            <option value=""></option>
                                            <option value="lorem4">Günlük</option>
                                            <option value="lorem4">Haftalık</option>
                                            <option value="lorem4">Aylık</option>
                                        </select>
                                        <span class="check-select-name">Tekrarlanma Süresi</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="time-period-plans">
                                    <label class="spe-select">
                                        <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                            <option value=""></option>
                                            <option value="lorem4">Haftada Bir</option>
                                            <option value="lorem4">Haftada İki</option>
                                            <option value="lorem4">İki Haftada Bir</option>
                                        </select>
                                        <span class="check-select-name">Tekrarlanma Sıklığı</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="again-meeting-btns mb-3">
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Pazartesi</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Salı</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Çarşamba</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Perşembe</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Cuma</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Cumartesi</button>
                            <button class="btn-buy2 agm-btn pt-2 pb-2">Pazar</button>
                        </div>
                        <div class="row g-0">
                            <div class="col-xl-6">
                                <div class="contact-input-box me-xl-4">
                                    <input type="end" class="form-input" id="end" name="end" autocomplete="off"
                                           required="required"/>
                                    <label for="end">Bitiş Tarihi</label>
                                    <span class="contact-blue"></span>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="time-period-plans">
                                    <label class="spe-select">
                                        <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                            <option value=""></option>
                                            <option value="lorem4">1</option>
                                            <option value="lorem4">2</option>
                                            <option value="lorem4">3</option>
                                        </select>
                                        <span class="check-select-name">Tekrar Sonrası</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="meeting-plans-btn">
                <a href="#" class="btn-buy2 btn-bg-blue me-4">Toplantı Planla</a>
                <a href="#" class="btn-buy2 ">İptal Et</a>
            </div>
        </div>
        <div id="myModal" class="personal-popup">
            <div class="popup-modal-content">
                <div class="personal-popup-head">
                    <div class="personal-popup-title">Katılımcılar <span>(99)</span></div>
                    <div class="personal-popup-search-box d-flex align-items-center justify-content-between">
                        <div class="personal-popup-search">
                            <div class="personal-popup-search-item">
                                <input type="search" placeholder="Katılımcı Ara">
                                <span class="personal-popup-search-icon">
                                <img src="/src/assets/img/search.svg" alt="">
                            </span>
                            </div>
                        </div>
                        <div class="personal-popup-remove">
                            Tümünü Kaldır
                        </div>
                    </div>
                </div>
                <div class="personal-popup-content">
                    <div class="personal-popup-content-wrapper">
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/gizem.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Gizem Demir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/burak.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Burak Koç
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/mehmet.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Mehmet Yılmaz
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                        <div class="personal-popup-item d-flex align-items-center justify-content-between">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/user-avatar-filled.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Bilge Bilir
                                </div>
                            </div>
                            <div class="personal-remove">
                                Kaldır
                            </div>
                        </div>
                    </div>
                </div>
                <div class="personal-popup-footer">
                    <div class="user-invite-box d-flex align-items-center">
                        <div class="contact-input-box">
                            <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                                   required="required"/>
                            <label for="email">E-posta Adresiniz</label>
                            <span class="contact-blue"></span>
                        </div>
                        <div class="user-invite-iconx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                      d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z"
                                      transform="translate(0 -2.25)" fill="#007bff"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Plan.vue",
    data(){
      return {
          step : 1,
          checked : false
      }
    },
    methods: {

    },
    mounted() {
        $(document).ready(function () {

           var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");

btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


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
            var max_fields = 99; //maximum input boxes allowed
            var wrapper = $(".user-invite-items"); //Fields wrapper
            var add_button = $(".user-invite-icon"); //Add button ID

            var x = 1; //initlal text box count

        });
        $(function () {
            $('.agm-btn').click(function () {
                $(this).closest('.agm-btn').toggleClass('active');
            });
        });
        $(document).ready(function () {
            $(".ag-plans").click(function () {
                $(".ag-content").slideToggle(300);
            });
        });
    }

}
</script>

<style scoped>

</style>