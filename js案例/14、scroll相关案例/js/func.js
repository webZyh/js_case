//通过id获取元素
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
//获取滚动的头部距离和左边距离
function scroll(){
    if(window.pageXOffset !== null ){
        return {
            top : window.pageYOffset,
            left : window.pageXOffset
        }
    }else if(document.compatMode === 'CSS1Compat'){
        return {
            top : document.documentElement.scrollTop,
            left : document.documentElement.scrollLeft
        };
    }
    return {
        top : document.body.scrollTop,
        left : document.body.scrollLeft
    };
}
//函数节流
function throttle(fn , delay){
    var timer = null ;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn , delay);
    }
}
//显示隐藏
function show(obj) {
    return obj.style.display = 'block';
}
function hide(obj) {
    return obj.style.display = 'none';
}