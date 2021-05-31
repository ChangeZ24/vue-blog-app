<template>
    <div v-if="courses && courses.length > 0" class="course-list">
        <!--课程列表-->
        <CourseListItem
            v-for="(course,index)in courses"
            :key="`course-item-${index}`"
            v-bind="course"
        >
        </CourseListItem>
    </div>
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