<template>
    <section class="container" style="padding-top: 20px;">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "dictionary",
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style scoped>
</style>