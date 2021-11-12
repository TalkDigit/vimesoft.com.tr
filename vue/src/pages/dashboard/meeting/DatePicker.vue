<template>
    <div>
        <date-picker v-model="time3" range class="calendar" placeholder="Başlangıç ve Bitiş Tarihi"></date-picker>
    </div>
</template>


<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {DatePicker},
    data() {
        return {
            time1: null,
            time2: null,
            time3: null,
        };
    },
};
</script>


<style scoped>

</style>