<template>
    <transition-group name="scale" tag="div" 
        v-if="courses && courses.length > 0" 
        class="course-list"
    >
        <!--课程列表-->
        <course-list-item
            v-for="(course,index) in courses"
            :key="`course-item-${index}`"
            :title="course.name"
            :image="course.picture_url"
            :label="course.label"
            @click="onItemClick(course)"
        >
        </course-list-item>
    </transition-group>
</template>
<script>
import CourseListItem from "./course-list-item"

export default {
    name: "CourseList",
    components:{
        CourseListItem
    },
    props:{
        courses:{
            //课程列表
            type: Array,
            default: () => [],
        }
    },
    setup(){
        //点击课程跳转到对应的课程详情页
        const onItemClick = (course) => {
            window.location.href = `https://www.lanqiao.cn${course.hrml_url}`;
        };
        return {
            onItemClick
        }
    }
}
</script>
<style lang="scss" scoped>
.course-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
    background: #efefef;
}
</style>