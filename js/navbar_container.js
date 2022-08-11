export default {
    data() {
        return {
            isHoverMenuBtn: false,
        }
    },
    props: ["turnMenuOn"],
    template: `
        <nav class="navbar">
            <navbar-logo></navbar-logo>
            <div 
                @mouseover="isHoverMenuBtn=true" 
                @mouseleave="isHoverMenuBtn=false" 
                @click="turnMenuOn"
                class="menu-btn text-center pointer-cursor">
                <i v-show="!isHoverMenuBtn" class="fa-solid fa-bars menu-btn__btn"></i> 
                <i v-show="isHoverMenuBtn" class="fa-solid fa-bars-staggered menu-btn__btn"></i> 
            </div>
        </nav> 
    `,
    methods: {
        hoverMenuBtn: function(){
            this.isHoverMenuBtn = false
        },
        leaveMenuBtn: function(){
            this.isHoverMenuBtn = true
        }
    }
}
