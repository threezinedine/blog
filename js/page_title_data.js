export default function(title, subTitle) {
    return {
        getTitleWhite() {
            return title[0]
        },
        getMainColorTitle() {
            return title[1]
        },
        getSubTitleWhite() {
            return subTitle[1]
        },
        getMainColorSubTitle() {
            return subTitle[0]
        }
    }
}
