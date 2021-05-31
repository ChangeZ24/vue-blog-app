<template>
    <div class="header-container">
        <i class="header-container-menu icon-menu" @click="toggleMenu"></i>
        <img class="header-container-logo" src="https://z3.ax1x.com/2021/05/30/2VH1ED.png" alt="2VH1ED.png" border="0" />
        <div class="header-container-right">
            <i class="header-container-right-notice icon-notice" />
            <i class="header-container-right-search icon-search" />
            <img class="header-container-right-image" src="https://z3.ax1x.com/2021/05/30/2VHAN4.md.jpg" alt="2VHAN4.jpg" border="0" />
        </div>
    </div>
    <!--侧边菜单-->
    <!--使用teleport组件将side-menu组件渲染到body标签。
        为了让fixed布局直接成为顶层元素body的子元素，可以规避很多兼容性问题
    -->
    <teleport to="body">
        <!--使用side-menu组件注册的bg-click事件切换菜单的显示-->
        <side-menu :show-menu="showMenu" @bg-click="toggleMenu"></side-menu>
    </teleport>
</template>
<script>
import sideMenu from "./side-menu.vue";
import {ref} from "vue";
export default {
    components: { sideMenu },
    name: "Header",
    setup(){
        let showMenu = ref(false);//是否显示侧边菜单，默认不显示
        //切换侧边栏显示
        const toggleMenu = () =>{
            showMenu.value = !showMenu.value;
        };
        return {
            showMenu,
            toggleMenu,
        };
    },
};
</script>
<style lang="scss" scoped>
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;

    &-menu{
        flex: 1;
        font-size: 18px;
        color: #fee62c
    }

    &-logo{
        width: 69px;
        height: 22px;
        object-fit: fill;
    }

    &-right{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-notice{
            font-size: 18px;
            color: #fee62c;
        }
        &-search{
            font-size: 18px;
            color: #fee62c;
            margin-left: 10px;
        }
        &-image{
            margin-left: 20px;
            width: 30px;
            height: 30px;
            object-fit: fill;
            border-radius: 50%;
            overflow: hidden;
            align-self: flex-end;
        }
    }
}
</style>