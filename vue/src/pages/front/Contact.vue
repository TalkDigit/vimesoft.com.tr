<template>
    <div class="contact_wrapper">
        <div class="container">
            <div class="contact-box">
                <div class="row g-0 align-items-center">
                    <div class="col-xl-6">
                        <div class="contact-title">
                            <h1>Hemen İletişime Geç!</h1>
                            <p>
                                Lütfen detayları bizimle paylaşın, Satış ekiplerimiz en kısa zamanda sizinle iletişime
                                geçecektir!
                            </p>
                        </div>
                        <div class="contact-form">
                            <form>
                                <div class="contact-box-flex d-xl-flex align-items-center justify-content-between">
                                    <div class="contact-input-box">
                                        <input type="text" class="form-input" id="fname" name="fname" autocomplete="off"
                                               required="required"/>
                                        <label for="fname">Adınız</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                    <div class="contact-input-box">
                                        <input type="text" class="form-input" id="lname" name="lname" autocomplete="off"
                                               required="required"/>
                                        <label for="lname">Soyadınız</label>
                                        <span class="contact-blue"></span>
                                    </div>
                                </div>
                                <div class="contact-input-box">
                                    <input type="email" class="form-input" id="email" name="email" autocomplete="off"
                                           required="required"/>
                                    <label for="email">E-posta Adresiniz</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="gsm" name="gsm" required="required"
                                           autocomplete="off">
                                    <label for="gsm">GSM Numaranız</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box">
                                    <input type="text" class="form-input" id="compny" name="compny" autocomplete="off"
                                           required="required"/>
                                    <label for="compny">Şirket</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-input-box text_area">
                                    <textarea name="msg" class="form-input" id="msg" required="required"></textarea>
                                    <label for="msg">Mesajınız</label>
                                    <span class="contact-blue"></span>
                                </div>
                                <div class="contact-check-box d-flex">
                                    <input type="checkbox" class="checkbox" id="condition" name="condition"
                                           value="condition"/>
                                    <label for="condition">Katılım Koşulları'nı Onaylıyorum.</label>
                                </div>
                                <div class="contact-check-box d-flex">
                                    <input type="checkbox" class="checkbox" id="informed" name="informed"
                                           value="informed"/>
                                    <label for="informed">
                                        May Tech ve Grup Şirketleri’nin avantajlı ürün ve hizmetlerden haberdar olmak
                                        için 6563 sayılı Kanun ve diğer ilgili mevzuat uyarınca aksi tarafımca
                                        belirtilene kadar ticari elektronik ileti almak istiyorum.
                                    </label>
                                </div>
                                <div class="contact-buttons">
                                    <a href="#" class="btn-send me-xl-3 me-1">Gönder</a>
                                    <a href="#" class="btn-cancel">İptal</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact.vue"
}
</script>

<style scoped>

</style>