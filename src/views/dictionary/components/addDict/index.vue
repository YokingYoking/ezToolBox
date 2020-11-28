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
                </div>
            </van-form>
        </article>
    </section>
</template>

<script>
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
        },
    }
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>