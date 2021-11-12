<template>
    <div class="account-packets-hide">
        <div class="tab-system">
            <div class="sss-head pb-3">
                <ul class="sss-tabs tabs d-flex align-items-center">
                    <router-link class="sss-link tabs-item" :to="{name : 'PacketTab'}" tag="li" :class="{'active' : this.$route.name == 'PacketTab'}">
                        Paket

                    </router-link>
                    <router-link class="sss-link tabs-item " :to="{name : 'BillTab'}" tag="li" :class="{'active' : this.$route.name == 'BillTab'}">
                        Faturalar

                    </router-link>
                    <router-link class="sss-link tabs-item " :to="{name : 'AddressTab'}" tag="li" :class="{'active' : this.$route.name == 'AddressTab'}">
                        Ödeme Bilgisi

                    </router-link>
                     <router-link class="sss-link tabs-item " :to="{name : 'AdditionalTab'}" tag="li" :class="{'active' : this.$route.name == 'AdditionalTab'}">
                        Ek Alım

                    </router-link>
                </ul>
            </div>


            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>


            <div id="ek_alim" class="tab-content">
                <div class="extra-buy">
                    <div class="extra-room">
                        <div class="extra-buy-title owned-span">
                            Ek Oda Satın Al
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="extra-buy-packet">
                                <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                    <div class="eh-text">6 Aylık</div>
                                    <div class="card-ticket">
                                        <span>%15 Tasarruflu</span>
                                    </div>
                                </div>
                                <div class="extra-price d-flex align-items-center pb-2">
                                    <span class="c-price pe-2">₺69</span>
                                    <span class="c-date">/Aylık/Lisans</span>
                                </div>
                                <div class="extra-note">6 Ayda ₺354 faturalandırılır.</div>
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
                                <div class="extra-note">Yıllık ₺588 faturalandırılır.</div>
                            </div>
                        </div>
                    </div>
                    <div class="extra-subs">
                        <div class="extra-buy-title owned-span">
                            Konferans Katılımcısı Ekle
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class="extra-buy-packet">
                                <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                    <div class="eh-text">25 Katılımcı</div>
                                </div>
                                <div class="extra-price d-flex align-items-center pb-2">
                                    <span class="c-price pe-2">₺29</span>
                                    <span class="c-date">/Aylık</span>
                                </div>
                            </div>
                            <div class="extra-buy-packet">
                                <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                    <div class="eh-text">50 Katılımcı</div>
                                </div>
                                <div class="extra-price d-flex align-items-center pb-2">
                                    <span class="c-price pe-2">₺49</span>
                                    <span class="c-date">/Aylık</span>
                                </div>
                            </div>
                            <div class="extra-buy-packet">
                                <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                    <div class="eh-text">100 Katılımcı</div>
                                </div>
                                <div class="extra-price d-flex align-items-center pb-2">
                                    <span class="c-price pe-2">₺80</span>
                                    <span class="c-date">/Aylık</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="extra-regist">
                        <div class="extra-buy-title owned-span mb-4">
                            Ek Kayıt Alanı Satın Al
                        </div>
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                        <div class="eh-text">1 GB</div>
                                    </div>
                                    <div class="extra-price d-flex align-items-center pb-2">
                                        <span class="c-price pe-2">₺9</span>
                                        <span class="c-date">/Aylık</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                        <div class="eh-text">5 GB</div>
                                    </div>
                                    <div class="extra-price d-flex align-items-center pb-2">
                                        <span class="c-price pe-2">₺40</span>
                                        <span class="c-date">/Aylık</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                        <div class="eh-text">10 GB</div>
                                    </div>
                                    <div class="extra-price d-flex align-items-center pb-2">
                                        <span class="c-price pe-2">₺80</span>
                                        <span class="c-date">/Aylık</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                        <div class="eh-text">50 GB</div>
                                    </div>
                                    <div class="extra-price d-flex align-items-center pb-2">
                                        <span class="c-price pe-2">₺400</span>
                                        <span class="c-date">/Aylık</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                                        <div class="eh-text">10 GB</div>
                                    </div>
                                    <div class="extra-price d-flex align-items-center pb-2">
                                        <span class="c-price pe-2">₺80</span>
                                        <span class="c-date">/Aylık</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="extra-buy-packet">
                                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfilePacket.vue",
    mounted() {
        $(document).ready(function () {
            $('.tab-system .tabs .tabs-item').click(function () {
                $('.tabs-item').removeClass('active')
                $(this).addClass('active');
            })
        })

    }
}
</script>

<style scoped>

</style>