export default function(post) {
    return {
        getTitle() {
            return post.name
        },
        getDescription() {
            return post.description
        },
        getPostedTime() {
            return post.createTime
        },
        getImage() {
            return post.image
        }
    }
}
