<template>
    <div class="setting-tabs-content tab-content active" id="toplanti_x">
        <div class="row g-0">
            <div class="col-xl-6 col-12">
                <div class="setting-tab-item mt-md-5 mt-4 d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Kullanıcı Kameraları Otomatik Olarak Açılsın</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center">
                            <label for="a_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" id="a_item">
                            <label for="a_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item">
                    <div class="time-period-plans  me-xl-4">
                        <label class="spe-select">
                            <select class="selectric-select" id="nicer-select-id" name="mySelect" reqiured>
                                <option value=""></option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                                <option value="lorem4">GMT+03 İstanbul, Türkiye</option>
                                <option value="lorem3">GMT-04 New York, Amerika</option>
                                <option value="lorem2">GMT-03 Sao Paola, Brezilya</option>
                            </select>
                            <span class="check-select-name">Otomatik Toplantı Zaman Dilimi</span>
                        </label>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Kullanıcı Bekleme Odası</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center" :class="is_free ? 'disable' : ''">
                            <label for="b_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" :disabled="is_free" id="b_item">
                            <label for="b_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Toplantı Kayıtları İndirebilsin</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center" :class="is_free ? 'disable' : ''">
                            <label for="c_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" :disabled="is_free" id="c_item">
                            <label for="c_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Otomatik Kayıt Başlatılsın</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center" :class="is_free ? 'disable' : ''">
                            <label for="d_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" :disabled="is_free" id="d_item">
                            <label for="d_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Toplantı Kayıtları Silinsin</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center" :class="is_free ? 'disable' : ''">
                            <label for="e_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" :disabled="is_free" id="e_item">
                            <label for="e_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Katılımcılar Masaüstü/Doküman Paylaşabilir</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center">
                            <label for="f_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" id="f_item">
                            <label for="f_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
                <div class="setting-tab-item d-flex align-items-center justify-content-between">
                    <div class="setting-item-text setting-text">Konferans İçerisinde Mesajlaşma</div>
                    <div class="setting-item-checkbox">
                        <div class="label-control label-xc d-flex align-items-center">
                            <label for="g_item" class="camera-no">Hayır</label>
                            <input type="checkbox" class="switch_1 switch_y" id="g_item">
                            <label for="g_item" class="camera-yes">Evet</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MeetingSettings",
    data () {
        return {
            is_free : this.$store.state.accountInformation[0].package == 'Ücretsiz' ? true : false
        }
    },
    mounted() {
        $(document).ready(function () {

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
        });
    }

}
</script>

<style scoped>

</style>