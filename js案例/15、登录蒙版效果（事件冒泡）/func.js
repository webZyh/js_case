//通过id获取元素
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
/**
 * 获取滚动的头部距离和左边距离
 *
 * @returns {{top: number, left: number}}
 */
function scroll(){
    if(window.pageXOffset !== null ){   //ie9+
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

/**
 * 获取屏幕可视区域的宽高
 * @returns {{width: number, height: number}}
 */
function client() {
    if(window.innerWidth){   //ie9+
        return {
            width : window.innerWidth,
            height : window.innerHeight
        }
    }else if(document.compatMode === 'CSS1Compat'){
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        };
    }
    return {
        width : document.body.clientWidth,
        height : document.body.clientHeight
    };
}
//函数节流
function throttle(fn , delay){
    var timer = null ;
    return function(){      //使用闭包
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
