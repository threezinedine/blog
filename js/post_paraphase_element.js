export default {
    props: ['content'],
    template: `
        <div class="paraphase__element">
            <p v-if="content.type=='p'" class="paraphase-p">
                {{ content.content }}
            </p>
            <ul v-else-if="content.type=='ul'" class="paraphase-ul">
                <li v-for="option in content.content">
                    {{ option }}
                </li>
            </ul>
            <div v-else-if="content.type=='img'"
                    class="paraphase-img">
                <div class="paraphase-img__img" 
                    :style="'background-image: url(' + content.content.src + ')'">
                </div>
                <div class="paraphase-img__caption">
                    {{ content.content.caption }}
                </div>
            </div>
        </div>
    `,
    mounted() {
    }
}
