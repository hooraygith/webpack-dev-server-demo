const Vue = require('vue')
const VueRouter = require('vue-router').default

const index = require('./view/index.vue')
const about = require('./view/about.vue')
const hidden = require('./view/hidden.vue')

Vue.use(VueRouter)

module.exports = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: index},
        {path: '/about', component: about},
        {path: '/hidden', component: hidden}
    ]
})
