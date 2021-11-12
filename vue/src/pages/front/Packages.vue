<template>
    <div class="main-packets">
        <div class="packets-head tab-system">
            <ul class="packet-tabs tabs">
                <li class="pt-tab tab-link tabs-item active" data-item="aylik">
                    <a href="#" class="btn-monts">Aylık</a>
                </li>
                <li class="pt-tab tab-link tabs-item" data-item="yillik">
                    <a href="#" class="btn-years">Yıllık</a>
                </li>
                <li class="pt-tab">
                    %<span class="text-hight">20</span
                ><span class="d-block">Kazançlı</span>
                </li>
            </ul>
            <div id="aylik" class="tab-monts tab-content active">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="packet-card personal">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>TEMEL</h3>
                                    <span>Kişisel</span>
                                </div>
                                <div class="card-head-right card-ticket">
                                    <span>%30 Tasarruflu</span>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">Ücretsiz</span>
                                <span class="c-date"></span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Kredi kartı bilgisi ve taahhüte gerek yok.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'register'}">
                                        <a href="#" class="btn-buy-xl">Ücretsiz Dene</a>
                                    </router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card business">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>KÜÇÜK İŞLETMELER</h3>
                                    <span>Business</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">₺69</span>
                                <span class="c-date">/Aylık/Lisans</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-buy-xl">Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card enterprise">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>BÜYÜK İŞLETMELER</h3>
                                    <span>Enterprise</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">₺89</span>
                                <span class="c-date">/Aylık/Lisans</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-buy-xl">Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card vimesoft">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>PREMİUM</h3>
                                    <span>Vimesoft</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-date">Şirketinize özel paketi oluşturmak için başvurun!</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                  <router-link :to="{name : 'premium'}">
                                        <a href="#" class="btn-buy-xl">İletişime Geçin</a>
                                   </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="yillik" class="tab-years tab-content">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="packet-card personal">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>TEMEL</h3>
                                    <span>Kişisel</span>
                                </div>
                                <div class="card-head-right card-ticket">
                                    <span>%30 Tasarruflu</span>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">Ücretsiz</span>
                                <span class="c-date"></span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Kredi kartı bilgisi ve taahhüte gerek yok.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'register'}">
                                        <a href="#" class="btn-buy-xl">Ücretsiz Dene</a>
                                    </router-link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card business">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>KÜÇÜK İŞLETMELER</h3>
                                    <span>Business</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">₺69</span>
                                <span class="c-date">/Aylık/Lisans</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-buy-xl">Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card enterprise">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>BÜYÜK İŞLETMELER</h3>
                                    <span>Enterprise</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-price pe-2">₺89</span>
                                <span class="c-date">/Aylık/Lisans</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-buy-xl">Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="packet-card vimesoft">
                            <div class="card-head d-flex justify-content-between">
                                <div class="card-head-left">
                                    <h3>PREMİUM</h3>
                                    <span>Vimesoft</span>
                                </div>
                                <div class="card-head-right">
                                    <div class="card-head-right card-ticket">
                                        <span>En Çok Tercih Edilen</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-prices">
                                <span class="c-date">Şirketinize özel paketi oluşturmak için başvurun!</span>
                            </div>
                            <div class="card-content">
                                <ul class="cart-ul">
                                    <li>Katılımcı Sayısı</li>
                                    <li>Eş Zamanlı Kamera Sayısı</li>
                                    <li>Toplantı Süresi</li>
                                    <li>Konferans Kaydı</li>
                                    <li>Mesajlaşma</li>
                                    <li>Not Alma</li>
                                    <li>Modülasyon ve Kullanıcı Yönetimi</li>
                                </ul>
                                <span class="optional">* Opsiyonel ek paketler alınabilir.</span>
                                <div class="cart-button">
                                   <router-link :to="{name : 'premium'}">
                                        <a href="#" class="btn-buy-xl">İletişime Geçin</a>
                                   </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="packet-plans">
            <div class="container-xxxl">
                <div class="plans-title d-flex align-items-center justify-content-center"
                     @click="showCompare = !showCompare">
                    <h2 class="me-3">Planların Karşılaştırması</h2>
                    <img src="src/assets/img/plans-plus.svg" alt=""/>
                </div>
                <transition name="slide">
                    <div class="plans-table" v-show="showCompare">
                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Kişisel</th>
                                <th>Business</th>
                                <th>Enterprise</th>
                                <th>Vimesoft</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>
                                    Lorem ipsum dolor sit <br/>
                                    amet consectetur
                                </td>
                                <td>Lorem ipsum dolor sit amet consectetur</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>
                                    Lorem ipsum dolor sit <br/>
                                    amet consectetur
                                </td>
                                <td>Lorem ipsum dolor sit amet consectetur</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/minus.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet</td>
                                <td><img src="src/assets/img/path1075.svg" alt=""/></td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <router-link :to="{name : 'register'}">
                                        <a href="#" class="btn-table-one">Ücretsiz Dene</a>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-table-two">Satın Al</a>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-table-two">Satın Al</a>
                                    </router-link>
                                </td>
                                <td>

                                    <router-link :to="{name : 'premium'}">
                                       <a href="#" class="btn-table-one">İletişime Geçin</a>
                                   </router-link>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </transition>
                <div class="plans-content">
                    <div class="plans-optional">
                        <h3>Opsiyonel Alımlar</h3>
                        <p>
                            Paketinize ek alımlar yaparak Vimesoft avantajları ve
                            hizmetlerinden daha fazla yararlanabilirsiniz. Paketinize ek
                            alabileceğiniz opsiyonları aşağıdan inceleyebilirsiniz.
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 col-12" v-for="item in this.activeAdditional" :key="item.name">
                            <div class="plans-box" :class="item.slug">
                                <div class="plans-box-title">
                                    <h3>{{ item.name }}</h3>
                                    <p>
                                        Ayda 6,99 TL’den başlayan fiyatlarla Konferans Katılımcı
                                        sayınızı arttırın.
                                    </p>
                                </div>
                                <div class="plans-box-content">
                                    <ul>
                                        <li>İhtiyacınız kadar kullanıcı seçebilme</li>
                                        <li>
                                            İstediğiniz zaman opsiyonel paketinizi iptal edebilme
                                            özelliği
                                        </li>
                                        <li>
                                            Aylık ve yıllık faturalandırma seçenekleri mevcuttur
                                        </li>
                                    </ul>
                                </div>
                                <div class="plans-box-btn">
                                    <router-link :to="{name : 'buyStart'}">
                                        <a href="#" class="btn-send">Satın Al</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <!--            <div class="col-xl-6 col-12">-->
                        <!--              <div class="plans-box two">-->
                        <!--                <div class="plans-box-title">-->
                        <!--                  <h3>Ek Kayıt Alanı</h3>-->
                        <!--                  <p>-->
                        <!--                    Ayda 10 TL’den başlayan fiyatlarla Kayıt alanınızı arttırın-->
                        <!--                    daha fazla veriyi saklayın.-->
                        <!--                  </p>-->
                        <!--                </div>-->
                        <!--                <div class="plans-box-content">-->
                        <!--                  <ul>-->
                        <!--                    <li>Daha uzun toplantılarınızı problemsiz kaydedin.</li>-->
                        <!--                    <li>-->
                        <!--                      Eski toplantı kayıtlarınızı silmeden yenilerini kaydetmeye-->
                        <!--                      devam edin-->
                        <!--                    </li>-->
                        <!--                    <li>-->
                        <!--                      Aylık ve yıllık faturalandırma seçenekleri mevcuttur-->
                        <!--                    </li>-->
                        <!--                  </ul>-->
                        <!--                </div>-->
                        <!--                <div class="plans-box-btn">-->
                        <!--                  <a href="#" class="btn-send">Satın Al</a>-->
                        <!--                </div>-->
                        <!--              </div>-->
                        <!--            </div>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="s_s_s">
            <div class="container-xxxl">
                <div class="sss-title">
                    <h3>Sıkça Sorulan Sorular (SSS)</h3>
                    <p>
                        Aşağıda, vimesoft.com adresinden çevrimiçi olarak satın alınabilen
                        Business, Enterprise ve VimeSoft planlarının satın alma süreci
                        hakkında sık sorulan sorular yer almaktadır. Başka sorularınız varsa
                        bizimle iletişime geçebilirsiniz.
                    </p>
                </div>
                <div class="tab-system">
                    <div class="sss-head">
                        <ul class="sss-tabs tabs d-flex align-items-center">
                            <li class="sss-link tabs-item active" data-item="kisisel">
                                Kişisel
                            </li>
                            <li class="sss-link tabs-item" data-item="business">Business</li>
                            <li class="sss-link tabs-item" data-item="enterprise">
                                Enterprise
                            </li>
                            <li class="sss-link tabs-item" data-item="vimesoft">Vimesoft</li>
                        </ul>
                    </div>
                    <div id="kisisel" class="sss-contents tab-content active">
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                    </div>
                    <div id="business" class="sss-contents tab-content">
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                    </div>
                    <div id="enterprise" class="sss-contents tab-content">
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                    </div>
                    <div id="vimesoft" class="sss-contents tab-content">
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
                            </div>
                        </div>
                        <div class="sss-content-box">
                            <div
                                class="sss-content-box-title d-flex align-items-center justify-content-between"
                            >
                                <h4>Lisanslı Kullanıcı ve Katılımcı Nedir?</h4>
                                <img src="src/assets/img/plans-plus.svg" alt=""/>
                            </div>
                            <div class="sss-content-box-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore dolorum eum magnam atque soluta odit non
                                necessitatibus sequi optio molestias.
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
import carousel from "vue-owl-carousel";

export default {
    data() {
        return {
            items: [],
            showCompare: false
        };
    },
    components: {carousel},

    computed: {
        activeMeetings: function () {
            return this.items.filter(function (item) {
                return item.status == "ACTIVE" && item.package_type == "MEETING";
            });
        },
        activeAdditional: function () {
            return this.items.filter(function (item) {
                return item.status == "ACTIVE" && item.package_type == "ADDITIONAL_SERVICE";
            });
        },
    },
    mounted() {
        $(document).ready(function () {
            $('.tab-system .tabs .tabs-item').click(function () {
                var tab_id = $(this).attr('data-item');
                $(this).closest(".tabs").find(".tabs-item").removeClass('active');
                $(this).closest(".tab-system").find('.tab-content').removeClass('active');

                $(this).addClass('active');
                $(this).closest(".tab-system").find("#" + tab_id).addClass('active');
            })
        })
        $('.owl-carousel').owlCarousel({
            // rewind: true,
            margin: 37,
            // responsiveClass: true,
            smartSpeed: 800,
            nav: true,
            loop: true,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3.7
                }
            },
            onInitialized: function () {
                if ($('.owl-item').first().hasClass('active'))
                    $('.owl-prev').hide();
                else
                    $('.owl-prev').show();
            }
        })
    },
    created() {
        axios.get("http://37.75.13.158/v1/package/list").then((response) => {
            let data = response.data.data.items;
            for (let key in data) {
                this.items.push({...data[key], id: key});
            }
        });
    },
};
</script>
