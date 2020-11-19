const title = '胡掌柜'
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle}`
    }
    return `${title}`
}