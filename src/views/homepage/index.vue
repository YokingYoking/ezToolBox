<template>
    <div class="container">
        <h1>{{currentText ? currentText : "请点击开始进行抽签"}}</h1>
        <span>当前所用字典为：{{currDict ? currDict : '未设定'}}</span>
        <van-button
                type="primary"
                @click="btnOnTap"
                class="main-btn"
        >
            {{isStarted ? "停止" : "开始"}}
        </van-button>
    </div>
</template>

<script>
    export default {
        name: "homepage",
        data() {
          return {
              isStarted: false,
              currentText: "",
              currDict: '',
          }
        },
        methods: {
          btnOnTap() {
              this.toggleState()
          },
            toggleState() {
                this.isStarted = !this.isStarted
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "index.scss";
</style>