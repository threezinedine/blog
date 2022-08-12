import Mode from "./mode.js"


export default {
    data() {
        return {
            isMenuOn: false,
            isCrossModalRun: false,
            mode: Mode(),
            showedPost: -1,
        }
    },
    methods: {
        turnMenuOn: function() {
            this.isMenuOn = true
        },
        turnMenuOff: function() {
            this.isMenuOn = false
        },
        turnOnCrossModal() {
            this.isCrossModalRun = true 
            setTimeout(() => {
                this.isCrossModalRun = false
            }, 3000)
        },
        readPost(index) {
            this.turnOnCrossModal()

            setTimeout(() => {
                this.showedPost = index
            }, 1000)
        },
        returnPostsContainer() {
            this.showedPost = -1
        }
    }
}
