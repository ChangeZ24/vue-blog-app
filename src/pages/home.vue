<template>
    <div class="home">
        <Header />
        <Tab v-model:activatedIndex="activatedIndex">
            <!--首页主体内容-->
            <tab-item v-for="(tab,index) in tabs" 
            :key="`tab-${tab}-${index}`"
            :title="tab"
            :activated="index === activatedIndex"
            >
                <div :title="tab">page-{{ tab }}</div>
            </tab-item>
        </Tab>
    </div>
</template>
<script>
import {ref} from "vue";
import Header from "../components/header.vue";
import {Tab,TabItem} from "../components/tab";
export default {
    name: "Home",
    components: {
        Header,
        Tab,
        TabItem,
    },
    setup(){
        const tabs = ref(["首页","vue","webpack","react","vue","webpack","react","vue","webpack","react"]);
        //选中的tab
        let activatedIndex = ref(0);
        return {
            activatedIndex,
            tabs,
        };
    },
};
</script>
<style scoped>

</style>