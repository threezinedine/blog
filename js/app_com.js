export default {
    data() {
        return {
            isMenuOn: false,
            isCrossModalRun: false,
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
            const that = this
            setTimeout(() => {
                that.isCrossModalRun = false
            }, 3000)
        }
    }
}
