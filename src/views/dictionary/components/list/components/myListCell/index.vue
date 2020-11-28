<template>
    <div class="cellContainer">
        <van-cell :title="title"
                  :value="value"
                  size="large"
                  center
                  clickable
                  v-touch:swipeleft="onSwipeLeft"
                  @click="onFocus"/>
        <div class="operate">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import touch from '@/directives/touch'
    export default {
        name: "myListCell",
        data() {
          return {
              focused: false,
          }
        },
        props: {
            title: {
                type: String,
            },
            value: {
                type: String,
            }
        },
        directives: {
          touch: touch,
        },
        methods: {
            onSwipeLeft() {
                // this.onFocus()
            },
            onFocus(event) {
                event.currentTarget.classList.remove('blur')
                event.currentTarget.classList.remove('focus')
                if(this.focused) {
                    event.currentTarget.classList.add('blur')
                    this.focused = false
                } else {
                    event.currentTarget.classList.add('focus')
                    this.focused = true
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>