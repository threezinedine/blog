export default {
    props: ['posts'],
    template: `
        <div class="posts-container">
            <post-card v-for="post in posts" :post="post"></post-card>
        </div>
    `,
    mounted() {
    }
}
