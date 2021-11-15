<template>
    <div id="kisisel" class="tabf active">
        <div class="contact-box">
            <div class="row g-0">
                <div class="col-12">
                    <div class="meeting-box-content">
                        <div class="meeting-box-content-title">
                            <h1 class="mb-2">Onur Tan Kişisel Odası-1</h1>
                        </div>
                        <div class="meeting-box-content-info">
                            <div class="meeting-box-content-info-item d-flex align-items-center">
                                <div class="meeting-box-meeting-idtext d-flex align-items-center">
                                    <span class="mtb-img"><img src="/src/assets/img/icon4.svg" alt=""></span>
                                    <span class="meeting-id-text">Toplantı ID</span>
                                </div>
                                <div class="meeting-box-id">
                                    759 491 938
                                </div>
                            </div>
                            <div class="meeting-box-content-info-item d-flex align-items-center">
                                <div class="meeting-box-meeting-idtext d-flex align-items-center">
                                    <span class="mtb-img"><img src="/src/assets/img/icon5.svg" alt=""></span>
                                    <span class="meeting-personal-pwtext meeting-id-text">Katılımcı Şifresi</span>
                                </div>
                                <div class="meeting-box-personal-pw meeting-box-id">
                                    1234
                                </div>
                            </div>
                            <div class="meeting-box-content-info-item d-sm-flex align-items-center">
                                <div class="meeting-box-meeting-idtext d-flex align-items-center">
                                    <span class="mtb-img"><img src="/src/assets/img/icon6.svg" alt=""></span>
                                    <span class="meeting-personal-pwtext meeting-id-text">Toplantı Bağlantısı</span>
                                </div>
                                <div class="meeting-box-meeting-link d-flex align-items-center">
                                    <a href="" class="meeting-link">http://vimesoft.com//759491938</a>
                                    <span class="copy-link" v-on:click="copyLink('http://vimesoft.com//759491938')"><img src="/src/assets/img/icon7.svg" alt=""></span>
                                </div>
                            </div>
                        </div>
                        <div class="meeting-box-invite-personal">
                            <div class="meeting-box-content-btns">
                                <a href="#" class="btn-buy-xl2 pt-2 pb-2 me-xl-4">Başlat</a>
                                <a href="#" class="btn-cancel pt-2 pb-2 me-4">Düzenle</a>
                                <span class="calendar-span-block">
                                                <a href="#" class="add-calendar-link calendar-link">Takvime Ekle</a>
                                                <a href="#" class="share-calendar-link calendar-link">Takvimi Paylaş</a>
                                            </span>
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
    data(){
        return {
            date : null
        }
    },
    methods: {
        copyLink : function (text) {
          const el = document.createElement('textarea');
            el.value = text;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    }
}
</script>