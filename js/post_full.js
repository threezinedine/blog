import Post from "./post.js"


export default {
    data() {
        return {
            postObj: Post({}),
        }
    },
    props: ['posts', 'postIndex', 'returnPostsContainer'],
    template: `
        <div class="post-container">
            <div class="post-title text-color text-center">
                {{ postObj.getTitle() }}
            </div>
            <post-paraphase 
                v-for="paraphase in postObj.getContent()"
                    :paraphase="paraphase"></post-paraphase>
        </div> 
    `,
    mounted() {
        this.postObj = Post(this.posts[this.postIndex])
    }
}
