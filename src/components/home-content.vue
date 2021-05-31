<template>
    <div class="home-content">
        <course-list v-if="courses?.length > 0" :courses="courses" />
    </div>
</template>
<script>
import CourseList from "./list/course-list"
export default {
    name: "HomeContent",
    components:{
        CourseList
    },
    setup(){
        //模拟数据
        const courses = [
            {
                image: "https://z3.ax1x.com/2021/05/31/2edzOx.jpg",
                label: "Vue",
                tag: "源码",
                tagColor: "#fee62c",
                title: "根据项目demo分析源码（一）"
            },
            {
                image: "https://z3.ax1x.com/2021/05/31/2edx61.jpg",
                label: "webpack",
                tag: "源码",
                tagColor: "#fee62c",
                title: "webpack源码分析"
            },
        ];
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