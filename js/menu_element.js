export default {
    props: ["modelValue"],
    template: `
        <div class="menu-route__element text-white-hover pointer-cursor">
            {{ modelValue.route }}
        </div>
    `,
}
