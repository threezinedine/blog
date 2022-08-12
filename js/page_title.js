export default {
    props: ['pageTitleData'],
    template: `
        <div class="page-title">
            <div class="page-title__title text-center">
                {{ pageTitleData.getTitleWhite() + " "}}
                <span style="color: var(--main-color)">
                    {{ pageTitleData.getMainColorTitle()}}
                </span>
            </div>
            <div class="page-title__subtitle text-center">
                <span style="color: var(--main-color); margin-right:4px">
                    {{ pageTitleData.getMainColorSubTitle()}}
                </span>
                {{ pageTitleData.getSubTitleWhite() }}
            </div>
        </div>
    `,
    mounted() {
    }
}
