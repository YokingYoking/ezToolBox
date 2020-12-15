<template>
    <section class="container">
        <h1>{{currentText ? currentText : "请点击开始进行抽签"}}</h1>
        <span>当前所用字典为：{{dictText}}</span>
        <van-button
                type="info"
                @click="btnOnTap"
                class="main-btn"
        >
            {{isStarted ? "停止" : "开始"}}
        </van-button>
    </section>
</template>

<script>
    export default {
        name: "homepage",
        data() {
          return {
              isStarted: false,
              currentText: "",
              currDict: [],
              dictText: this.currDictName ? this.currDictName : '未设定',
              currDictName: '',
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
        created() {
            let _currDict = window.sessionStorage.getItem('currDict')
            let _currDictName = window.sessionStorage.getItem('currDictName')
          this.currDict = _currDict ? JSON.parse(_currDict) : []
            this.currDictName = _currDictName ? JSON.parse(_currDictName) : ''
        },
    }
</script>

<style lang="scss" scoped>
    @import "index.scss";
</style>