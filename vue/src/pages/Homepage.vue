<template>
    <div class="main-slider-wrapper">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <img src="/src/assets/img/main-slider-bg-1.png" alt="">
                    <div class="slider-text">
                        <h2>Video Konferans,<span>Güvenli Altyapıda...</span></h2>
                    </div>
                </div>
                <div class="item">
                    <img src="/src/assets/img/main-slider-bg-2.png" alt="">
                    <div class="slider-text">
                        <h2>Video Konferans,<span>Güvenli Altyapıda...</span></h2>
                    </div>
                </div>
            </div>
            <div class="try-for-free">
                <div class="row g-0 align-items-center">
                    <div class="col-xl-8 col-12">
                        <div class="try-free-title">
                            <h3>Ücretsiz Başlayın!</h3>
                            <p>Ek özellikler, raporlama ve daha fazlası için size uygun paketi seçebilirsiniz.</p>
                        </div>
                    </div>
                    <div class="col-xl-4 col-12">
                        <div class="try-free text-xl-end text-start">
                            <router-link :to="{name : 'register'}">
                                <a href="#" class="btn-try-free">Ücretsiz Dene</a>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    mounted() {
        $('.owl-carousel').owlCarousel({
            rewind: true,
            margin: 20,
            responsiveClass: true,
            smartSpeed: 800,
            nav: true,
            responsive:{
                0:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    }
}
</script>