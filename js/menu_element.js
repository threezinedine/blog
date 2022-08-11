export default {
    props: ["modelValue"],
    template: `
        <div class="menu-route__element text-white pointer-cursor">
            {{ modelValue.route }}
        </div>
    `,
}
