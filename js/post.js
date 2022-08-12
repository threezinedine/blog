export default function(post) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let postContent = ""
    try {
        postContent = JSON.parse(post.post_content).content
    } catch {
        postContent = ""
    }

    return {
        getTitle() {
            try {
                return post.post_title
            } catch {
                return ""
            }
        },
        getDescription() {
            return post.post_descript
        },
        getPostedTime() {
            const postedTime = new Date(post.created_time)
            return `${months[postedTime.getMonth()]} ${postedTime.getDay()}, ${postedTime.getFullYear()}`
        },
        getImage() {
            return `data:image/png;base64,${post.post_img}`
        },
        getContent() {
            return postContent
        }
    }
}
