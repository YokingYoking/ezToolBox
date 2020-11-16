<template>
    <section class="container">
        <router-view></router-view>
        <float-button type="info">+</float-button>
    </section>
</template>

<script>
    export default {
        name: "dictionary",
        components: {
            floatButton: () => import('./components/floatButton'),
        },
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style scoped>

</style>