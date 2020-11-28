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
            <my-list-cell v-for="item in list" :key="item.index" :title="item.name">
                <van-button type="primary" @click="activateItem" :data-id="item.id">使用</van-button>
                <van-button type="info" @click="editItem" :data-id="item.id">编辑</van-button>
                <van-button type="danger" @click="deleteItem" :data-id="item.id">删除</van-button>
            </my-list-cell>
        </van-list>
        </van-pull-refresh>
    </section>
</template>

<script>
    import { getDictList, deleteDict } from "@/api/dict";
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
                getDictList().then( res => {
                    this.list = res.data.list
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
            },
            activateItem(event) {
                let id = event.currentTarget.dataset.id
                this.$dialog.confirm({
                    title: '激活字典',
                    message: '现在要启用这个字典吗？',
                }).then(() => {
                    console.log(id)
                }).catch(() => {

                })
            },
            editItem(event) {
                let id = event.currentTarget.dataset.id
                this.$router.push({
                    path: '/dictionary/edit',
                    query: {
                        id: id,
                    }
                })
            },
            deleteItem(event) {
                let that = this
                let id = event.currentTarget.dataset.id
                this.$dialog.confirm({
                    title: '删除字典',
                    message: '真的要删除这个字典吗？',
                    beforeClose: (action, done) => {
                        if (action === 'confirm') {
                            deleteDict(id)
                            that.onRefresh()
                        } else {
                            done()
                        }
                    }
                })
            },
        },
    }
</script>

<style scoped>

</style>