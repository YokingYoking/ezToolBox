<template>
    <section class="container">
        <van-empty v-if="currDict.length === 0" description="尚未设定字典">
            <van-button round type="info" class="bottom-button" @click="toSetDict">
                点我去设定字典
            </van-button>
        </van-empty>
        <div v-else>
            <h1>{{currentText ? currentText : "请点击开始进行抽签"}}</h1>
            <span>当前所用字典为：{{currDictName}}</span>
            <van-button
                    type="info"
                    @click="btnOnTap"
                    class="main-btn"
            >
                {{isStarted ? "停止" : "开始"}}
            </van-button>
        </div>

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
            toSetDict() {
              this.$router.push('/dictionary/list')
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