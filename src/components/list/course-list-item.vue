<template>
    <div class="course-list-item">
        <!--图片-->
        <img alt="" :src="image" class="course-list-item-image" />
        <!--label-->
        <div v-if="label && label.length > 0" class="course-list-item-label">
            {{ label }}
        </div>
        <!--标题及tag-->
        <div class="course-list-item-info">
            <span v-if="title && title.length > 0"
                class="course-list-item-info-title"    
            >
                {{ title }}
            </span>
            <!-- <span v-if="tag && tag.length > 0"
                class="course-list-item-info-tag"
                :style="{ backgroundColor: tagColor }"
            >
                {{ tag }}
            </span> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "CourseListItem",
    props:{
        image: String,//博客图
        title: String,//标题
        //tag: String,//附加说明
        //tagColor: String,
        label: String//标签
    }
};
</script>
<style lang="scss" scoped>
.course-list-item{
    position: relative;
    width: calc(50% - 5px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    background: white;
    margin-bottom: 10px;
    //图
    &-image{
        width: 100%;
        height: 100px;
    }
    //label
    &-label{
        position: absolute;
        top: 4px;
        left: -5px;
        padding: 2px 5px;
        box-sizing: border-box;
        background: #f66;
        font-size: 12px;
        color: #fff;
        //标签三角形图标
        &::after{
            content: "";
            display: inline-block;
            position: absolute;
            bottom: -8px;
            left: 0;
            transform: rotateZ(-45deg);
            transform-origin: left top;
            border: 4px solid transparent;
            border-left-color: #f66;
        }
    }
    //info
    &-info{
        display: flex;
        justify-content: space-between;
        padding: 5px;
        //标题
        &-title{
            flex: 1;
            font-size: 10px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        //tag附加信息
        // &-tag{
        //     height: 20px;
        //     padding: 0 5px;
        //     display: inline-flex;
        //     justify-content: center;
        //     align-items: center;
        //     border-radius: 10px;
        //     font-size: 12px;
        //     color: white;
        // }
    }
}
</style>