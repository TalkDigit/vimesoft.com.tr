<template>
    <div>
        <div class="extra-room">
            <div class="extra-buy-title owned-span">
                <span class="path-number">1</span> Paket seçin.
            </div>
            <div class="d-flex flex-wrap">
                <div class="extra-buy-packet firstCat" v-for="packet in getPackages"
                     @click="setSelectedPackage(packet.id)"
                     :class="{'active' : packet.id == $store.state.selectedPackage }">
                    <div class="extra-head d-flex align-items-center justify-content-between pb-2">
                        <div class="eh-text path-t">{{ packet.name }}</div>
                    </div>
                    <div class="extra-note pb-2">{{ getParticipiantCount(packet.specs) }}</div>
                    <div class="extra-price d-flex align-items-center">
                        <div class="path-price">₺{{ packet.price_monthly }}<span class="path-price-span">Aylık</span>
                        </div>
                        <div class="path-price">₺{{ packet.price_yearly }}<span class="path-price-span">Yıllık</span>
                        </div>
                    </div>
                    <div class="path-tick"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getParticipiantCount(packet) {
            let packets = packet.filter(function (item) {
                return item.name == "max_participants";
            });
            if (packets.length > 0) {
                return packets[0].spec_value + ' ' + packets[0].spec_unit;
            }
        },
        setSelectedPackage(id) {
            this.$store.dispatch('selectFirstPackage', id)
        }
    },
    computed: {
        getPackages() {
            let data = this.$store.getters.getPackages;
            return data.filter(function (item) {
                return item.status == "ACTIVE" && item.package_type == "MEETING" && item.is_free != 1;
            });
        },
    },

    created() {
        this.$store.dispatch('getPackages');
    }
}
</script>