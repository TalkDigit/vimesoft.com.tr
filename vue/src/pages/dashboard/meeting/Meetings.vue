<template>
    <div class="meeting-plans-wrapper tabs pb-5">
        <div class="user-panel-title">
            <h1>Selam, <span>{{ this.$store.state.accountInformation[0].account }}.</span></h1>
            <p>İlk toplantını oluşturmak için her şey hazır! </p>
        </div>

        <div class="contact-box2">
            <div class="my-meeting-toptitle align-items-center">
                <div class="my-meeting-head-left">
                    <router-link tag="a" class="btn-buy2" exact :to="{name : 'PlannedMeetings'}"
                                 exact-active-class="active">
                        Anlık
                    </router-link>
                    <router-link tag="a" class="btn-buy2" exact :to="{name : 'PastMeetings'}"
                                 exact-active-class="active">
                        Geçmiş
                    </router-link>
                    <router-link tag="a" class="btn-buy2" exact :to="{name : 'PersonalRoom'}"
                                 exact-active-class="active">
                        Kişisel Oda
                    </router-link>
                </div>
                <div class="my-meeting-head-right">
                    <transition name="fade" mode="out-in">
                        <div class="my-head-right-item1" v-show="this.$route.name == 'PastMeetings'">
                            Takvimi Görüntüle
                        </div>
                    </transition>

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
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import DatePicker from "./DatePicker";

export default {
    name: "PlannedMeetings.vue",
    components: {
        DatePicker
    }

}
</script>

<style scoped>

</style>