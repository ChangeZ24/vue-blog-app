<template>
    <!--渲染每个tab的内容-->
    <div :class="['tab-item',{'tab-item-deactivated':!activated}]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "TabItem",
    props:{
        title: String,
        activated: Boolean,
    },
};
</script>
<style lang="scss" scoped>
.tab-item{
    width: 100%;
    flex-shrink: 0;
    overflow-x: hidden;
    font-size: 14px;
    //隐藏没选中的tab
    &-deactivated{
        height: 0;
        overflow: hidden;
    }
}
</style>