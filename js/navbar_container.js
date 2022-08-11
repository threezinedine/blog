export default {
    data() {
        return {
            isHoverMenuBtn: false,
            hoverSize: 5,
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
                <i class="fa-solid fa-bars menu-btn__btn" 
                    :style="isHoverMenuBtn?'font-size: ' + hoverSize + 'rem': ''"
                    @mouseover="isHoverMenuBtn=true"
                    @mouseleave="isHoverMenuBtn=false">
                </i> 
            </div>
        </nav> 
    `,
    methods: {
    }
}
