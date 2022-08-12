export default {
    props: ['posts', 'readPost'],
    template: `
        <div class="posts-container">
            <post-card 
                v-for="(post, index) in posts" 
                    :post="post"
                        @click="readPost(index)">
                            </post-card>
        </div>
    `,
    mounted() {
    }
}
