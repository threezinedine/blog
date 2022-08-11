export default {
    data() {
        return {
            routes: [
                {route: "Home", func: () => {
                    this.turnOnCrossModal()
                    setTimeout(()=> {
                        this.turnMenuOff()
                    }, 1000)
                }}, 
                {route: "Blog", func: () => {}},
                {route: "Contact", func: () => {}}
            ],
            hoverRoute: ""
        }
    },
    props: ["turnMenuOff", "turnOnCrossModal"],
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
                    v-for="route in routes" 
                    @mouseover="hoverRoute=route.route" 
                    @mouseleave="hoverRoute=''"
                    v-model="route"
                    :turn-on-cross-modal="turnOnCrossModal">
                    </menu-route-element>
                <div class="text-white menu-route__background-route text-center"
                    v-if="hoverRoute!=''">
                    {{ hoverRoute }}
                </div>
            </div>
        </div>
    `
}
