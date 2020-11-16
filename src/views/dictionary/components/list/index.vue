<template>
    <div class="container">
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="已经到底了"
                  @load="onLoad"
                  :error.sync="error"
                  error-text="请求失败，点击重新加载">
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
    </div>
</template>

<script>
    import { getDictList } from "@/api/dict";
    export default {
        name: "list",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                error: false,
            }
        },
        methods: {
            onLoad() {
                getDictList().then( data => {
                    this.list = data.list
                    this.loading = false
                    this.finished = true
                }).catch( err => {
                    this.error = true
                    this.loading = false
                    console.log(err)
                })
            }
        },
    }
</script>

<style scoped>

</style>