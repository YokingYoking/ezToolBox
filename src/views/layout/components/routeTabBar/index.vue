<template>
    <van-tabbar
            @change="tabChange"
            :fixed="bottom"
            v-model="active"
    >
        <van-tabbar-item v-for="item in tabList"
                         :key="item.index"
                         :icon="item.icon">
            {{item.tabTitle}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import { routes } from "@/router";
    export default {
        name: "routeTabBar",
        props: {
            bottom: {
                type: Boolean,
            }
        },
        data() {
            return {
                tabList: [],
                active: 0
            }
        },
        // watch: {
        //     '$route.path': {
        //         handler(){
        //             let currIndex = this.tabList.findIndex((item) => item.routePath === this.$route.path)
        //             this.tabList[currIndex].curr = true
        //         },
        //         immediate: true
        //     }
        // },
        methods: {
            tabChange(active) {
                this.$router.push(this.tabList[active].routePath)
            },
            routeFormat(route) {
                if(route.children) {
                    let result = {}
                    result.routePath = route.path
                    result.tabTitle = route.children[0].meta.tabTitle
                    result.icon = route.children[0].meta.icon // 此处直接使用vant-ui的icon
                    return result
                }
            },
        },
        beforeMount() {
            let that = this
            routes.map((route)=> {
                if(!route.hidden) {
                    that.tabList.push(that.routeFormat(route))
                }
            })
        },
    }
</script>

<style scoped>

</style>