<template>
        <div class="extra-subs" v-if="this.$store.state.selectedPackage != null">
            <div class="extra-buy-title owned-span">
                <span class="path-number">2</span> Abonelik yenileme sürenizi seçin.
            </div>
            <div class="d-flex flex-wrap">

                <div class="extra-buy-packet secondCat" v-for="(renewable, index) in getRenewableOptions" :class="{'active' : renewable.id == $store.state.selectedRenewable}" @click="setSelectedRenewable(renewable.id)">
                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                        <div class="eh-text">{{ renewable.name }}</div>
                        <div class="card-ticket">
                            <span>%15 Tasarruflu</span>
                        </div>
                    </div>
                    <div class="extra-price d-flex align-items-center pb-2">
                        <span class="c-price pe-2">₺{{ renewable.unit_price }}</span>
                        <span class="c-date">/Aylık/Lisans</span>
                    </div>
                    <div class="extra-note pb-2">{{ renewable.payment_per }} Ayda ₺{{ renewable.price }}
                        faturalandırılır.
                    </div>
                </div>

            </div>
        </div>
</template>
<script>
export default {
    methods:{
        setSelectedRenewable(id) {
            this.$store.dispatch('setSelectedRenewable',id)
        }
    },
    computed: {
        getRenewableOptions() {
            let data = this.$store.getters.getRenewOptions;
            return data[0].options;
        }
    },
}
</script>