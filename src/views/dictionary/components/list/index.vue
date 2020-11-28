<template>
    <section class="container">
        <float-button type="info" @click.native="addDict">+</float-button>
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="已经到底了"
                  @load="onLoad"
                  :error.sync="error"
                  error-text="请求失败，点击重新加载">
            <my-list-cell v-for="item in list" :key="item.index" :title="item">
                <van-button type="info">编辑</van-button>
                <van-button type="danger">删除</van-button>
            </my-list-cell>
        </van-list>
        </van-pull-refresh>
    </section>
</template>

<script>
    import { getDictList } from "@/api/dict";
    export default {
        name: "list",
        components: {
            floatButton: () => import('../floatButton'),
            myListCell: () => import('./components/myListCell')
        },
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
                // this.list = ['a', 'b', 'c']
            },
            onRefresh() {
                this.finished = false;
                this.loading = true;
                this.onLoad();
            },
            addDict() {
                this.$router.push('/dictionary/add')
            }
        },
    }
</script>

<style scoped>

</style>