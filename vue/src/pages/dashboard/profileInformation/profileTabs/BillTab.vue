<template>
    <div id="faturalar" class="tab-content active" >
        <div class="meeting-box-content-title" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">
            <h1 class="mb-2">Ücretsiz Deneme Paketinde Toplantıları Kaydetme Yetkiniz Bulunmamaktadır.</h1>
            <div class="meeting-box-date "><span>Toplantı Kayıt Özelliği Sadece Ücretli Aboneler Tarafından Kullanılabilir.</span>
            </div>
        </div>
           <div class="plans-table_x" v-else>
            <table>
                <thead>
                <tr>
                    <th>Fatura No</th>
                    <th>Paket</th>
                    <th>Tutar</th>
                    <th>Ödeme Tipi</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                <tr>
                    <td>139138313</td>
                    <td>Business</td>
                    <td>₺936</td>
                    <td>Yıllık</td>
                    <td><a href="#" class="s-detail">Detaylı İncele</a></td>
                    <td><span class="delete"><img src="img/downloadalt.svg" alt=""></span></td>
                </tr>
                </tbody>
            </table>
            <div class="settings-inp">
                <div class="user-invite-box d-flex align-items-center col-xl-6 col-12">
                    <div class="contact-input-box">
                        <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                               required="required"/>
                        <label for="email">Kullanıcı Ekle</label>
                        <span class="contact-blue"></span>
                    </div>
                    <div class="user-invite-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                                  d="M20.429,10.893H13.357V3.821A1.572,1.572,0,0,0,11.786,2.25H10.214A1.572,1.572,0,0,0,8.643,3.821v7.071H1.571A1.572,1.572,0,0,0,0,12.464v1.571a1.572,1.572,0,0,0,1.571,1.571H8.643v7.071a1.572,1.572,0,0,0,1.571,1.571h1.571a1.572,1.572,0,0,0,1.571-1.571V15.607h7.071A1.572,1.572,0,0,0,22,14.036V12.464A1.572,1.572,0,0,0,20.429,10.893Z"
                                  transform="translate(0 -2.25)" fill="#007bff"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "BillTab.vue",
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