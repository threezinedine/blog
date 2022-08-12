export default {
    props: ["mode", "turnOnCrossModal", "index", "turnMenuOff"],
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
            setTimeout(() => {
                this.turnMenuOff()
            }, 1000)
        }
    },
    mounted() {
    }
}
