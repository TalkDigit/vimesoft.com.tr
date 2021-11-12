<template>
    <div class="join-conf-wrapper" v-if="this.$store.state.accountInformation[0].package == 'Ücretsiz'">

        <div class="user-panel-title">
            <h1>Hoşgeldin, <span> {{ $store.state.accountInformation[0].account }}.</span></h1>
            <p>Artık hazırsın! İlk toplantını oluşturabilir veya bir toplantıya katılabilirsin!</p>
        </div>
        <div class="user-panel-box">
            <div class="user-panel-box-title up-bold">
                <h2>Vimesoft Video Konferans Sistemi’ni kullanmak için her şey hazır!</h2>
            </div>
            <div class="user-panel-flex">
                <router-link :to="{name : 'meetingPlan'}">
                    <a class="btn-buy-xl2 meeting-btn">Toplantı Planla</a>
                </router-link>

                <router-link :to="{name : 'JoinMeeting'}">
                    <a class="btn-buy-xl meeting-btn">Toplantıya Başla</a>
                </router-link>

            </div>
        </div>
    </div>
    <div class="meeting-plans-wrapper tabs pb-5" v-else>
        <div class="user-panel-title">
            <h1>Selam, <span>Onur.</span></h1>
            <p>Birkaç adımda toplantını planla ve katıl!</p>
        </div>
        <div class="contact-box3">
            <div class="my-meeting-toptitle mpj-top d-flex align-items-center justify-content-between">
                <div class="mpj-item">
                    <div class="meeting-box-content-title m-0">
                        <h1 class="mb-2">May Siber Teknoloji Tanışması Toplantısı</h1>
                        <div class="d-flex align-items-center">
                            <span class="meeting-box-date"><span>11:00 am - 11:45 am</span></span>
                            <span class="meeting-box-date-add d-flex align-items-center">
                                        <svg id="calendar-plus" xmlns="http://www.w3.org/2000/svg" width="20"
                                             height="20" viewBox="0 0 20 20">
                                            <path id="Path_1151" data-name="Path 1151"
                                                  d="M15.5,15.75a.625.625,0,0,1,.625.625v2.5a.625.625,0,0,1-.625.625H13a.625.625,0,0,1,0-1.25h1.875V16.375A.625.625,0,0,1,15.5,15.75Z"
                                                  transform="translate(-5.5 -7)" fill="#007bff" fill-rule="evenodd"/>
                                            <path id="Path_1152" data-name="Path 1152"
                                                  d="M16.875,20.875a.625.625,0,0,1,.625-.625H20a.625.625,0,0,1,0,1.25H18.125v1.875a.625.625,0,0,1-1.25,0Z"
                                                  transform="translate(-7.5 -9)" fill="#007bff" fill-rule="evenodd"/>
                                            <path id="Path_1153" data-name="Path 1153"
                                                  d="M1.25,6V18.5A1.25,1.25,0,0,0,2.5,19.75h15a1.25,1.25,0,0,0,1.25-1.25V6ZM2.5,2.25A2.5,2.5,0,0,0,0,4.75V18.5A2.5,2.5,0,0,0,2.5,21h15A2.5,2.5,0,0,0,20,18.5V4.75a2.5,2.5,0,0,0-2.5-2.5Z"
                                                  transform="translate(0 -1)" fill="#007bff" fill-rule="evenodd"/>
                                            <path id="Path_1154" data-name="Path 1154"
                                                  d="M7.375,0A.625.625,0,0,1,8,.625V1.25a.625.625,0,0,1-1.25,0V.625A.625.625,0,0,1,7.375,0Zm11.25,0a.625.625,0,0,1,.625.625V1.25a.625.625,0,0,1-1.25,0V.625A.625.625,0,0,1,18.625,0Z"
                                                  transform="translate(-3)" fill="#007bff" fill-rule="evenodd"/>
                                        </svg>
                                        <span class="add-to-date">Takvime Ekle</span>
                                    </span>
                        </div>
                    </div>
                </div>
                <div class="mpj-item">
                    <div class="mpj-item-img">
                        <img src="src/assets/img/arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="mpj-toggle">
            <div class="meeting-box-content-info">
                <div class="meeting-box-content-info-item d-flex align-items-center">
                    <div class="meeting-box-meeting-idtext d-flex align-items-center">
                        <span class="mtb-img"><img src="src/assets/img/icon4.svg" alt=""></span>
                        <span class="meeting-id-text">Toplantı ID</span>
                    </div>
                    <div class="meeting-box-id">
                        759 491 938
                    </div>
                </div>
                <div class="meeting-box-content-info-item d-flex align-items-center">
                    <div class="meeting-box-meeting-idtext d-flex align-items-center">
                        <span class="mtb-img"><img src="src/assets/img/icon5.svg" alt=""></span>
                        <span class="meeting-personal-pwtext meeting-id-text">Katılımcı Şifresi</span>
                    </div>
                    <div class="meeting-box-personal-pw meeting-box-id">
                        1234
                    </div>
                </div>
                <div class="meeting-box-content-info-item d-sm-flex align-items-center">
                    <div class="meeting-box-meeting-idtext d-flex align-items-center">
                        <span class="mtb-img"><img src="src/assets/img/icon6.svg" alt=""></span>
                        <span class="meeting-personal-pwtext meeting-id-text">Toplantı Bağlantısı</span>
                    </div>
                    <div class="meeting-box-meeting-link d-flex align-items-center">
                        <a href="" class="meeting-link">http://vimesoft.com//759491938</a>
                        <span class="copy-link"><img src="src/assets/img/icon7.svg" alt=""></span>
                    </div>
                </div>
            </div>
            <div class="meeting-box-invite-personal">
                <h3 class="meeting-box-invite-personal-title pb-3">Toplantı Sahibi</h3>
                <div class="invite-personal-item pb-5">
                    <div class="personal-item d-flex align-items-center">
                        <div class="personal-img sticky-profil">
                            <img src="src/assets/img/profil-pic.png" alt="">
                        </div>
                        <div class="personal-name">
                            Onur Tan
                        </div>
                    </div>
                </div>
                <h3 class="meeting-box-invite-personal-title pb-3">Davetli Kullanıcılar</h3>
                <div class="invite-personal align-items-center">
                    <div class="invite-personal-item">
                        <div class="personal-item d-flex align-items-center">
                            <div class="personal-img sticky-profil">
                                <img src="src/assets/img/gizem.png" alt="">
                            </div>
                            <div class="personal-name">
                                Gizem Demir
                            </div>
                        </div>
                    </div>
                    <div class="invite-personal-item">
                        <div class="personal-item d-flex align-items-center">
                            <div class="personal-img sticky-profil">
                                <img src="src/assets/img/burak.png" alt="">
                            </div>
                            <div class="personal-name">
                                Burak Koç
                            </div>
                        </div>
                    </div>
                    <div class="invite-personal-item">
                        <div class="personal-item d-flex align-items-center">
                            <div class="personal-img sticky-profil">
                                <img src="src/assets/img/mehmet.png" alt="">
                            </div>
                            <div class="personal-name">
                                Mehmet Yılmaz
                            </div>
                        </div>
                    </div>
                </div>
                <div class="meeting-box-content-btns">
                    <a href="" class="btn-buy-xl2 pt-2 pb-2 me-xl-4">Başlat</a>
                    <a href="" class="btn-cancel pt-2 pb-2">Düzenle</a>
                    <a href="" class="delete">Sil</a>
                </div>
            </div>
        </div>
        <div class="contact-box mpj">
            <div class="meeting-box-content-title pb-2">
                <h1>Görüşmeye Başla!</h1>
            </div>
            <div class="mb-md-5 mb-4">
                 <router-link :to="{name : 'meetingPlan'}">
                    <a class="btn-buy-xl2 meeting-btn">Toplantı Planla</a>
                </router-link>

                <router-link :to="{name : 'JoinMeeting'}">
                    <a class="btn-buy-xl meeting-btn">Toplantıya Başla</a>
                </router-link>
            </div>
            <div class="meeting-adress pb-5">
                Kişisel Toplantı Adresim: <a href="#">http://vimesoft.com//285205328</a> <span
                class="ps-2 copy-link"><img src="src/assets/img/icon7.svg"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $(document).ready(function () {
            $(".mpj-top").click(function () {
                $(".mpj-toggle").slideToggle(300);
                $(".mpj-item-img").toggleClass("active")
            });
        });
    }
}
</script>