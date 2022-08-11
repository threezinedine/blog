export default {
    data() {
        return {
            contactLinks: [
                {logo: "youtube", 
                    link: "https://www.youtube.com/channel/UCFJC2Fee9u8oKH9lPrJXjXQ"},
                {logo: "facebook", 
                    link: "https:/facebook.com/thao.nguyenthe.1690"},
                {logo: "github", 
                    link: "https://github.com/threezinedine"},
                {logo: "instagram", 
                    link: "https://www.instagram.com/thao_nguyenthe/"},
            ]
        }
    },
    template: `
        <div class="contact-link">
            <contact-link-element v-for="contactLink in contactLinks" v-model="contactLink"></contact-link-element>
        </div>
    `
}
