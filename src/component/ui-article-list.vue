<template>
    <div>
        <div class="ui-list-article">
            <ul>
                <li v-for="(item, index) in list">
                    <router-link :to="'/article/' + item.filename">
                        <h3>{{item.title}}</h3>
                    </router-link>
                    <router-link :to="'/article/' + item.filename">
                        <p class="ui-article-preview">{{item.md | articlePreview(180)}}</p>
                    </router-link>
                    <div class="ui-article-meta">
                        <div class="tages">
                            <i class="fa fa-tags"></i>
                            <router-link
                                v-for="tag in item.tags"
                                :key="tag"
                                :to="'/?tag=' + tag">
                                <span>{{tag}}</span>
                            </router-link>
                        </div>
                        <div class="time">
                            <i class="fa fa-clock-o"></i>
                            {{item.created}}
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <!-- <div class="ui-page-navigation">
            <a href="javascript:;" class="prev" @click="prev()">
                <i class="fa fa-chevron-left"></i>
            </a>
            <a href="javascript:;" class="next" @click="next()">
                <i class="fa fa-chevron-right"></i>
            </a>
        </div> -->
    </div>
</template>

<script>
    module.exports = {
        props: ['list', 'currentPage', 'total'],
        methods: {
            prev: function() {
                let page = this.$route.query.page || 1
                page = Number(page)

                if (page > 1) {
                    const query = this.$route.query
                    query.page = page - 1
                    this.$router.push({query: query})
                }
            },
            next: function() {
                let page = this.$route.query.page || 1
                page = Number(page)
                let pageSize = this.$route.query.pageSize || 10
                pageSize = Number(pageSize)

                if (page < Math.ceil(this.total / pageSize)) {
                    const query = this.$route.query
                    query.page = page + 1
                    // query 里面只能传一个 key
                    this.$router.push({query: {page: 2, pageSize: 2}})
                }
            }
        }
    }

</script>
