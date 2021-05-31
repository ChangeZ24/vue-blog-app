<template>
    <div class="home">
        <Header />
        <Tab v-model:activatedIndex="activatedIndex">
            <!--首页主体内容-->
            <tab-item v-for="(tab,index) in tabs" 
            :key="`tab-${tab}-${index}`"
            :title="tab.title"
            :activated="index === activatedIndex"
            >
                <home-content :tab="tab" 
                v-if="shouldShowPage(index)" 
                :activated="index === activatedIndex"
                />
            </tab-item>
        </Tab>
    </div>
</template>
<script>
import { ref } from "vue";
import Header from "../components/header.vue";
import {Tab,TabItem} from "../components/tab";
import HomeContent from "../components/home-content.vue";
import { HOME_TABS } from "../constants/page";
export default {
    name: "Home",
    components: {
        Header,
        Tab,
        TabItem,
        HomeContent,
    },
    setup(){
        const tabs = ref(HOME_TABS);
        //选中的tab
        let activatedIndex = ref(0);
        const shouldShowPage = (index) => {
            return [
                activatedIndex.value - 1,
                activatedIndex.value,
                activatedIndex.value + 1
            ].includes(index);
        };
        return {
            activatedIndex,
            tabs,
            shouldShowPage
        };
    },
};
</script>
<style scoped>

</style>