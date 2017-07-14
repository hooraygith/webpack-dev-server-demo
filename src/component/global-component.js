var Vue = require('vue')

var component = {}
module.exports = component

component.init = function() {
    Vue.component('page-sidenav', {
        template: `
            <div>
                <div class="ui-list-nav">
                    <ul>
                        <li><a href="/#/"><i class="fa fa-home"></i></a></li>
                        <li><a href="/#/about"><i class="fa fa-user"></i></a></li>
                        <li><a href="https://github.com/hooraygith" target="_blank"><i class="fa fa-github"></i></a></li>

                    </ul>
                </div>
            </div>
        `
    })

    Vue.component('page-topnav', {
        template: `
            <div>
                <div class="ui-top-nav">
                    <a href="javascript:;" class="nav-toggle" @click="isShowTopNav = !isShowTopNav">
                        <i class="fa fa-bars"></i>
                    </a>
                    <div class="ui-top-nav-pop" :class="{show: isShowTopNav}">
                        <div class="ui-mask" @click="isShowTopNav = false"></div>
                        <div class="ui-list-nav">
                            <ul>
                                <li><a href="/#/"><i class="fa fa-home"></i> 首页</a></li>
                                <li><a href="/#/about"><i class="fa fa-user"></i> 关于</a></li>
                                <li><a href="https://github.com/hooraygith" target="_blank"><i class="fa fa-github"></i> Github</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `,
        data: function() {
            return {
                isShowTopNav: false
            }
        },
        watch: {
            $route: function(to, from) {
                this.isShowTopNav = false
            }
        }
    })
}
