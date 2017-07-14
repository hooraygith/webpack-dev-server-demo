<template>
    <div class="ui-markdown markdown-body" v-html="md"></div>
</template>

<script>
    module.exports = {
        props: ['md']
    }
</script>
