<template>
    <div class="extra-regist tab-system" v-if="this.$store.state.selectedRenewable != null">
        <div class="extra-buy-title owned-span mb-4">
            <span class="path-number">?</span> Opsiyonel alımlar.
        </div>
        <div class="d-flex flex-wrap tabs">
            <div class="extra-buy-packet text-center tabs-item" data-item="k_katilimcisi" v-for="additional in getAdditionals">
                <div class="extra-head pb-2">
                    <img src="src/assets/img/add-user.svg" alt="">
                </div>
                <div class="eh-text">{{additional.name}}</div>
            </div>
j
        </div>
        <div id="k_katilimcisi" class="tab-content">
            <div class="kk-head">
                <div class="extra-buy-title owned-span mb-2 pt-5">
                    Konferans Katılımcısı
                </div>
                <p>
                    Paketinize ek olarak daha fazla konferans katılımcısına ihtiyacınız varsa ayda
                    29 TL’den başlayan fiyatlarla size uygun ek paketi alabilirsiniz. Opsiyonel
                    paketinizi daha sonra istediğiniz zaman iptal edebilirsiniz.
                </p>
            </div>
            <div class="kk-main">
                <div class="extra-buy-title owned-span mb-2">
                    <span class="path-number">1</span> Konferans Katılımcısı Miktarı
                </div>
                <p class="ps-5 pb-5">
                    İhtiyacınıza uygun paketi aşağıdan seçebilirsiniz.
                </p>
                <div class="kk-main-p d-flex flex-wrap">
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">25 Katılımcı</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺29</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">50 Katılımcı</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺49</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">100 Katılımcı</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺80</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="ek_kayit" class="tab-content">
            <div class="kk-head">
                <div class="extra-buy-title owned-span mb-2 pt-5">
                    Ek Kayıt Alanı
                </div>
                <p>
                    Paketinize ek olarak alabileceğiniz Ek Kayıt Alanı ile tüm toplantılarınızı
                    bilgisayarınızda alan harcamadan kolay ve hızlı bir şekilde Vimesoft hesabınızda
                    tutabilirsiniz. Paketinizi istediğiniz zaman iptal edebilir veya Kayıt alanınızı
                    arttırabilirsiniz.
                </p>
            </div>
            <div class="kk-main">
                <div class="extra-buy-title owned-span mb-2">
                    <span class="path-number">1</span> Ek Kayıt Alanı Paketleri
                </div>
                <p class="ps-5 pb-5">
                    Paketinize ek olarak alabileceğiniz Ek Kayıt Alanı ile tüm toplantılarınızı
                    bilgisayarınızda alan harcamadan kolay ve hızlı bir şekilde Vimesoft hesabınızda
                    tutabilirsiniz. Paketinizi istediğiniz zaman iptal edebilir veya Kayıt alanınızı
                    arttırabilirsiniz.
                </p>
                <div class="kk-main-p d-flex flex-wrap">
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">1 GB</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺9</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">5 GB</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺40</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
                            <div class="eh-text">10 GB</div>
                        </div>
                        <div class="extra-price d-flex align-items-center pb-2">
                            <span class="c-price pe-2">₺80</span>
                            <span class="c-date">/Aylık</span>
                        </div>
                    </div>
                    <div class="extra-buy-packet">
                        <div
                            class="extra-head d-flex align-items-center justify-content-between pb-2">
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
        <div class="contact-check-box d-flex mt-md-5 mt-4">
            <input type="checkbox" class="checkbox" id="condition" name="condition"
                   value="condition"/>
            <label for="condition">Katılım Koşulları'nı Onaylıyorum.</label>
        </div>
        <div class="path-btns">
            <a href="#" class="btn-cancel me-md-4 me-3">İptal</a>
            <a href="#" class="btn-send">Devam Et</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Additional.vue",
    data() {
        return {

        }
    },
    computed: {
        getAdditionals() {
            let data = this.$store.getters.getPackages;
            return data.filter(function (item) {
                return item.status == "ACTIVE" && item.package_type == "ADDITIONAL_SERVICE" && item.is_free != 1;
            });
        }
    }
}
</script>

