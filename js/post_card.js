import Post from "./post.js"


export default {
    data() {
        return {
            postObj: Post({}),
            isShowDescription: false,
            backgroundImage: `url(${this.post.image})`,
            marginTop: 0,
        }
    },
    props: ["post"],
    computed: {
        image: {
            get() {
                return postObj.getImage()
            }
        }
    },
    template: `
        <div class="post-card pointer-cursor" 
            @mouseover="hoverPost"
            @mouseleave="notHoverPost">
            <div class="post-card__img" :style="{'background-image': backgroundImage}" :style="'margin-top:' + marginTop + 'px'">
                <div class="post-card__time">
                    {{ postObj.getPostedTime() }}
                </div>
            </div>
            <div class="post-card__title text-center text-white-hover">
                {{ postObj.getTitle() }}
            </div>
            <div class="post-card__description text-white">
                {{ isShowDescription ? postObj.getDescription(): '' }}
            </div>
        </div>
    `,
    methods: {
        hoverPost() {
            this.marginTop = -180
            this.isShowDescription = true
        },
        notHoverPost() {
            this.marginTop = 0
            this.isShowDescription = false
        }
    },
    mounted() {
        this.postObj = Post(this.post)
    }
}
