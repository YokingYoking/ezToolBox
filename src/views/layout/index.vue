<template>
    <section class="main-container">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
        <route-tab-bar
                :bottom="true"
        />
    </section>
</template>

<script>
    import routeTabBar from './components/routeTabBar'
    export default {
        name: "index",
        components: {
          routeTabBar,
        },
        data() {
          return {}
        },
        methods: {},
    }
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>