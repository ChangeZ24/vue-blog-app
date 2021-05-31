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