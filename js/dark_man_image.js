export default {
    data() {
        return {
            imageSrc: "../images/dark-man.jpg",
            imageSrc2: "../blog/images/dark-man.jpg",
        }
    },
    template: `
        <div class="background-image" :style="'background-image: url(' + imageSrc + '), url('+ imageSrc2 +')'">
        </div>
    `
}
