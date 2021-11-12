<template>
    <div class="meeting-plans-wrapper tabs pb-5" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
        <div class="user-panel-title">
            <h1>Selam, <span>{{ $store.state.accountInformation[0].account }}.</span></h1>
            <p>İlk toplantını oluşturmak için her şey hazır! </p>
        </div>
        <div class="contact-box2 mb-4">
            <div class="my-meeting-toptitle align-items-center">
                <div class="my-meeting-head-0">
                    <div class="spe-select spe-proid mb-0">
                        <DatePicker></DatePicker>
                        <span class="personal-popup-search-icon">
                                    <img src="/src/assets/img/calendar-range.svg" alt="">
                                </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-box">
            <div class="meeting-box-content-title pb-5">
                <h1 class="mb-2">Ücretsiz Deneme Paketinde Raporlara Erişim Yetkiniz Bulunmamaktadır. </h1>
                <div class="meeting-box-date pb-xl-5"><span>Raporlama ve Analitik Özellikleri Sadece Ücretli Aboneler Tarafından Kullanılabilir.</span>
                </div>
            </div>
        </div>
    </div>
    <div class="meeting-plans-wrapper tabs pb-5" v-else>
        <div class="user-panel-title">
            <h1>Selam, <span>Onur.</span></h1>
            <p>Tüm toplantılarını takip et!</p>
        </div>

        <div class="contact-box2 mtr">
            <div class="my-meeting-toptitle align-items-center">
                <div class="my-meeting-head-left">
                    <a href="#t_rapor" class="btn-buy2 active">Toplantı Raporu</a>
                    <span class="btn-buy2">Kişisel Rapor</span>
                    <a href="#istatistik" class="btn-buy2">İstatistikler</a>
                </div>
                <div class="my-meeting-head-right">
                    <div class="date-plans my-head-right-item2">
                        <div class="spe-select spe-proid mb-0">
                            <DatePicker></DatePicker>
                            <span class="personal-popup-search-icon">
                                        <img src="/src/assets/img/calendar-range.svg" alt="">
                                    </span>
                        </div>
                    </div>
                    <div
                        class="personal-popup-search my-head-right-item3 d-flex align-items-center justify-content-around">
                        <div class="personal-popup-search-item">
                            <input type="search" placeholder="Başlık Arama">
                            <span class="personal-popup-search-icon">
                                        <img src="/src/assets/img/search.svg" alt="">
                                    </span>
                        </div>
                        <div class="by-date">
                            <img src="/src/assets/img/listalt.svg" alt="">
                            <div class="by-date-pop">
                                <div class="colm-items">
                                    <div class="colm">Artan Tarihe Göre Sırala</div>
                                    <div class="colm">Azalan Tarihe Göre Sırala</div>
                                    <div class="colm">A'dan Z'ye Sırala</div>
                                    <div class="colm">Z'den A'ya Sırala</div>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="t_rapor" class="tabf mtr2-rapor active">
            <div class="contact-box" v-show="!routed">
                        <div class="plans-table_x mtr">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Toplantı Adı</th>
                                        <th>Toplantı ID</th>
                                        <th>Tarih</th>
                                        <th>Süre</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="#" class="mtr-link">May Siber Test</a></td>
                                        <td>473 943 134</td>
                                        <td>05.11.2020</td>
                                        <td>125 MB</td>
                                        <td><span class="s-detail" v-on:click="routed = true">Detaylı İncele</span></td>
                                        <td><a href="#" class="delete dl">Sil</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#" class="mtr-link">Ali Baba</a></td>
                                        <td>313 413 131</td>
                                        <td>02.11.2020</td>
                                        <td>175 MB</td>
                                        <td><span class="s-detail" v-on:click="routed = true">Detaylı İncele</span></td>
                                        <td><a href="#" class="delete dl">Sil</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            <div class="contact-box" v-show="routed">
                <div class="mtr-2">
                    <div class="owned-span">May Siber Test Toplantı Raporu</div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Tarih</div>
                        <div class="mtr2-item">22 Ekim 2020 - Perşembe 11:00 am - 11:45 am</div>
                    </div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Toplantı ID</div>
                        <div class="mtr2-item">759 491 938</div>
                    </div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Toplantı İçerisindeki Toplam Kullanıcı Sayısı</div>
                        <div class="mtr2-item">15</div>
                    </div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Toplantı İçerisindeki Toplam Aktif Kullanıcı Sayısı (Kamera
                            Görüntü Paylaşımı)
                        </div>
                        <div class="mtr2-item">8</div>
                    </div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Toplam Toplantı Süresi</div>
                        <div class="mtr2-item">35 Dk</div>
                    </div>
                    <div class="mtr-flex d-flex align-items-center justify-content-between">
                        <div class="mtr2-item mtr2-text">Toplam Kayıt Süresi</div>
                        <div class="mtr2-item">18 Dk</div>
                    </div>
                </div>
                <div class="meeting-box-invite-personal mb-3">
                    <h3 class="meeting-box-invite-personal-title pb-3">Katılımcılar<span>(6)</span></h3>
                    <div class="invite-personal align-items-center d-flex flex-wrap">
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/gizem.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Gizem Demir
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/burak.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Burak Koç
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/mehmet.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Mehmet Yılmaz
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/gizem.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Gizem Demir
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/burak.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Burak Koç
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/mehmet.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Mehmet Yılmaz
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <a href="" class="btn-buy2 pt-2 pb-2">+99 Kişi</a>
                        </div>
                    </div>
                </div>
                <div class="meeting-box-invite-personal mb-4">
                    <h3 class="meeting-box-invite-personal-title pb-3">Toplantı Davetleri<span>(3)</span></h3>
                    <div class="invite-personal align-items-center d-flex flex-wrap">
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/gizem.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Gizem Demir
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/burak.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Burak Koç
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/mehmet.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Mehmet Yılmaz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="meeting-box-invite-personal">
                    <h3 class="meeting-box-invite-personal-title pb-3">Aktif Kullanıcılar<span>(2)</span></h3>
                    <div class="invite-personal align-items-center d-flex flex-wrap">
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/gizem.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Gizem Demir
                                </div>
                            </div>
                        </div>
                        <div class="invite-personal-item">
                            <div class="personal-item d-flex align-items-center">
                                <div class="personal-img sticky-profil">
                                    <img src="/src/assets/img/burak.png" alt="">
                                </div>
                                <div class="personal-name">
                                    Burak Koç
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-stats mt-4">
                    <a href="#mtr-all-toggle" class="d-flex align-items-center">
                        <img src="/src/assets/img/icon-is.svg" alt="">
                        <span class="delete ps-2">Detaylı İstatistik</span>
                    </a>
                </div>
            </div>
            <div id="mtr-all-togglex" class="contact-box mtr-all-toggle">
                <div class="mtr-2">
                    <div class="owned-span mb-4 d-flex align-items-center justify-content-between"><span>May Siber Test Toplantı Raporu</span><a
                        href="#" class="delete">Raporu İndir</a></div>
                    <div class="meeting-box-invite-personal mb-3">
                        <h3 class="meeting-box-invite-personal-title pb-3">Katılımcılar<span>(6)</span></h3>
                        <div class="invite-personal align-items-center d-flex flex-wrap">
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/mehmet.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Mehmet Yılmaz
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/mehmet.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Mehmet Yılmaz
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/mehmet.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Mehmet Yılmaz
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/mehmet.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Mehmet Yılmaz
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="meeting-box-invite-personal mb-4">
                        <h3 class="meeting-box-invite-personal-title pb-3">Toplantı Davetleri<span>(3)</span></h3>
                        <div class="invite-personal align-items-center d-flex flex-wrap">
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/mehmet.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Mehmet Yılmaz
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="meeting-box-invite-personal mb-5">
                        <h3 class="meeting-box-invite-personal-title pb-3">Aktif Kullanıcılar<span>(2)</span></h3>
                        <div class="invite-personal align-items-center d-flex flex-wrap">
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/gizem.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Gizem Demir
                                    </div>
                                </div>
                            </div>
                            <div class="invite-personal-item">
                                <div class="personal-item d-flex align-items-center">
                                    <div class="personal-img sticky-profil">
                                        <img src="/src/assets/img/burak.png" alt="">
                                    </div>
                                    <div class="personal-name">
                                        Burak Koç
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mtr-subs mtr-2 col-md-8 col-12">
                        <div class="owned-span mb-2">Konferans Katılımcıları</div>
                        <div class="mtr-subs-head d-flex align-items-center">
                            <div class="mtr2-subs-item mtr2-item mtr2-text">Kullanıcı</div>
                            <div class="mtr2-subs-item mtr2-item mtr2-text">Giriş Zamanı</div>
                            <div class="mtr2-subs-item mtr2-item mtr2-text">Süre</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center">
                            <div class="mtr2-subs-items mtr2-item">Burak Koç</div>
                            <div class="mtr2-subs-items mtr2-item">13.30</div>
                            <div class="mtr2-subs-items mtr2-item">30 Dk</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center">
                            <div class="mtr2-subs-items mtr2-item">Gizem Demir</div>
                            <div class="mtr2-subs-items mtr2-item">13.30</div>
                            <div class="mtr2-subs-items mtr2-item">33 Dk</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center">
                            <div class="mtr2-subs-items mtr2-item">f.sabit@xxx.com.tr</div>
                            <div class="mtr2-subs-items mtr2-item">13.30</div>
                            <div class="mtr2-subs-items mtr2-item">35 Dk</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center">
                            <div class="mtr2-subs-items mtr2-item">Arife Tarif</div>
                            <div class="mtr2-subs-items mtr2-item">13.30</div>
                            <div class="mtr2-subs-items mtr2-item">34 Dk</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center">
                            <div class="mtr2-subs-items mtr2-item">Bilge Bilir</div>
                            <div class="mtr2-subs-items mtr2-item">13.30</div>
                            <div class="mtr2-subs-items mtr2-item">32 Dk</div>
                        </div>
                    </div>
                    <div class="chart-wrapper">
                        <canvas id="chart" width="580" height="380"></canvas>
                    </div>

                    <div class="chart-padding"></div>
                     <div class="chart-wrapper">
                        <canvas id="chart2" width="580" height="380"></canvas>
                    </div>

                    <div class="chart-padding"></div>
                    <div class="mtr-subs mtr-2 mtr-person2 col-md-7 col-12 mb-4 pb-4">
                        <div class="mtr-subs-head d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item mtr2-text">Etkinlik</div>
                            <div class=" mtr2-item mtr2-text">Tarih</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item">Gizem Demir masaüstünü paylaştı</div>
                            <div class=" mtr2-item">05-11-2020 14:32:37</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item">Gizem Demir mikrofonunu paylaştı</div>
                            <div class=" mtr2-item">05-11-2020 14:27:37</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item">Gizem Demir konferansa katıldı</div>
                            <div class=" mtr2-item">05-11-2020 14:24:37</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item">Burak Koç konferansa katıldı</div>
                            <div class=" mtr2-item">05-11-2020 14:24:37</div>
                        </div>
                        <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                            <div class=" mtr2-item">Arife Tarif konferansa katıldı</div>
                            <div class=" mtr2-item">05-11-2020 14:24:37</div>
                        </div>
                    </div>
                    <div class="mtr-subs-chat  col-xl-7 col-12">
                        <div class="mtr-subs-chat-head pb-4 d-md-flex align-items-center justify-content-between">
                            <div class="mtr-chat-btn">
                                <a href="#" class="btn-buy2 btn-bg-blue">Link</a>
                                <a href="#" class="btn-buy2 btn-bg-blue">Belge</a>
                            </div>
                            <div class="mtr-chat-search personal-popup-search">
                                <div class="personal-popup-search-item">
                                    <input type="search" placeholder="Ara">
                                    <span class="personal-popup-search-icon">
                                                <img src="/src/assets/img/search.svg" alt="">
                                            </span>
                                </div>
                            </div>
                        </div>
                        <div class="mtr-subs-chat-content">
                            <div class="mtr-subs mtr-2 mtr-person3 mb-0 pb-0">
                                <div class="mtr-subs-head d-flex align-items-center justify-content-between">
                                    <div class=" mtr2-item mtr2-text">Kullanıcı</div>
                                    <div class=" mtr2-item mtr2-text">Mesaj</div>
                                </div>
                                <div class="mtr-chat-scroll">
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Gizem Demir</div>
                                        <div class=" mtr2-item">Selam</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Gizem Demir</div>
                                        <div class=" mtr2-item">Sesim Geliyor mu?</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Burak Koç</div>
                                        <div class=" mtr2-item">Selam</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Burak Koç</div>
                                        <div class=" mtr2-item">Merhaba</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Burak Koç</div>
                                        <div class=" mtr2-item">Merhaba</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Burak Koç</div>
                                        <div class=" mtr2-item">Merhaba</div>
                                    </div>
                                    <div class="mtr-subs-content d-flex align-items-center justify-content-between">
                                        <div class=" mtr2-item">Burak Koç</div>
                                        <div class=" mtr2-item">Merhaba</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="istatistik" class="tabf">
            <div class="contact-box">
                <div class="chart-wrapper">
                    <canvas id="chart3" width="580" height="380"></canvas>
                </div>
                <div class="chart-padding"></div>
                <div class="chart-wrapper chart-wrapper-w">
                    <canvas id="chart4" width="580" height="380"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
    name: "MeetingReports.vue",
    data() {
        return {
            routed : false
        }
    },
    components: {
        DatePicker
    },
    mounted() {
        $('.detail-stats').click(function () {
            $(".mtr-all-toggle").toggleClass("active");
        });
        var chart = document.getElementById("chart").getContext("2d");
        var myChart = new Chart(chart, {
            type: "bar",
            data: {
                labels: ["00.05", "00.10", "00.15", "00.20", "00.25", "00.30", "00.35"],
                datasets: [
                    {
                        label: "Pasif Kullanıcı Grafiği",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        backgroundColor: "#A2B2C5"
                    },
                    {
                        label: "Aktif Kullanıcı Grafiği",
                        data: [7, 5, 12, 13, 2, 11, 1, 8, 14, 10, 6, 3, 4, 9, 15],
                        backgroundColor: "#904BFF"
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        position: "top",
                        text: 'Katılımcılar'
                    }
                }
            }
        });

        var chart = document.getElementById("chart2").getContext("2d");
        var myChart = new Chart(chart2, {
            type: "bar",
            data: {
                labels: ["00.05", "00.10", "00.15", "00.20", "00.25", "00.30", "00.35"],
                datasets: [
                    {
                        label: "Pasif Kullanıcı Grafiği",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        backgroundColor: "#A2B2C5"
                    },
                    {
                        label: "Aktif Kullanıcı Grafiği",
                        data: [7, 5, 12, 13, 2, 11, 1, 8, 14, 10, 6, 3, 4, 9, 15],
                        backgroundColor: "#904BFF"
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        position: "top",
                        text: 'Katılımcılar'
                    }
                }
            }
        });

        var chart = document.getElementById("chart3").getContext("2d");
        var myChart = new Chart(chart3, {
            type: "bar",
            data: {
                labels: ["PZT", "SAL", "ÇAR", "PER", "CUM", "CMT", "PZR"],
                datasets: [
                    {
                        label: "Katılmamış Toplantı",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        backgroundColor: "#A2B2C5"
                    },
                    {
                        label: "Katılmış Toplantı",
                        data: [7, 5, 12, 13, 2, 11, 1, 8, 14, 1, 6, 3, 4, 9, 15],
                        backgroundColor: "#904BFF"
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        position: "top",
                        text: 'Haftalık Toplantı Sayıları'
                    }
                }
            }
        });

        var chart = document.getElementById("chart4").getContext("2d");
        var myChart = new Chart(chart4, {
            type: "bar",
            data: {
                labels: ["OCA", "ŞUB", "MAR", "NİS", "MAY", "HAZ", "TEM", "AĞU", "EYL", "EKİ", "KAS", "ARA"],
                datasets: [
                    {
                        label: "Katılmamış Toplantı",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                        backgroundColor: "#A2B2C5"
                    },
                    {
                        label: "Katılmış Toplantı",
                        data: [7, 5, 12, 13, 2, 11, 1, 8, 14, 10, 6, 3, 4, 9, 15],
                        backgroundColor: "#904BFF"
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        position: "top",
                        text: 'Aylık Toplantı Sayıları'
                    }
                }
            }
        });


    }
}
</script>

<style scoped>

</style>