<template>
    <ui-about></ui-about>
</template>

<script>
    const uiAbout = require('../component/ui-about.vue')
    module.exports = {
        components: {
            uiAbout: uiAbout
        },
        ready() {
        	console.log(444444);
        }
    }
</script>
