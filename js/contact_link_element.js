export default {
    props: ['modelValue'],
    template: `
        <a class="contact-link__link non-underline-link" target="_blank" :href="modelValue.link">
            <i :class="'fa-brands fa-' + modelValue.logo"></i>
        </a> 
    `
}
