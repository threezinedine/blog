export default {
    data() {
        return {
            contactLinks: [
                {logo: "youtube", link: "#"},
                {logo: "facebook", link: "#"},
                {logo: "github", link: "#"},
                {logo: "instagram", link: "#"},
            ]
        }
    },
    template: `
        <div class="contact-link">
            <contact-link-element v-for="contactLink in contactLinks" v-model="contactLink"></contact-link-element>
        </div>
    `
}
