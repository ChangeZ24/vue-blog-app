<template>
    <div class="home-content">
        <course-list v-if="courses?.length > 0" :courses="courses" />
    </div>
</template>
<script>
import { ref } from "vue"
import CourseList from "./list/course-list"
import { getHomeData} from "../services/home-service"
import { PAGE_SIZE } from '../constants/page';
export default {
    name: "HomeContent",
    props: {
        tab: Object//当前页面tab选项
    },
    components: {
        CourseList
    },
    setup(props){
        //模拟数据
        // const courses = [
        //     {
        //         image: "https://z3.ax1x.com/2021/05/31/2edzOx.jpg",
        //         label: "Vue",
        //         tag: "源码",
        //         tagColor: "#fee62c",
        //         title: "根据项目demo分析源码（一）"
        //     },
        //     {
        //         image: "https://z3.ax1x.com/2021/05/31/2edx61.jpg",
        //         label: "webpack",
        //         tag: "源码",
        //         tagColor: "#fee62c",
        //         title: "webpack源码分析"
        //     },
        // ];
        let courses = ref([]);
        //当前数据页数
        let currPage = ref(1);
        //请求参数
        let params = {
            category: props?.tab?.title || "全部",//tab标题
            page_size: PAGE_SIZE,
            page: currPage.value
        };
        getHomeData(params).then((response) => {
            if(response?.results?.length > 0){
                courses.value = response.results;
            }
        });
        return {
            courses
        };
    }
}
</script>
<style lang="scss" scoped>
.home-content{
    white-space: normal;
    font-size: 20px;
}
</style>