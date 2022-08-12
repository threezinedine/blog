import PageTitle from "./page_title_data.js"

export default {
    data() {
        return {
            title: PageTitle(["Blogs", ""], ["My latest ", " posts"]),
            posts: [],
        }
    },
    props: ['turnOnCrossModal', 'showedPost', 'readPost', 'returnPostsContainer'],
    template: `
        <div class="blog-page-container">
            <page-title :page-title-data="title"></page-title>
            <posts-container 
                v-if="showedPost == -1" 
                    :posts="posts"
                        :read-post="readPost">
                            </posts-container>
            <post-container v-else 
                :post-index="showedPost"
                    :posts="posts"
                        :return-posts-container="returnPostsContainer">
                            </post-container>
        </div>
    `,
    methods: {
    },
    mounted() {
        fetch('../posts.json')
            .then(res => res.json())
            .then(data => {
                this.posts = data
            })
    }
}
