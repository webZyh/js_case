function Rect(option) {
    this._init(option);
}
Rect.prototype = {
    _init : function(option){
        //父元素id
        this.parentId = option.parentId;
        //位置
        this.left = option.left
        this.top = option.top;
        //width height
        this.width = option.width;
        this.height = option.height;
        //bgc
        this.backgroundColor = option.backgroundColor || 'red';
        //border
        this.border = option.border;
        //border-radius
        this.borderRadius = option.borderRadius;
    },
    render : function(){
        var parentNode = document.getElementById(this.parentId);
        //创建存放矩形的div
        var oDiv = document.createElement('div');
        //位置赋值
        oDiv.style.position = 'absolute';
        oDiv.style.left = this.left + 'px';
        oDiv.style.top = this.top + 'px';
        //属性赋值
        oDiv.style.width = this.width + 'px';
        oDiv.style.height = this.height + 'px';
        oDiv.style.backgroundColor = this.backgroundColor ;
        oDiv.style.border = this.border;
        oDiv.borderRadius = this.borderRadius + 'px';

        //将oDiv插入父元素中
        parentNode.appendChild(oDiv);
    }
};