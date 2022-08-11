export default {
    props: ["modelValue", "turnOnCrossModal"],
    template: `
        <div class="menu-route__element text-white-hover pointer-cursor"
            @click="modelValue.func">
            {{ modelValue.route }}
        </div>
    `,
    mounted() {
    }
}
