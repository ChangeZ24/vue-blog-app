/** 
 * 动画滚动到指定位置
 * @param target 目标元素
 * @param position 滚动的位置
*/
export function animalScrollLeft(target, position){
    //总次数
    const offset = 10;
    //总长度
    const distance = position - target.scrollLeft;
    //每次增加的距离
    const step = distance / offset;
    let count = 0;
    function scrollToPosition(){
        if(count++ != offset){
            target.scrollLeft = target.scrollLeft + step;
            window.requestAnimationFrame(scrollToPosition);
        }
    }
    window.requestAnimationFrame(scrollToPosition);
}
/** 
 * 监听到达页面底部回调
 * @param callBack 到达底部回调
 * @param position 怕奴蛋到达底部的偏移量0-1，默认0.9，即距离底部1/10的时候开始回调
 * @returns {scrollHandler} 回调函数
*/
export function addReachEndListener(callBack, offset = 0.9){
    const scrollHandler = () => {
        //垂直滑动的距离
        const scrollTop = document.documentElement.scrollTop;
        //子内容高度
        const scrollHeight = document.documentElement.scrollHeight;
        //窗口高度
        const clientHeight = document.documentElement.clientHeight;
        // 窗口 + 垂直滑动的距离 >= 子内容高度 * 偏移量时则认为到达了底部
        if(clientHeight + scrollTop >= scrollHeight * offset){
            callBack && callBack();
        }
    };
    document.addEventListener("scroll",scrollHandler);
    return scrollHandler;
}
/** 
 * 移除到达页面底部监听
 * @param handler
*/
export function removeReachEndListener(handler){
    return document.removeEventListener("scroll",handler);
}