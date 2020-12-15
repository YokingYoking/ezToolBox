<template>
    <section class="container">
    <van-nav-bar
            title="新增字典"
            left-text="返回"
            left-arrow
            @click-left="back"
            fixed
            placeholder
            z-index="666"
    ></van-nav-bar>
        <article class="container">
            <van-form @submit="onSubmit" class="form">
                <van-field
                        v-model="dictName"
                        name="dictName"
                        label="字典名称"
                        placeholder="请输入字典名称"
                        :rules="[{ required: true, message: '请填写字典名称' }]"
                />
                <van-field
                        v-model="tags"
                        rows="5"
                        autosize
                        label="标签"
                        type="textarea"
                        placeholder="请输入标签，可用空格分隔标签"
                        :rules="[{ required: true, message: '请填写字典标签' }]"
                />
                <div class="submit">
                    <van-button round block type="info" native-type="submit" class="submit__btn">
                        提交
                    </van-button>
                    <van-button type="danger"
                                v-if="this.$route.path === '/dictionary/edit'"
                                class="submit__delete"
                                @click="deleteItem"
                                round>删除本字典</van-button>
                </div>
            </van-form>
        </article>
    </section>
</template>

<script>
    import {deleteDict, getDictItem} from "@/api/dict";
    export default {
        name: "addDict",
        data() {
            return {
                dictName: '',
                tags: ''
            }
        },
        methods: {
          back() {
            this.$router.go(-1)
          },
            onSubmit() {
              let arr = this.tags.split(" ")
                console.log(arr)
                this.$router.push('/dictionary')
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
        created() {
          if(this.$route.path === '/dictionary/edit') {
              getDictItem(this.$route.query.id).then( res => {
                  this.dictName = res.data.name
                  this.tags = res.data.tags.join(' ')
              })
          }
        },
    }
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>