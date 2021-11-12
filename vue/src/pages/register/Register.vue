<template>
    <div class="meeting-plans-wrapper pb-5">
        <div class="my-account-title setting-title mb-md-5 mb-4">
            <div class="packet-path-all d-flex align-items-center">
                <div class="packet-path">
                    <div class="path-item">
                        <span class="path-span active" v-show = "step==1"></span>
                        <span class="path-span success" v-show="step >= 2"></span>

                        <div class="path-name">Paket Seçimi</div>
                    </div>
                    <div class="path-item"><span class="path-span" v-show="step==1"></span>
                                            <span class="path-span active" v-show = "step==2"></span>
                        <span class="path-span success" v-show="step >= 3"></span>

                        <div class="path-name">Hesap Oluştur</div>
                    </div>
                    <div class="path-item">
                        <span class="path-span" v-show="step==1 || step == 2"></span>
                          <span class="path-span active" v-show = "step==3"></span>
                        <span class="path-span success" v-show="step >= 4"></span>
                        <div class="path-name">Ödeme</div>
                    </div>
                    <div class="path-item">
                         <span class="path-span" v-show="step==1 || step == 2 || step == 3"></span>
                        <span class="path-span success" v-show="step == 4"></span>
                        <div class="path-name">Gözden Geçir</div>
                    </div>
                </div>
                <div class="chosen-packets">
                    <div class="chosen-sell-icon">
                        <div class="chosen-img">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.64" height="29.385"
                                     viewBox="0 0 30.64 29.385">
                                    <g id="shopping-cart-solid" transform="translate(-2.7 -2.615)">
                                        <path id="Path_1092" data-name="Path 1092"
                                              d="M16,29.5A2.5,2.5,0,1,1,13.5,27,2.5,2.5,0,0,1,16,29.5Z" fill="#fff"/>
                                        <path id="Path_1093" data-name="Path 1093"
                                              d="M29,29.5A2.5,2.5,0,1,1,26.5,27,2.5,2.5,0,0,1,29,29.5Z" fill="#fff"/>
                                        <path id="Path_1094" data-name="Path 1094"
                                              d="M33.1,6.39A1,1,0,0,0,32.31,6H9.21L8.76,4.57a1,1,0,0,0-.66-.65L4,2.66a1,1,0,1,0-.59,1.92L7,5.68l4.58,14.47L9.95,21.49l-.13.13A2.66,2.66,0,0,0,9.74,25,2.75,2.75,0,0,0,12,26H28.69a1,1,0,0,0,0-2H11.84a.67.67,0,0,1-.56-1l2.41-2H29.12a1,1,0,0,0,1-.76l3.2-13a1,1,0,0,0-.22-.85Z"
                                              fill="#fff"/>
                                    </g>
                                </svg>
                                <span>3</span>
                            </div>
                        </div>
                        <div class="chosen-text">
                            Seçilen Paketler
                        </div>
                        <div class="path-popx">
                            <div class="p-sp"><span></span></div>
                            <div class="path-popup-title">Seçilen Ürünler</div>
                            <div class="path-popup-flex d-flex align-items-center justify-content-between">
                                <div class="path-popup-item">
                                    <div class="pp-tt">Business</div>
                                    <div class="delete p-0">Düzenle</div>
                                </div>
                                <div class="path-popup-item">
                                    <div><b>₺69</b> Aylık</div>
                                    <div class="delete p-0">Sil</div>
                                </div>
                            </div>
                            <div class="path-popup-flex d-flex align-items-center justify-content-between">
                                <div class="path-popup-item">
                                    <div class="pp-tt">Konferans Katılımcısı<span>(25)</span></div>
                                    <div class="delete p-0">Düzenle</div>
                                </div>
                                <div class="path-popup-item">
                                    <div><b>₺29</b> Aylık</div>
                                    <div class="delete p-0">Sil</div>
                                </div>
                            </div>
                            <div class="path-popup-flex x d-flex align-items-center justify-content-between">
                                <div class="path-popup-item">
                                    <div class="pp-tt">Ek Kayıt Alanı<span>(50GB)</span></div>
                                    <div class="delete p-0">Düzenle</div>
                                </div>
                                <div class="path-popup-item">
                                    <div><b>₺400</b> Aylık</div>
                                    <div class="delete p-0">Sil</div>
                                </div>
                            </div>
                            <div class="delete pb-4 pt-4 text-end">Tümünü Sil</div>
                            <div class="contact-input-box">
                                <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                       required="required"/>
                                <label for="lname">İndirim Kodu</label>
                            </div>
                            <hr>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <div class="pp-tt">Genel Toplam</div>
                                <div class="px-t"><b>₺498</b> Aylık</div>
                            </div>
                            <div class="path-popup-btn">
                                <a href="#" class="btn-buy2 d-block btn-bg-blue pt-3 pb-3 mb-3 ">Ödeme İşlemine Geç</a>
                                <a href="#" class="btn-buy2 d-block pt-3 pb-3 path-share">Seçilen Ürünleri Paylaş</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="account-content">
            <div class="account-packets-hide">
                <transition name="fade" mode="out-in">
                    <div id="ek_a" v-show="step == 1">
                        <div class="extra-buy">
                            <div class="extra-room">
                                <div class="extra-buy-title owned-span">
                                    <span class="path-number">1</span> Paket seçin.
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="extra-buy-packet">
                                        <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                            <div class="eh-text path-t">Business</div>
                                        </div>
                                        <div class="extra-note pb-2">25 Katılımcı</div>
                                        <div class="extra-price d-flex align-items-center">
                                            <div class="path-price">₺69<span class="path-price-span">Aylık</span></div>
                                            <div class="path-price">₺588<span class="path-price-span">Yıllık</span>
                                            </div>
                                        </div>
                                        <div class="path-tick"></div>
                                    </div>
                                    <div class="extra-buy-packet">
                                        <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                            <div class="eh-text path-t">Enterprise</div>
                                        </div>
                                        <div class="extra-note pb-2">200 Katılımcı</div>
                                        <div class="extra-price d-flex align-items-center">
                                            <div class="path-price">₺89<span class="path-price-span">Aylık</span></div>
                                            <div class="path-price">₺828<span class="path-price-span">Yıllık</span>
                                            </div>
                                        </div>
                                        <div class="path-tick"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="extra-subs">
                                <div class="extra-buy-title owned-span">
                                    <span class="path-number">2</span> Abonelik yenileme sürenizi seçin.
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="extra-buy-packet">
                                        <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                            <div class="eh-text">Aylık</div>
                                        </div>
                                        <div class="extra-price d-flex align-items-center pb-2">
                                            <span class="c-price pe-2">₺69</span>
                                            <span class="c-date">/Aylık/Lisans</span>
                                        </div>
                                        <div class="extra-note pb-2">Aylık Faturalandırılır.</div>
                                    </div>
                                    <div class="extra-buy-packet">
                                        <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                            <div class="eh-text">6 Aylık</div>
                                            <div class="card-ticket">
                                                <span>%15 Tasarruflu</span>
                                            </div>
                                        </div>
                                        <div class="extra-price d-flex align-items-center pb-2">
                                            <span class="c-price pe-2">₺59</span>
                                            <span class="c-date">/Aylık/Lisans</span>
                                        </div>
                                        <div class="extra-note pb-2">6 Ayda ₺354 faturalandırılır.</div>
                                    </div>
                                    <div class="extra-buy-packet">
                                        <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                            <div class="eh-text">Yıllık</div>
                                            <div class="card-ticket">
                                                <span>%30 Tasarruflu</span>
                                            </div>
                                        </div>
                                        <div class="extra-price d-flex align-items-center pb-2">
                                            <span class="c-price pe-2">₺49</span>
                                            <span class="c-date">/Aylık/Lisans</span>
                                        </div>
                                        <div class="extra-note pb-2">Yıllık ₺588 faturalandırılır.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="extra-regist tab-system">
                                <div class="extra-buy-title owned-span mb-4">
                                    <span class="path-number">?</span> Opsiyonel alımlar.
                                </div>
                                <div class="d-flex flex-wrap tabs">
                                    <div class="extra-buy-packet text-center tabs-item" data-item="k_katilimcisi">
                                        <div class="extra-head pb-2">
                                            <img src="img/add-user.svg" alt="">
                                        </div>
                                        <div class="eh-text">Konferans Katılımcısı</div>
                                    </div>
                                    <div class="extra-buy-packet text-center tabs-item" data-item="ek_kayit">
                                        <div class="extra-head pb-3">
                                            <img src="img/cloudy.svg" alt="">
                                        </div>
                                        <div class="eh-text">Ek Kayıt Alanı</div>
                                    </div>
                                </div>
                                <div id="k_katilimcisi" class="tab-content">
                                    <div class="kk-head">
                                        <div class="extra-buy-title owned-span mb-2 pt-5">
                                            Konferans Katılımcısı
                                        </div>
                                        <p>
                                            Paketinize ek olarak daha fazla konferans katılımcısına ihtiyacınız varsa
                                            ayda 29 TL’den başlayan fiyatlarla size uygun ek paketi alabilirsiniz.
                                            Opsiyonel paketinizi daha sonra istediğiniz zaman iptal edebilirsiniz.
                                        </p>
                                    </div>
                                    <div class="kk-main">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">1</span> Konferans Katılımcısı Miktarı
                                        </div>
                                        <p class="ps-5 pb-5">
                                            İhtiyacınıza uygun paketi aşağıdan seçebilirsiniz.
                                        </p>
                                        <div class="kk-main-p d-flex flex-wrap">
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">25 Katılımcı</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺29</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">50 Katılımcı</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺49</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">100 Katılımcı</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺80</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="ek_kayit" class="tab-content">
                                    <div class="kk-head">
                                        <div class="extra-buy-title owned-span mb-2 pt-5">
                                            Ek Kayıt Alanı
                                        </div>
                                        <p>
                                            Paketinize ek olarak alabileceğiniz Ek Kayıt Alanı ile tüm toplantılarınızı
                                            bilgisayarınızda alan harcamadan kolay ve hızlı bir şekilde Vimesoft
                                            hesabınızda tutabilirsiniz. Paketinizi istediğiniz zaman iptal edebilir veya
                                            Kayıt alanınızı arttırabilirsiniz.
                                        </p>
                                    </div>
                                    <div class="kk-main">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">1</span> Ek Kayıt Alanı Paketleri
                                        </div>
                                        <p class="ps-5 pb-5">
                                            Paketinize ek olarak alabileceğiniz Ek Kayıt Alanı ile tüm toplantılarınızı
                                            bilgisayarınızda alan harcamadan kolay ve hızlı bir şekilde Vimesoft
                                            hesabınızda tutabilirsiniz. Paketinizi istediğiniz zaman iptal edebilir veya
                                            Kayıt alanınızı arttırabilirsiniz.
                                        </p>
                                        <div class="kk-main-p d-flex flex-wrap">
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">1 GB</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺9</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">5 GB</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺40</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">10 GB</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺80</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                            <div class="extra-buy-packet">
                                                <div
                                                    class="extra-head d-flex align-items-center justify-content-between pb-2">
                                                    <div class="eh-text">50 GB</div>
                                                </div>
                                                <div class="extra-price d-flex align-items-center pb-2">
                                                    <span class="c-price pe-2">₺400</span>
                                                    <span class="c-date">/Aylık</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="contact-check-box d-flex mt-md-5 mt-4">
                                    <input type="checkbox" class="checkbox" id="condition" name="condition"
                                           value="condition">
                                    <label for="condition">Katılım Koşulları'nı Onaylıyorum.</label>
                                </div>
                                <div class="path-btns">
                                    <a href="#" class="btn-cancel me-md-4 me-3">İptal</a>
                                    <a v-on:click="step = 2" class="btn-send">Devam Et</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>

                <transition name="fade" mode="out-in">
                    <div id="ek_a2" v-show="step == 2 ">
                        <div class="extra-room pe-xl-0 ps-xl-0 pe-3 ps-3 pt-xl-0 pt-3" >
                            <div class="d-flex align-items-center border-bottom pb-4">
                                <div class="owned-span create pe-xl-4 pe-0">Hesap Oluşturun</div>
                                <div><span class="extra-note ps-xl-0 ps-2">Hesabınız varsa</span>
                                    <router-link :to="{name: 'login'}">
                                        <a
                                                                                                     class="delete p-0">Giriş
                                    Yapın</a>
                                    </router-link>
                                </div>
                            </div>
                            <div class="pt-4 pb-xl-5 pb-4">
                                <div class="extra-buy-title owned-span mb-2">
                                    <span class="path-number">1</span> Paket seçin.
                                </div>
                                <p class="ps-xl-5 ps-0">Ücretsiz hesabınızı hızlı ve kolay bir şekilde oluşturun ve
                                    Vime’in hizmetlerinden yararlanmaya başlayın.</p>
                            </div>
                            <div class="col-md-5 col-12  pt-4 pb-xl-5 pb-4">
                                <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                    <div class="contact-input-box">
                                        <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                               required="required">
                                        <label for="fname">Adınız</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                    <div class="contact-input-box">
                                        <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                               required="required">
                                        <label for="lname">Soyadınız</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                </div>
                                <div class="contact-input-box">
                                    <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                                           required="required">
                                    <label for="email">E-posta Adresiniz</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box">
                                    <input type="password" class="form-input" id="sifre" name="sifre"
                                           required="required" autocomplete="off">
                                    <label for="sifre">Şifrenizi Oluşturun</label>
                                    <span class="contact-blue"></span>
                                </div>
                            </div>
                            <div class="contact-check-box ">
                                <div class="extra-note pb-4">
                                    Aşağıdaki devam et butonuna tıkladığınızda <a href="#" class="delete p-0">Gizlilik
                                    Bildirimini</a> ve <a href="#" class="delete p-0">Hizmet Şartlarını</a> kabul etmiş
                                    olursunuz.
                                </div>
                                <div class="create-btns">
                                    <a href="#" class="btn-cancel me-md-4 me-3">İptal</a>
                                    <button v-on:click="step = 3" class="btn-send">Devam Et</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </transition>
                <transition name="fade" mode="out-in">
                       <div class="extra-room pe-xl-0 ps-xl-0 pe-3 ps-3 pt-xl-0 pt-3 tab-system" v-show ="step == 3">
                                <div class="tabs border-bottom pb-4">
                                    <ul>
                                        <li class="tabs-item btn-buy2 active me-md-4 me-2" data-item="sahis">Şahıs</li>
                                        <li class="tabs-item btn-buy2" data-item="sirket">Şirket</li>
                                    </ul>
                                </div>
                                <div id="sahis" class="tab-content active">
                                    <div class="pt-4 pb-xl-5 pb-4">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">1</span> Fatura Bilgileri
                                        </div>
                                        <p class="ps-xl-5 ps-0">Faturayı veya ödeme bilgilerinin iletileceği şahıs veya şirket bilgilerinizi doldurun.</p>
                                    </div>
                                    <div class="border-bottom">
                                        <div class="col-md-5 col-12">
                                            <div class="contact-input-box">
                                                <input type="tc" class="form-input" id="tc" name="tc" autocomplete="off" required="required">
                                                <label for="tc">TC Kimlik Nonuz</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                    <label for="fname">Adınız</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="lname" name="lname" autocomplete="off" required="required">
                                                    <label for="lname">Soyadınız</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="email" class="form-input" id="email" name="email" autocomplete="off" required="required">
                                                <label for="email">E-posta Adresiniz</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="adress" class="form-input" id="adress" name="adress" autocomplete="off" required="required">
                                                <label for="adress">Adresiniz</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-xl-6">
                                                    <div class="time-period-plans  me-xl-4">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">İstanbul</option>
                                                                <option value="lorem4">Ankara</option>
                                                                <option value="lorem4">İzmir</option>
                                                                <option value="lorem4">Antalya</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">İstanbul</li><li data-index="2" class="">Ankara</li><li data-index="3" class="">İzmir</li><li data-index="4" class="last">Antalya</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">İl</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="time-plans">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">Bağcılar</option>
                                                                <option value="lorem4">Kadıköy</option>
                                                                <option value="lorem4">Beşiktaş</option>
                                                                <option value="lorem4">Esenler</option>
                                                                <option value="lorem4">Tuzla</option>
                                                                <option value="lorem4">Levent</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">Bağcılar</li><li data-index="2" class="">Kadıköy</li><li data-index="3" class="">Beşiktaş</li><li data-index="4" class="">Esenler</li><li data-index="5" class="">Tuzla</li><li data-index="6" class="last">Levent</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">İlçe</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-xl-6">
                                                    <div class="time-period-plans  me-xl-4">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">Türkiye</option>
                                                                <option value="lorem4">Dakka</option>
                                                                <option value="lorem4">Bangladeş</option>
                                                                <option value="lorem4">Papua Yeni Gine</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">Türkiye</li><li data-index="2" class="">Dakka</li><li data-index="3" class="">Bangladeş</li><li data-index="4" class="last">Papua Yeni Gine</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">Ülke</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="contact-input-box">
                                                        <input type="pk" class="form-input" id="pk" name="pk" autocomplete="off" required="required">
                                                        <label for="pk">Posta Kodunuz</label>
                                                        <span class="contact-blue"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pt-4 pb-xl-5 pb-4">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">2</span> Kredi Kartı ve Ödeme Bilgileri
                                        </div>
                                        <p class="ps-xl-5 ps-0">Ödeme yapacağınız kredi kartı bilgilerini giriniz. </p>
                                    </div>
                                    <div class="credit-card-info">
                                        <div class="col-md-5 col-12">
                                            <div class="contact-input-box">
                                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                <label for="fname">Kart Sahibinin Adı, Soyadı</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                <label for="fname">Kart Numarası</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-box-flex row g-0 align-items-center">
                                                <div class="time-period-plans col-md-3 col-6 pe-3">
                                                    <label class="spe-select  mb-4">
                                                        <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
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
                                                        </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">1</li><li data-index="2" class="">2</li><li data-index="3" class="">3</li><li data-index="4" class="">4</li><li data-index="5" class="">1</li><li data-index="6" class="">2</li><li data-index="7" class="">3</li><li data-index="8" class="">4</li><li data-index="9" class="">1</li><li data-index="10" class="">2</li><li data-index="11" class="">3</li><li data-index="12" class="last">4</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                        <span class="check-select-name">Ay</span>
                                                    </label>
                                                </div>
                                                <div class="time-period-plans col-md-3 col-6 pe-md-3 pe-0">
                                                    <label class="spe-select  mb-4">
                                                        <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                            <option value=""></option>
                                                            <option value="lorem4">21</option>
                                                            <option value="lorem4">22</option>
                                                            <option value="lorem4">23</option>
                                                            <option value="lorem4">24</option>
                                                            <option value="lorem4">25</option>
                                                        </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">21</li><li data-index="2" class="">22</li><li data-index="3" class="">23</li><li data-index="4" class="">24</li><li data-index="5" class="last">25</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                        <span class="check-select-name">Yıl</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="contact-input-box mb-4 me-0">
                                                        <input type="text" class="form-input" id="lname" name="lname" autocomplete="off" required="required">
                                                        <label for="lname">CCV Kodu</label>
                                                        <span class="contact-blue"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="contact-check-box d-flex mt-3">
                                                <input type="checkbox" class="checkbox" id="condition" name="condition" value="condition">
                                                <label for="condition">Her Ay Otomatik Yenileme Talimatı</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact-check-box ">
                                        <div class="create-btns">
                                            <a href="#" class="btn-cancel me-md-4 me-3">İptal</a>
                                            <a v-on:click="step = 4"class="btn-send">Devam Et</a>
                                        </div>
                                    </div>
                                </div>
                                    <div id="sirket" class="tab-content" >
                                    <div class="pt-4 pb-xl-5 pb-4">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">1</span> Fatura Bilgileri
                                        </div>
                                        <p class="ps-xl-5 ps-0">Faturayı veya ödeme bilgilerinin iletileceği şahıs veya şirket bilgilerinizi doldurun.</p>
                                    </div>
                                    <div class="border-bottom">
                                        <div class="col-md-5 col-12">
                                            <div class="contact-input-box">
                                                <input type="tc" class="form-input" id="tc" name="tc" autocomplete="off" required="required">
                                                <label for="tc">Şirketinizin Adı</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                    <label for="fname">Adınız</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="lname" name="lname" autocomplete="off" required="required">
                                                    <label for="lname">Soyadınız</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                            </div>
                                            <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                    <label for="fname">Vergi No</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                                <div class="contact-input-box">
                                                    <input type="text" class="form-input" id="lname" name="lname" autocomplete="off" required="required">
                                                    <label for="lname">Vergi Dairesi</label>
                                                    <span class="contact-blue"></span>
                                                </div>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="email" class="form-input" id="email" name="email" autocomplete="off" required="required">
                                                <label for="email">E-posta Adresiniz</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="adress" class="form-input" id="adress" name="adress" autocomplete="off" required="required">
                                                <label for="adress">Adresiniz</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="time-period-plans">
                                                <label class="spe-select">
                                                    <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                        <option value=""></option>
                                                        <option value="lorem4">5-10</option>
                                                        <option value="lorem4">50-100</option>
                                                        <option value="lorem4">100-250</option>
                                                        <option value="lorem4">250-500</option>
                                                        <option value="lorem4">50-100</option>
                                                        <option value="lorem4">100-250</option>
                                                        <option value="lorem4">250-500</option>
                                                    </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">5-10</li><li data-index="2" class="">50-100</li><li data-index="3" class="">100-250</li><li data-index="4" class="">250-500</li><li data-index="5" class="">50-100</li><li data-index="6" class="">100-250</li><li data-index="7" class="last">250-500</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                    <span class="check-select-name">Şirketinizdeki Toplam Çalışan Sayısı</span>
                                                </label>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-xl-6">
                                                    <div class="time-period-plans  me-xl-4">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">İstanbul</option>
                                                                <option value="lorem4">Ankara</option>
                                                                <option value="lorem4">İzmir</option>
                                                                <option value="lorem4">Antalya</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">İstanbul</li><li data-index="2" class="">Ankara</li><li data-index="3" class="">İzmir</li><li data-index="4" class="last">Antalya</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">İl</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="time-plans">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">Bağcılar</option>
                                                                <option value="lorem4">Kadıköy</option>
                                                                <option value="lorem4">Beşiktaş</option>
                                                                <option value="lorem4">Esenler</option>
                                                                <option value="lorem4">Tuzla</option>
                                                                <option value="lorem4">Levent</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">Bağcılar</li><li data-index="2" class="">Kadıköy</li><li data-index="3" class="">Beşiktaş</li><li data-index="4" class="">Esenler</li><li data-index="5" class="">Tuzla</li><li data-index="6" class="last">Levent</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">İlçe</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-xl-6">
                                                    <div class="time-period-plans  me-xl-4">
                                                        <label class="spe-select">
                                                            <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                                <option value=""></option>
                                                                <option value="lorem4">Türkiye</option>
                                                                <option value="lorem4">Dakka</option>
                                                                <option value="lorem4">Bangladeş</option>
                                                                <option value="lorem4">Papua Yeni Gine</option>
                                                            </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">Türkiye</li><li data-index="2" class="">Dakka</li><li data-index="3" class="">Bangladeş</li><li data-index="4" class="last">Papua Yeni Gine</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                            <span class="check-select-name">Ülke</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6">
                                                    <div class="contact-input-box">
                                                        <input type="pk" class="form-input" id="pk" name="pk" autocomplete="off" required="required">
                                                        <label for="pk">Posta Kodunuz</label>
                                                        <span class="contact-blue"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pt-4 pb-xl-5 pb-4">
                                        <div class="extra-buy-title owned-span mb-2">
                                            <span class="path-number">2</span> Kredi Kartı ve Ödeme Bilgileri
                                        </div>
                                        <p class="ps-xl-5 ps-0">Ödeme yapacağınız kredi kartı bilgilerini giriniz. </p>
                                    </div>
                                    <div class="credit-card-info">
                                        <div class="col-md-5 col-12">
                                            <div class="contact-input-box">
                                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                <label for="fname">Kart Sahibinin Adı, Soyadı</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-input-box">
                                                <input type="text" class="form-input" id="fname" name="fname" autocomplete="off" required="required">
                                                <label for="fname">Kart Numarası</label>
                                                <span class="contact-blue"></span>
                                            </div>
                                            <div class="contact-box-flex row g-0 align-items-center">
                                                <div class="time-period-plans col-md-3 col-6 pe-3">
                                                    <label class="spe-select  mb-4">
                                                        <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
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
                                                        </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">1</li><li data-index="2" class="">2</li><li data-index="3" class="">3</li><li data-index="4" class="">4</li><li data-index="5" class="">1</li><li data-index="6" class="">2</li><li data-index="7" class="">3</li><li data-index="8" class="">4</li><li data-index="9" class="">1</li><li data-index="10" class="">2</li><li data-index="11" class="">3</li><li data-index="12" class="last">4</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                        <span class="check-select-name">Ay</span>
                                                    </label>
                                                </div>
                                                <div class="time-period-plans col-md-3 col-6 pe-md-3 pe-0">
                                                    <label class="spe-select  mb-4">
                                                        <div class="selectric-wrapper selectric-selectric-select"><div class="selectric-hide-select"><select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured="" tabindex="-1">
                                                            <option value=""></option>
                                                            <option value="lorem4">21</option>
                                                            <option value="lorem4">22</option>
                                                            <option value="lorem4">23</option>
                                                            <option value="lorem4">24</option>
                                                            <option value="lorem4">25</option>
                                                        </select></div><div class="selectric"><span class="label"></span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected"></li><li data-index="1" class="">21</li><li data-index="2" class="">22</li><li data-index="3" class="">23</li><li data-index="4" class="">24</li><li data-index="5" class="last">25</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
                                                        <span class="check-select-name">Yıl</span>
                                                    </label>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <div class="contact-input-box mb-4 me-0">
                                                        <input type="text" class="form-input" id="lname" name="lname" autocomplete="off" required="required">
                                                        <label for="lname">CCV Kodu</label>
                                                        <span class="contact-blue"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="contact-check-box d-flex mt-3">
                                                <input type="checkbox" class="checkbox" id="condition" name="condition" value="condition">
                                                <label for="condition">Her Ay Otomatik Yenileme Talimatı</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact-check-box ">
                                        <div class="create-btns">
                                            <a href="#" class="btn-cancel me-md-4 me-3">İptal</a>
                                            <button v-on:click="step = 4" class="btn-send">Devam Et</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </transition>
                <transition name="fade" mode="out-in">
                    <div class="col-md-9 col-12 pt-4 pb-4" v-show="step == 4">
                    <div class="success-payment mb-5">
                        <div class="success-payment-head">
                            <img src="img/bxs-like.svg" alt="">
                            <div class="success-payment-title pt-4 pb-xl-5 pb-4">
                                Ödemeniz başarılı bir şekilde alındı.
                            </div>
                        </div>
                        <div class="success-payment-main">
                            <div class="path-popup-title sc-py">Alınan Ürün Detayları</div>
                            <div class="path-popup-flex d-flex align-items-center justify-content-between">
                                <div class="path-popup-item"><div class="pp-tt">Business</div></div>
                                <div class="path-popup-item"><div><b>₺69</b> Aylık</div></div>
                            </div>
                            <div class="path-popup-flex d-flex align-items-center justify-content-between">
                                <div class="path-popup-item"><div class="pp-tt">Konferans Katılımcısı<span>(25)</span></div></div>
                                <div class="path-popup-item"><div><b>₺29</b> Aylık</div></div>
                            </div>
                            <div class="path-popup-flex x d-flex align-items-center justify-content-between">
                                <div class="path-popup-item"><div class="pp-tt">Ek Kayıt Alanı<span>(50GB)</span></div></div>
                                <div class="path-popup-item"><div><b>₺400</b> Aylık</div></div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-4 pt-4">
                                <div class="pp-tt">Genel Toplam</div>
                                <div class="px-t"><b>₺498</b> Aylık</div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 align-items-center justify-content-between">
                        <div class="col-md-6 col-12">
                            <div class="meeting-span-text mb-0">
                                Ödemeniz başarılı şekilde alındı. Artık hazırsınız. İlk toplantınızı oluşturabilir, ekibinizi kurabilirsiniz.
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="create-btns text-md-end text-start">
                                <a href="#" class="btn-cancel me-md-4 me-3">Ana Sayfa</a>
                               <router-link :to="{name : 'login'}">
                                    <a  class="btn-send">Giriş Yap</a>
                               </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>
            </div>
        </div>
    </div>

</template>

<script>
import FirstCategory from './modules/firstCategory';
import Renewable from './modules/Renewable';
import Additional from './modules/Additional';

export default {
    data() {
        return {
            step: 1,
        }
    },
    components: {
        FirstCategory,
        Renewable,
        Additional
    },
    mounted() {

        $(function () {
            $('.extra-buy-packet').click(function(){
                $(this).closest('.extra-buy-packet').toggleClass('active');
            });
            $('.extra-buy-packet').click(function(){
                $(this).closest('.extra-buy-packet').find('.path-tick').toggleClass('active');
            });
            $('.chosen-img').click(function(){
                $(this).closest('.chosen-sell-icon').find('.path-popx').toggleClass('active');
            });
        });

        $(document).ready(function(){
	$('.tab-system .tabs .tabs-item').click(function(){
		var tab_id = $(this).attr('data-item');
		$(this).closest(".tabs").find(".tabs-item").removeClass('active');
		$(this).closest(".tab-system").find('.tab-content').removeClass('active');

		$(this).addClass('active');
		$(this).closest(".tab-system").find("#"+tab_id).addClass('active');
	})
})

    }
}
</script>

<style>
.sticky-menu {
    display:none
}
.dashboardHomeButton {
    display:none
}
.headerHomeButton {
    display:block
}
</style>