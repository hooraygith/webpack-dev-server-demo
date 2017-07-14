const Vue = require('vue')

const filter = {}
module.exports = filter

filter.init = function() {
    Vue.filter('articlePreview', function(html, limit) {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = html
        const text = wrapper.textContent
        return text.slice(0, limit) + '...'
    })
}
