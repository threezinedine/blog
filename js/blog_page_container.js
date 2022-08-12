import PageTitle from "./page_title_data.js"

export default {
    data() {
        return {
            title: PageTitle(["Blogs", ""], ["My latest ", " posts"]),
            posts: [],
        }
    },
    template: `
        <div class="blog-page-container">
            <page-title :page-title-data="title"></page-title>
            <posts-container :posts="posts"></posts-container>
        </div>
    `,
    methods: {
        fetchData() {
        }
    },
    mounted() {
        fetch('../posts.json')
            .then(res => res.json())
            .then(data => {
                this.posts = data
            })
    }
}
