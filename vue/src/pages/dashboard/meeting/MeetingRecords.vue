<template>
        <div class="meeting-plans-wrapper tabs pb-5" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
        <div class="user-panel-title">
            <h1>Selam, <span>{{$store.state.accountInformation[0].account }}.</span></h1>
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
                <h1 class="mb-2">Ücretsiz Deneme Paketinde Toplantıları Kaydetme Yetkiniz Bulunmamaktadır.</h1>
                <div class="meeting-box-date pb-xl-5"><span>Toplantı Kayıt Özelliği Sadece Ücretli Aboneler Tarafından Kullanılabilir.</span>
                </div>
            </div>
        </div>
    </div>
     <div class="meeting-plans-wrapper tabs pb-5" v-else>
                <div class="setting-title mb-md-5 mb-4 d-md-flex align-items-center justify-content-between">
                    <h1>Toplantı Kayıtlarım</h1>
                    <div class="number-subs records-2 active">
                        <div class="d-flex align-items-center flex-wrap">
                            <div class="sbs-t">Kayıt Alanı</div>
                            <div class="btn-subs ms-md-3 ms-0">700 MB / 1 GB</div>
                            <div><a href="#" class="btn-subs2 ms-md-3 ms-0">Yükselt/Satın Al</a></div>
                        </div>
                    </div>
                </div>
                <div class="my-meeting-toptitle align-items-center records-2">
                    <div class="my-meeting-head-left">
                        <div class="total-meeting-text">Toplam <span>2</span> Adet Toplantı Kaydınız Bulunmaktadır.</div>
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
                        <div class="personal-popup-search my-head-right-item3 d-flex align-items-center justify-content-between">
                            <div class="personal-popup-search-item">
                                <input type="search" placeholder="Katılımcı Ara">
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
                <div class="settings-content">
                    <div class="settings-ct d-md-flex align-items-center justify-content-between pb-4">
                        <div class="personal-popup-search">
                            <div class="d-flex align-items-center">
                                <div class="personal-popup-search-item">
                                    <input type="search" placeholder="Katılımcı Ara">
                                    <span class="personal-popup-search-icon">
                                        <img src="/src/assets/img/search.svg" alt="">
                                    </span>
                                </div>
                                <div class="by-date ms-md-5 ms-3">
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
                    <div class="setting-tabs-content">
                        <div class="plans-table_x">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Toplantı Adı</th>
                                        <th>Toplantı ID</th>
                                        <th>Tarih</th>
                                        <th>Boyut</th>
                                        <th></th>
                                        <th><a href="#" class="delete">Tümünü Kaldır</a></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>May Siber Test</td>
                                        <td>473 943 134</td>
                                        <td>05.11.2020</td>
                                        <td>125 MB</td>
                                        <td class="text-center"><span class="video"><img src="/src/assets/img/play-button-r.svg" alt=""></span></td>
                                        <td><a href="#" class="delete dl">Kaldır</a></td>
                                    </tr>
                                    <tr>
                                        <td>Ali Baba</td>
                                        <td>313 413 131</td>
                                        <td>02.11.2020</td>
                                        <td>175 MB</td>
                                        <td class="text-center"><span class="video"><img src="/src/assets/img/play-button-r.svg" alt=""></span></td>
                                        <td><a href="#" class="delete dl">Kaldır</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="settings-inp"></div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
    name: "MeetingRecords",
    components: {
        DatePicker
    }
}
</script>

<style scoped>

</style>