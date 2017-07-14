<template>
    <div>
        eeeee
    </div>
</template>

<script>
    const uiArticleList = require('../component/ui-article-list.vue')

    module.exports = {
        components: {
            uiArticleList
        },
        data: function() {
            return {
                currentPage: this.$route.query.page || 1,
                scrolled: false
            }
        },
        watch: {
            $route: function(to, from) {
                this.update(to.query)
            }
        },
        methods: {
            update: function(query) {
            }
        },
        created: function() {
            this.update(this.$route.query)
        }
    }
</script>
