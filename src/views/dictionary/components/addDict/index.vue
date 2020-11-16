<template>
    <section>
    <van-nav-bar
            @on-click-back="back"
            :leftShow="true"
            :rightShow="false"
    >新增字典</van-nav-bar>
        <article class="container">
            <van-form @submit="onSubmit">
                <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
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
                newTags: ''
            }
        },
        methods: {
          back() {
            this.$router.go(-1)
          },
            addTags() {
              let arr = this.newTags.split(" ")
                console.log(arr)
                this.$router.push('/dictionary')
            },
        },
    }
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>