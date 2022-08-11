import appComponentData from "./app_com.js"
import navbarContainerData from "./navbar_container.js"
import navbarLogoData from "./navbar_logo.js"
import homePageContainerData from "./home_page_contaienr.js"
import contactLinkData from "./contact_link.js"
import contactLinkElementData from "./contact_link_element.js"
import darkManImageData from "./dark_man_image.js"
import SnowCanvas from "./snow_canvas.js"


const snowCanvas = new SnowCanvas()
let app = Vue.createApp(appComponentData)

app.component('navbar-container', navbarContainerData)
app.component('navbar-logo', navbarLogoData)
app.component('home-page-container', homePageContainerData)
app.component('contact-link', contactLinkData)
app.component('contact-link-element', contactLinkElementData)
app.component('dark-man-image', darkManImageData)


app.mount("#app")
