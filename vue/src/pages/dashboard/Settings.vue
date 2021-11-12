<template>
    <div class="meeting-plans-wrapper tabs pb-5">
        <div class="setting-title mb-md-5 mb-4 d-md-flex align-items-center justify-content-between">
            <h1>Ayarlar</h1>

            <div class="number-subs" v-show="this.$route.name == 'ParticipiantSettings'">
                <div class="d-flex align-items-center flex-wrap">
                    <div class="sbs-t">Katılımcı Sayısı</div>
                    <div class="btn-subs ms-md-3 ms-0">8/10</div>
                    <div>
                        <router-link  class="btn-subs2 ms-md-3 ms-0" :to=" {name : 'AdditionalTab'}">
                            Yükselt/Satın Al
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="settings-content tab-system">
            <div class="settings-ct d-md-flex align-items-center justify-content-between pb-4">
                <ul class="setting-tabs tabs">
                    <li>
                        <router-link tag="a" :to="{name : 'MeetingSettings'}"
                                     class="btn-buy2 tabs-item me-md-4 me-2 setting-btn1" exact
                                     exact-active-class="active">
                            Toplantı
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name : 'ParticipiantSettings'}"
                                     class="btn-buy2 tabs-item me-md-4 me-2 setting-btn1" exact
                                     exact-active-class="active">
                            Kişiler
                        </router-link>
                    </li>

                </ul>
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
            <transition name="fade" mode="out-in">
                <router-view>
                </router-view>
            </transition>


        </div>
    </div>
</template>

<script>
export default {
    name: "Settings.vue",

}
</script>

<style scoped>

</style>