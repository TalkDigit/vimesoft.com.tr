<template>
    <div id="odeme_bilgisi" class="tab-content active">
        <div  v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
            <div class="pay-info d-flex align-items-center justify-content-between"
               >
                <div class="meeting-box-content-title mb-0">
                    <h1 class="mb-2">Kredi Kartı ve Ödeme Bilgileri</h1>
                    <div class="meeting-box-date"><span>Ödeme yapabileceğiniz kart bilginiz bulunmamaktadır.</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                                                    <span class="icon_x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             viewBox="0 0 16 16">
                                                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                                                  d="M14.857,8.536H9.714V3.393A1.143,1.143,0,0,0,8.571,2.25H7.429A1.143,1.143,0,0,0,6.286,3.393V8.536H1.143A1.143,1.143,0,0,0,0,9.679v1.143a1.143,1.143,0,0,0,1.143,1.143H6.286v5.143A1.143,1.143,0,0,0,7.429,18.25H8.571a1.143,1.143,0,0,0,1.143-1.143V11.964h5.143A1.143,1.143,0,0,0,16,10.821V9.679A1.143,1.143,0,0,0,14.857,8.536Z"
                                                                  transform="translate(0 -2.25)" fill="#007bff"/>
                                                        </svg>
                                                    </span>
                    <span class="add delete dl ps-2">Ekle</span>
                </div>
            </div>
            <div class="pay-info d-flex align-items-center justify-content-between">
                <div class="meeting-box-content-title mb-0">
                    <h1 class="mb-2">Kredi Kartı ve Ödeme Bilgileri</h1>
                    <div class="meeting-box-date"><span>Ödeme yapabileceğiniz kart bilginiz bulunmamaktadır.</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                                                    <span class="icon_x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                             viewBox="0 0 16 16">
                                                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                                                  d="M14.857,8.536H9.714V3.393A1.143,1.143,0,0,0,8.571,2.25H7.429A1.143,1.143,0,0,0,6.286,3.393V8.536H1.143A1.143,1.143,0,0,0,0,9.679v1.143a1.143,1.143,0,0,0,1.143,1.143H6.286v5.143A1.143,1.143,0,0,0,7.429,18.25H8.571a1.143,1.143,0,0,0,1.143-1.143V11.964h5.143A1.143,1.143,0,0,0,16,10.821V9.679A1.143,1.143,0,0,0,14.857,8.536Z"
                                                                  transform="translate(0 -2.25)" fill="#007bff"/>
                                                        </svg>
                                                    </span>
                    <span class="add delete dl ps-2">Ekle</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="pay-info">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="meeting-box-content-title mb-0">
                                                        <h1 class="mb-2">Kredi Kartı ve Ödeme Bilgileri</h1>
                                                        <div class="meeting-box-date"><span>Ödeme yapabileceğiniz kart bilginiz bulunmamaktadır.</span></div>
                                                    </div>
                                                    <div class="d-flex align-items-center delete pc2-popup-card">
                                                        <span class="icon_x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                                <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.857,8.536H9.714V3.393A1.143,1.143,0,0,0,8.571,2.25H7.429A1.143,1.143,0,0,0,6.286,3.393V8.536H1.143A1.143,1.143,0,0,0,0,9.679v1.143a1.143,1.143,0,0,0,1.143,1.143H6.286v5.143A1.143,1.143,0,0,0,7.429,18.25H8.571a1.143,1.143,0,0,0,1.143-1.143V11.964h5.143A1.143,1.143,0,0,0,16,10.821V9.679A1.143,1.143,0,0,0,14.857,8.536Z" transform="translate(0 -2.25)" fill="#007bff"/>
                                                            </svg>
                                                        </span>
                                                        <span class="add delete dl ps-2">Ekle</span>
                                                    </div>
                                                </div>
                                                <div class="card-box-all">
                                                    <div class="card-box d-flex align-items-center justify-content-between">
                                                        <div class="card-box-item d-flex align-items-center justify-content-between">
                                                            <span class="card-box-img me-4"><img src="/src/assets/img/mastercard.svg" alt=""></span>
                                                            <span class="card-box-card-name me-4 mb-0">İş Bankası Kartım</span>
                                                            <span class="card-box-fav"><img src="/src/assets/img/bookmark.svg" alt=""></span>
                                                        </div>
                                                        <div class="card-box-item">
                                                            <span class="card-box-arrow"><img src="/src/assets/img/plans-plus.svg" alt=""></span>
                                                        </div>
                                                    </div>
                                                    <div class="card-box-toggle mpj-toggle">
                                                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Kart üzerindeki isim:</div>
                                                                <div class="card-toggle-name">Onur Tan</div>
                                                            </div>
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Kartın son 4 hanesi:</div>
                                                                <div class="card-toggle-name">44 92</div>
                                                            </div>
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Son kullanım tarihi:</div>
                                                                <div class="card-toggle-name">04/24</div>
                                                            </div>
                                                        </div>
                                                        <div class="card-box-edits d-flex align-items-center">
                                                            <div class="card-box-edit delete d-flex align-items-center"><img src="/src/assets/img/edit.svg" alt=""><span class="ms-2">Düzenle</span></div>
                                                            <div class="card-box-remove delete ms-3">Kaldır</div>
                                                        </div>
                                                    </div>
                                                    <div class="card-box d-flex align-items-center justify-content-between">
                                                        <div class="card-box-item d-flex align-items-center justify-content-between">
                                                            <span class="card-box-img me-4"><img src="/src/assets/img/g4158.svg" alt=""></span>
                                                            <span class="card-box-card-name me-4 mb-0">YapıKredi Bankası Kartım</span>
                                                        </div>
                                                        <div class="card-box-item">
                                                            <span class="card-box-arrow"><img src="/src/assets/img/plans-plus.svg" alt=""></span>
                                                        </div>
                                                    </div>
                                                    <div class="card-box-toggle mpj-toggle">
                                                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Kart üzerindeki isim:</div>
                                                                <div class="card-toggle-name">Onur Tan</div>
                                                            </div>
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Kartın son 4 hanesi:</div>
                                                                <div class="card-toggle-name">44 92</div>
                                                            </div>
                                                            <div class="card-toggle d-flex align-items-center">
                                                                <div class="card-toggle-text">Son kullanım tarihi:</div>
                                                                <div class="card-toggle-name">04/24</div>
                                                            </div>
                                                        </div>
                                                        <div class="card-box-edits d-flex align-items-center">
                                                            <div class="card-box-edit delete d-flex align-items-center"><img src="/src/assets/img/edit.svg" alt=""><span class="ms-2">Düzenle</span></div>
                                                            <div class="card-box-remove delete ms-3">Kaldır</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pay-info">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <div class="meeting-box-content-title mb-0">
                                                        <h1 class="mb-2">Adres ve Fatura Bilgisi</h1>
                                                        <div class="meeting-box-date mtb2"><span>Ödeme yapabileceğiniz kart bilginiz bulunmamaktadır.</span></div>
                                                    </div>
                                                    <div class="d-flex align-items-center delete pc2-popup-address">
                                                        <span class="icon_x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                                <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.857,8.536H9.714V3.393A1.143,1.143,0,0,0,8.571,2.25H7.429A1.143,1.143,0,0,0,6.286,3.393V8.536H1.143A1.143,1.143,0,0,0,0,9.679v1.143a1.143,1.143,0,0,0,1.143,1.143H6.286v5.143A1.143,1.143,0,0,0,7.429,18.25H8.571a1.143,1.143,0,0,0,1.143-1.143V11.964h5.143A1.143,1.143,0,0,0,16,10.821V9.679A1.143,1.143,0,0,0,14.857,8.536Z" transform="translate(0 -2.25)" fill="#007bff"/>
                                                            </svg>
                                                        </span>
                                                        <span class="add delete dl ps-2">Ekle</span>
                                                    </div>
                                                </div>
                                                <div class="card-box-all2">
                                                    <div class="card-box d-flex align-items-center justify-content-between">
                                                        <div class="card-box-item d-flex align-items-center justify-content-between">
                                                            <span class="card-box-card-name car-box-person-address-name me-4 mb-0">Onur Tan</span>
                                                            <span class="card-box-fav"><img src="/src/assets/img/bookmark.svg" alt=""></span>
                                                        </div>
                                                        <div class="card-box-item">
                                                            <span class="card-box-arrow"><img src="/src/assets/img/plans-plus.svg" alt=""></span>
                                                        </div>
                                                    </div>
                                                    <div class="card-box-toggle mpj-toggle">
                                                        <div class="mb-3">
                                                            <div class="card-toggle-text card-toggle-address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dicta.</div>
                                                        </div>
                                                        <div class="card-box-edits d-flex align-items-center">
                                                            <div class="card-box-edit delete d-flex align-items-center"><img src="/src/assets/img/edit.svg" alt=""><span class="ms-2">Düzenle</span></div>
                                                            <div class="card-box-remove delete ms-3">Kaldır</div>
                                                        </div>
                                                    </div>
                                                    <div class="card-box d-flex align-items-center justify-content-between">
                                                        <div class="card-box-item d-flex align-items-center justify-content-between">
                                                            <span class="card-box-card-name car-box-person-address-name me-4 mb-0">VimeSoft Bilişim A.Ş.</span>
                                                        </div>
                                                        <div class="card-box-item">
                                                            <span class="card-box-arrow"><img src="/src/assets/img/plans-plus.svg" alt=""></span>
                                                        </div>
                                                    </div>
                                                    <div class="card-box-toggle mpj-toggle">
                                                        <div class="mb-3">
                                                            <div class="card-toggle-text card-toggle-address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dicta.</div>
                                                        </div>
                                                        <div class="card-box-edits d-flex align-items-center">
                                                            <div class="card-box-edit delete d-flex align-items-center"><img src="/src/assets/img/edit.svg" alt=""><span class="ms-2">Düzenle</span></div>
                                                            <div class="card-box-remove delete ms-3">Kaldır</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddressTab.vue",
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