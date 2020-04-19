import _ from 'lodash'

export function paginate(posts, currentpage, pagesize) {
    const startIndex = (currentpage - 1) * pagesize
    return _(posts).slice(startIndex).take(pagesize).value();
}