<template>
<div id="paket" class="tab-content active">
                <div class="col-xl-8 col-12">
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Sahip Olunan Paket</div>
                        <div class="package-owned" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
                            <div class="card-ticket" >
                                <span>Ücretsiz Deneme</span>
                            </div>

                        </div>
                        <div class="package-owned" v-else>
                             <div class="card-ticket" >
                                <span>Business</span>

                            </div>
<span class="pay-section">Yıllık Ödeme</span>
                        </div>
                    </div>
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Sahip Olunan Paket</div>
                        <div class="package-owned">
                            <span class="owned-span">10</span>
                        </div>
                    </div>
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Konferans Kayıt Alanı</div>
                        <div class="package-owned">
                            <span class="delete">Satın Al</span>
                        </div>
                    </div>
                    <div class="acc-personal-flex d-flex" v-if="this.$store.state.accountInformation[0].package != 'Ücretsiz'">
                                                    <div class="package-owned-text">Konferans Kayıt Alanı</div>
                                                    <div class="package-owned">
                                                        <div class="remaining mb-3">
                                                            <div class="remaining-zone">
                                                                1 GB / <span>Kalan 750 Mb</span>
                                                            </div>
                                                            <a href="#" class="delete ps-4">Yükselt</a>
                                                        </div>
                                                        <div class="detail-pop-item">
                                                            <div class="detail-load">
                                                                <div class="detail-loading" style="width: 60%;"></div>
                                                            </div>
                                                            <div class="detail-load-text">
                                                                60%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Paket Başlangıç Tarihi</div>
                        <div class="package-owned">
                            <span class="owned-span">02.11.2020</span>
                        </div>
                    </div>
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Paket Bitiş Tarihi</div>
                        <div class="package-owned">
                            <span class="owned-span">02.11.2021</span>
                        </div>
                    </div>
                    <div class="acc-personal-flex d-flex align-items-center">
                        <div class="package-owned-text">Otomatik Yenileme</div>
                        <div class="package-owned">
                            <div class="label-control label-xc d-flex align-items-center disable">
                                <label for="b_item" class="camera-no">Hayır</label>
                                <input type="checkbox" class="switch_1 switch_y" disabled="disabled" id="b_item">
                                <label for="b_item" class="camera-yes">Evet</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: "PacketTab.vue",
    mounted() {
        $('.s-detail, .share-calendar-link').on('click', function(e) {
            e.preventDefault();
            $('.detail-popup').toggleClass('is-visible');
        });
                // Packets Active Border
        $(function () {
            $('.extra-buy-packet').click(function(){
                $(this).closest('.extra-buy-packet').toggleClass('active');
            });
        });
        // Add to Credit Cart Popup /  AddClass
        $('.pc2-popup-card').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').toggleClass('active');
        });
        //Add to Credit Cart Popup / RemoveClass
        $('.calendar-popup').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').removeClass('active');
        });
        // Click to exit popup
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup').removeClass('active');
        });
        // Add to Credit Card info
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.card-box-all').addClass('active');
        });
        // Button click to display none ('.meeting-box-date')
        $('.pc2-off').on('click', function(e) {
            e.preventDefault();
            $('.meeting-box-date').addClass('d-none');
        });
        // Address and info popup AddClass
        $('.pc2-popup-address').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').toggleClass('active');
        });
        //Address and info popup RemoveClass
        $('.calendar-popup').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').removeClass('active');
        });
        // Click to exit popup
        $('.pc2-off2').on('click', function(e) {
            e.preventDefault();
            $('.acc-packets2-popup2').removeClass('active');
        });
        $('.pc2-off2').on('click', function(e) {
            e.preventDefault();
            $('.card-box-all2').addClass('active');
            $('.mtb2').addClass('d-none');
        });

        $('.card-box').click(function(){
            $(this).next('.mpj-toggle').slideToggle(300);
            $(this).find(".card-box-arrow").toggleClass("c-rotate")
        });
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
    }
}
</script>

<style scoped>

</style>