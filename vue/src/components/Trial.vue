<template>
<div class="free-trial" v-if=" this.$store.state.accountInformation[0].package == 'Ücretsiz'">
    <div class="free-trial-text">
        Ücretsiz Deneme Sürümünün Bitmesine 12 Gün Kaldı.
    </div>
    <router-link :to="{name: 'AdditionalTab'}">
        <a href="#" class="btn-cancel btn-free-trial">Satın Al</a>
    </router-link>
</div>
</template>

<script>
export default {
    name: "Trial.vue",
    data() {
        return {
            storage :false
        }
    },
    created() {
        if(localStorage.getItem('userInfo') != null) {
            this.storage = true
        }
    }
}
</script>

<style scoped>

</style>