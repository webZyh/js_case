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

/**
 *  显示隐藏
 * @param obj
 * @returns {string}
 */
function show(obj) {
    return obj.style.display = 'block';
};
function hide(obj) {
    return obj.style.display = 'none';
};

/**
 * 获取非行间样式
 * @param obj
 * @param attr
 */
function getStyle(obj , attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

/**
 * 匀速运动封装函数
 * @param obj
 * @param target
 * @param speed
 */
function constant(obj,target,speed){
    clearInterval(obj.timer);
    //判断方向
    speed = obj.offsetLeft < target ? speed : -speed;
    obj.timer = setInterval(function(){
        obj.style.left = obj.offsetLeft + speed + 'px';
        var dis = Math.abs(target - obj.offsetLeft);
        if(dis <= Math.abs(speed)){
            clearInterval(obj.timer);
            obj.style.left = target + 'px';
        }
        console.log(target , obj.offsetLeft);
    },20)
}

/**
 * 缓动动画---单值
 * @param obj
 * @param target
 * @param attr
 */
function buffer(obj, target , attr) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //getStyle(obj,attr)是一个带px的字符串，使用parseInt将其转成数字
        var speed = (target - parseInt(getStyle(obj,attr)))*0.2;
        console.log(getStyle(obj, attr));
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
        console.log(speed);
        if(target == parseInt(getStyle(obj,attr))){

            clearInterval(obj.timer);
        }else{
            obj.style[attr] = parseInt(getStyle(obj,attr)) + speed + 'px';
            console.log(obj.style[attr]);
            //console.log(parseInt(getStyle(obj, attr)));
        }
    },20)
}
/**
 * 缓动动画 -----多值
 * @param [string]obj
 * @param [number]target
 * @param [string]attr
 */
function buffer2(obj, json) {
    clearInterval(obj.timer);

    var begin = 0, target = 0, speed = 0;
    obj.timer = setInterval(function(){
        //判断是否能清除定时器
        var flag = true;
        for(var k in json){
            //getStyle(obj,attr)是一个带px的字符串，使用parseInt将其转成数字
            begin = parseInt(getStyle(obj,k));
            target = parseInt(json[k]);
            console.log(target);
            speed = (target - begin)*0.2;

            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            obj.style[k] = begin + speed + 'px';

            if(target !== begin){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
        }
    },20)
}

/**
 * 透明度
 * @param obj
 * @param json
 */
function buffer3(obj, json) {
    clearInterval(obj.timer);

    var begin = 0, target = 0, speed = 0;
    obj.timer = setInterval(function () {
        //判断是否能清除定时器
        var flag = true;
        for (var k in json) {
            //getStyle(obj,attr)是一个带px的字符串，使用parseInt将其转成数字

            if(k == 'opacity'){
                begin = parseFloat(getStyle(obj, k))* 100;
                target = parseFloat(json[k]) * 100;
            }else{
                begin = parseInt(getStyle(obj, k));
                target = parseInt(json[k]);
            }

            speed = (target - begin) * 0.2;

            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(k == 'opacity'){
                obj.style.opacity =  (begin + speed) /100 ;
                obj.style.filter = 'alpha(opacity:'+ (begin + speed) +')';
            }else{
                obj.style[k] = begin + speed + 'px';
            }

            if (target !== begin) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 20)
}


