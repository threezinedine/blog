import appComponentData from "./app_com.js"
import navbarContainerData from "./navbar_container.js"
import navbarLogoData from "./navbar_logo.js"
import homePageContainerData from "./home_page_contaienr.js"
import contactLinkData from "./contact_link.js"
import contactLinkElementData from "./contact_link_element.js"
import darkManImageData from "./dark_man_image.js"
import SnowCanvas from "./snow_canvas.js"
import menuContainerData from "./menu_container.js"
import menuElementData from "./menu_element.js"
import crossModalData from "./cross_modal.js"
import blogPageContainer from "./blog_page_container.js"
import pageTitleData from "./page_title.js"
import postsContainerData from "./posts_container.js"
import postCardData from "./post_card.js"
import footerCustomData from "./footer_custom.js"
import postContainerData from "./post_full.js"
import postParaphaseData from "./post_paraphase.js"
import postParaphaseElementData from "./post_paraphase_element.js"


const snowCanvas = new SnowCanvas()
let app = Vue.createApp(appComponentData)

app.component('navbar-container', navbarContainerData)
app.component('navbar-logo', navbarLogoData)
app.component('home-page-container', homePageContainerData)
app.component('contact-link', contactLinkData)
app.component('contact-link-element', contactLinkElementData)
app.component('dark-man-image', darkManImageData)
app.component('menu-container', menuContainerData)
app.component('menu-route-element', menuElementData)
app.component('cross-modal', crossModalData)
app.component('blog-page-container', blogPageContainer)
app.component('page-title', pageTitleData)
app.component('posts-container', postsContainerData)
app.component('post-card', postCardData)
app.component('footer-custom', footerCustomData)
app.component('post-container', postContainerData)
app.component('post-paraphase', postParaphaseData)
app.component('post-paraphase-element', postParaphaseElementData)


app.mount("#app")
