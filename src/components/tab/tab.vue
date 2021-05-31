<template>
    <div class="tab-container">
        <!--导航列表-->
        <div class="tab-container-nav-wrapper">
            <div v-for="(tab,index) in tabs"
            :key="`tab-${tab?.props?.title}-${index}`"
            :class="[
                'tab-container-nav-wrapper-item',
                {
                    'tab-container-nav-wrapper-item-activated':
                    activatedIndex === index,
                },
            ]"
            @click="onItemClick(index,$event)"
            >
                {{tab?.props?.title}}
            </div>
        </div>
        <!--tab页面内容-->
        <div :ref="setTabRef" class="tab-container-content">
            <slot />
        </div>
    </div>
</template>
<script>
import { ref,Fragment,watch } from "vue";
import { animalScrollLeft } from "../../utils/scroll"
export default {
    name: "Tab",
    props:{
        //当前被激活的tab
        activatedIndex:{
            type: Number,
            default: 0,//默认第一个
        },
    },
    emits: ["update:activatedIndex"],
    setup(props,{emit,slots}){
        let tabRef = null;
        //当前点击的元素
        let currItemEle = null;
        //获取所有tab选项
        const tabs = ref([]);
        slots?.default().forEach((slot) => {
            //只获取v-for内容
            if(slot.type === Fragment && slot?.children instanceof Array){
                tabs.value = slot.children;
            }
        });
        //设置tabRef
        const setTabRef = (ref) => {
            tabRef = ref;
        };
        //点击事件
        const onItemClick = (index,event) => {
            //设置当前点击的元素
            currItemEle = event.target;
            emit("update:activatedIndex", index);
        };
        //切换到指定页面
        const scrollPage = (index) => {
            if(tabRef){
                //每次左偏移量为index*父元素宽度
                tabRef.style.marginLeft = `-${tabRef.offsetWidth * index}px`;
            }
        };
        //切换改变标题位置
        const scrollTab = () => {
            if(currItemEle){
                const parent = currItemEle.parentElement;
                //动画滚动到指定位置
                animalScrollLeft(
                    parent,
                    currItemEle.offsetLeft - (parent.offsetWidth - currItemEle.offsetWidth) / 2
                );
            }
        };
        //监听activatedIndex变化
        watch(
            () => props.activatedIndex,
            (curr, pre) => {
                if(curr !== pre && tabRef){
                    //切换页面
                    scrollPage(curr);
                    scrollTab();
                }
            },
            {
                immediate: true,//立即执行一次
            }
        );
        return {
            onItemClick,
            tabs,
            setTabRef
        };
    },
};
</script>
<style scoped lang="scss">
.tab-container{
    overflow: hidden;
    //导航
    &-nav-wrapper{
        height: 50px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        overflow: auto;
        transition: 1s all;
        margin: 0 10px;
        &::-webkit-scrollbar{
            height: 0;
            width: 0;
            color: transparent;
        }
        //导航每一项
        &-item{
            flex-shrink: 0;
            text-align: center;
            padding: 5px;
            color: #999;
            font-size: 14px;
            border-bottom: 1px solid transparent;
            //被激活的导航
            &-activated{
                color: #fee62c;
                border-bottom: 1px solid #fee62c;
            }
        }
    }
    //tab页面内容父元素
    &-content{
        display: flex;
        align-items: flex-start;
        width: 100%;
        transition: margin-left 0.2s ease-in-out;
    }
}
</style>