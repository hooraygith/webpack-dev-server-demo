'use strict'


const Vue = require('vue')
const router = require('./router')

const globalComponent = require('./component/global-component.js')
const globalFilter = require('./component/global-filter.js')
globalComponent.init()
globalFilter.init()

/* eslint-disable no-new */
const App = new Vue({
    router,
    data: {
        scrolled: false
    },
    created: function() {
        document.addEventListener('touchend', () => {
            if (document.body.scrollTop > 20) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }, {passive: true})

        console.log('111success!!')


        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/v1/ucenter/company/info/', true);

        xhr.onload = function () {
          // Request finished. Do processing here.
        };
        xhr.setRequestHeader('accesstoken', '0x6l0euh50nhanlxj37uqdpkv5fk14no')
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
        xhr.send(null);
    }
})

App.$mount('#app')

