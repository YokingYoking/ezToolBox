<template>
    <button :class="type">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "floatButton",
        props: {
            type: {
              type: String,
              default: 'primary',
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "index";
</style>