export default {
    data() {
        return {
            routes: [
                {route: "Home"}, 
                {route: "Blog"},
                {route: "Contact"}
            ],
            hoverRoute: ""
        }
    },
    props: ["turnMenuOff"],
    template: `
        <div class="menu-container" >
            <div class="menu-navbar">
                <navbar-logo></navbar-logo>
                <div class="menu-navbar__quit pointer-cursor text-center" 
                    @click="turnMenuOff">
                    <i class="fa-solid fa-xmark text-white"></i>
                </div>
            </div>
        <div class="menu-route">
                <menu-route-element 
                    v-for="route in routes" 
                    @mouseover="hoverRoute=route.route" 
                    @mouseleave="hoverRoute=''"
                    v-model="route"></menu-route-element>
                <div class="text-white menu-route__background-route text-center">
                    {{ hoverRoute }}
                </div>
            </div>
        </div>
    `
}
