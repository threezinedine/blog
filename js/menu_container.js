export default {
    data() {
        return {
            hoverRoute: ""
        }
    },
    props: ["turnMenuOff", "turnOnCrossModal", "mode"],
    template: `
        <div class="menu-container" >
            <div class="menu-navbar">
                <navbar-logo></navbar-logo>
                <div class="menu-navbar__quit text-white-hover pointer-cursor text-center" 
                    @click="turnMenuOff">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        <div class="menu-route">
                <menu-route-element 
                    v-for="index in mode.getLength()" 
                    @mouseover="hoverRoute=mode.getModeName(index-1)" 
                    @mouseleave="hoverRoute=''"
                    :index="index-1"
                    :mode="mode"
                    :turn-on-cross-modal="turnOnCrossModal"
                    :turn-menu-off="turnMenuOff">
                    </menu-route-element>
                <div class="text-white menu-route__background-route text-center"
                    v-if="hoverRoute!=''">
                    {{ hoverRoute }}
                </div>
            </div>
        </div>
    `,
    mounted() {
    }
}
