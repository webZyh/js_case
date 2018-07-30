window.onload = function(){
    //获取屏幕尺寸
    let screenX = document.documentElement.clientWidth;
    let screenY = document.documentElement.clientHeight;

    //使用for循环动态生成星星
    for(let i=0; i<200; i++){
        //动态创建span标签，并插入body中
        let oSpan = document.createElement('span');
        document.body.appendChild(oSpan);

        //随机位置生成星星，中间预留一片空白给照片墙
        let x = _.random(screenX-46);
        let y = _.random(screenY-46);

        //设置位置
        oSpan.style.left = x + 'px';
        oSpan.style.top = y + 'px';

        //设置星星大小的随机
        let scale = Math.random() * 1.5;
        oSpan.style.transform = 'scale('+ scale +','+ scale +')';

        //改变播放频率
        let rate = Math.random() * 1.5;
        oSpan.style.animationDelay = rate + 's';
    }
}