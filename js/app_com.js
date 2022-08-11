export default {
    data() {
        return {
            isMenuOn: false,
        }
    },
    methods: {
        turnMenuOn: function() {
            this.isMenuOn = true
        },
        turnMenuOff: function() {
            this.isMenuOn = false
        },
    }
}
