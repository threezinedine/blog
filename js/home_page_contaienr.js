export default {
    data() {
        return {
            firstName: "Thao",
            sureName: "Nguyen",
            fixedDescript: "I'm a ",
            variableDescript: function() {
                const strings = ["Developer.", "Student."]
                let index = 0
                let stringIndex = 0
                let isIncrease = true

                return {
                    get() {
                        const oldIndex = index
                        
                        if (isIncrease) {
                            if (index < strings[stringIndex].length)
                                index += 0.25
                            else 
                                isIncrease = !isIncrease
                        } else {
                            if (index > 0)
                                index --
                            else {
                                isIncrease = !isIncrease
                                stringIndex = 1 - stringIndex
                            } 
                        }

                        return strings[stringIndex].slice(0, Math.floor(oldIndex))
                    }  
                }
            }(),
            variable: "",
        }
    },
    template: `
        <div class="home-page-container">
            <div class="home-author">
                <span class="text-main">{{ firstName }} &nbsp;</span>
                <span class="text-white">{{ sureName }}</span>
            </div>
            <div class="home-description">
                <span class="text-white">{{ fixedDescript }}</span>
                <span class="text-main">{{ variable }}</span>
                <span v-show="variable != ''" class="description-pointer text-white">|</span>
            </div>
        </div> 
    `,
    methods: {
        updateVariable() {
            this.variable = this.variableDescript.get()
        },
    },
    mounted() {
        setInterval(this.updateVariable, 50)
    }
}
