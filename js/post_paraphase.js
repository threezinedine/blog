export default {
    props: ['paraphase'],
    template: `
        <div class="post-content">
            <div class="post-paraphase">
                <div class="post-paraphase__title"> 
                    {{ paraphase.title }} 
                </div>
                <post-paraphase-element
                    v-for="content in paraphase.content"
                        :content="content">
                    </post-paraphase-element>
            </div>
        </div>
    `
}
