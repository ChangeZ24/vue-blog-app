<template>
    <transition name="fade">
        <div v-if="showMenu" class="side-menu-bg" @click="$emit(`bg-click`)" />
    </transition>
    <transition name="left-in">
        <div v-if="showMenu" class="side-menu-list">
            <!--列表数据-->
            <div
                v-for="(menu,index) in menus"
                :key="`menu-${menu.title}-${index}`"
                class="side-menu-list-item"
            >
                <a :href="menu.target">{{menu.title}}</a>
            </div>
        </div>
    </transition>
</template>
<script>
import {MENUS} from "../constants/page"
export default {
    name: "SideMenu",
    props:{
        showMenu: Boolean,
    },
    emits:["bg-click"],//注册事件
    setup(){
        return {
            menus: MENUS,
        }
    }
};
</script>
<style lang="scss" scoped>
.side-menu-bg{
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-index: 10000;
}
.side-menu-list{
    position: fixed;
    top: 0;
    bottom: 0;
    background: white;
    right: 60%;
    left: 0;
    z-index: 10001;
    box-shadow: 5px 0px 20px #333;

    &-item{
        padding: 20px 15px;
    }

}
</style>