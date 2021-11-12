<template>
    <div id="ek_alim" class="tab-content active">
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
        {{this.$store.state.accountInformation[0].packages}}
        <div v-if="this.$store.state.accountInformation[0].packages != 'Ücretsiz'">
            <p class="extra-note mb-md-5 mb-4">Opsiyonel paketlerden ihtiyacınızı karşılayanları dilediğiniz zaman satın
                alabilir veya iptal edebilirsiniz. </p>
            <button class="btn-send">Satın Al</button>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $('.owl-carousel').owlCarousel({
            // rewind: true,
            margin: 25,
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
                    items: 2
                },
                1600: {
                    items: 3
                },
                1920: {
                    items: 4
                }
            },
            onInitialized: function () {
                if ($('.owl-item').first().hasClass('active'))
                    $('.owl-prev').hide();
                else
                    $('.owl-prev').show();
            }
        })
    }
}
</script>