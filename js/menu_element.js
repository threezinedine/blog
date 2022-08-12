export default {
    props: ["mode", "turnOnCrossModal", "index", "turnMenuOff", "returnPostsContainer"],
    template: `
        <div class="menu-route__element text-white-hover pointer-cursor"
            @click="onClick">
            {{ mode.getModeName(index) }}
        </div>
    `,
    methods: {
        onClick() {
            this.turnOnCrossModal()
            this.mode.setMode(this.index)
            this.returnPostsContainer()
            setTimeout(() => {
                this.turnMenuOff()
            }, 1000)
        }
    },
    mounted() {
    }
}
