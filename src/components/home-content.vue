<template>
    <div class="home-content">
        <course-list v-if="courses?.length > 0" :courses="courses" />
        <div v-if="noMore" class="home-content-nomore">- 没有更多了 -</div>
    </div>
</template>
<script>
import { ref,onMounted,onUnmounted } from "vue"
import CourseList from "./list/course-list"
import { getHomeData} from "../services/home-service"
import { PAGE_SIZE } from '../constants/page';
import { addReachEndListener, removeReachEndListener } from '../utils/scroll';
export default {
    name: "HomeContent",
    props: {
        tab: Object,//当前页面tab选项
        activated: Boolean
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
        //是否正在加载
        let isLoading = false;
        //没有更多数据了
        let noMore = ref(false);
        //刷新当前页面数据
        const refreshList = () => {
            noMore.value = false;
            currPage.value = 1;
            getCourseList();
        };
        //请求课程列表数据
        const getCourseList = () => {
            //正在请求数据
            isLoading = true;
            //请求参数
            let params = {
                category: props?.tab?.title || "全部",//tab标题
                page_size: PAGE_SIZE,
                page: currPage.value
            };
            getHomeData(params).then((response) => {
                isLoading = false;
                if(response?.results?.length > 0){
                    //若是第一页，直接将数据给数组
                    if(currPage.value === 1){
                        courses.value = response.results;
                    }else{
                        //若不是则叠加数据
                        courses.value.push(...response.results);
                    }
                    //若当前页面数据<请求的数量
                    if(response.results.length < PAGE_SIZE){
                        noMore.value = true;
                    }
                }else if(currPage.value > 1){
                    currPage.value--;
                }
            }).catch(() => {
                //数据加载结束
                isLoading = false;
                //若当前页面>1,出错后状态回到上一页面
                if(currPage.value > 1){
                    currPage.value--;
                }
            });
        };

        //到达页面底部监听
        let reachEndHandler = null;
        //mounted生命周期
        onMounted(() => {
            //第一次渲染时刷新页面
            refreshList();
            if(!reachEndHandler){
                reachEndHandler = addReachEndListener(() => {
                    //当后面还有数据 && 没有正在加载中 && 当前tab正在显示
                    if(!noMore.value && !isLoading && props.activated){
                        currPage.value++;
                        getCourseList();
                    }
                });
            }
        });
        //unmounted生命周期
        onUnmounted(() => {
            if(reachEndHandler){
                removeReachEndListener(reachEndHandler);
            }
        });
        return {
            courses,
            noMore
        };
    }
}
</script>
<style lang="scss" scoped>
.home-content{
    white-space: normal;
    font-size: 20px;
    &-nomore{
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #999999;
        font-size: 14px;
    }
}
</style>