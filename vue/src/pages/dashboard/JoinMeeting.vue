<template>
    <div class="join-conf-wrapper">
        <div class="user-panel-title">
            <h1>Hoşgeldin, <span>{{$store.state.accountInformation[0].account }}</span></h1>
            <p>Toplantı ID’si ile toplantıya bağlan!</p>
        </div>
        <div class="user-panel-box">
            <div class="join-meeting-title">
                <h1>Toplantıya Katıl</h1>
                <p>Toplantıya katılım sağlamak için aşağıdaki kutucuğa toplantı ID’sini giriniz.</p>
            </div>
            <div class="user-panel-flex d-xl-flex align-items-center ">
                <div class="contact-input-box me-xl-5">
                    <input type="text" class="form-input new-form-input" id="fname" name="fname" autocomplete="off"
                           required="required"/>
                    <label for="fname" class="new-form-label">Toplantı ID:</label>
                </div>
                <a href="#" class="btn-buy-xl2 meeting-btn new-form-input">Toplantıya Katıl</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "JoinMeeting"
}
</script>

<style scoped>

</style>