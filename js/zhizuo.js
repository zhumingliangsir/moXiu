+function() {
    var div = $("#select");
    var container = $("#select div.container");
    /*节点列表控制id为select的div*/
    $("#header>ul>li:first-child").click(function (e) {
        e.preventDefault();
        if (div.css("display") == "block") {
            div.animate({
                marginTop: 0,
                height: 0,
                padding: "0 0 0 175.28px",
                borderTopWidth: "0"
            }, 700, function () {
                div.css("display", "none");
            })
        } else {
            div.css("display", "block");
            div.animate({
                marginTop: "20px",
                height: "100px",
                padding: "20px 0 20px 175.28px",
                borderTopWidth: "2px"
            }, 700)
        }
    });
}();
+function(){
    var container=$("#select div.container");
    /*节点列表左右移动*/
    var div=container.children("div.clear");//获取移动div
    /*点击*/
    var step=470;
    $("#select>div.rt>a:nth-child(2)").click(function(e){
        e.preventDefault();
        var cwidth=parseFloat(container.css("width"));//获取容器的宽度
        var width=parseFloat(div.css("width"));//获取移动div的宽度
        var left=parseFloat(div.css("left"));//获取移动div的left值
        if(width-(cwidth-left)>=step){
            flag=-1;
            iconMove(this,left,flag);
        }else if(width-(cwidth-left)<step){
           div.css("left",cwidth-width);
            $(this).children(".b2").removeClass("active");
        }
    });
    $("#select>div.rt>a:first").click(function(e){
        e.preventDefault();
        var left=parseFloat(div.css("left"));//获取移动div的left值
        l_step=-1*step;
        if(left<=l_step){
            flag=1;
            iconMove(this,left,flag);
        }else if(left>l_step &&left<=0){
            div.css("left","0px");
            $(this).children(".b1").removeClass("active");
        }
    });
    function iconMove(skey,left,flag){
        left+=step*flag;
        div.css("left",left+"px");
        $(skey).children().addClass("active");
        $(skey).siblings().children().addClass("active");
    }
    /*拖拽*/
    var $move=false;
    var x_before;
    div.mousedown(function(e){
        var $this=$(this);
        $move=true;
        x_before=e.pageX-parseInt($this.css("left"));
        div.mousemove(function(e){
            e.preventDefault();
            var w1=parseFloat(div.css("width"));
            var w2=parseFloat(container.css("width"));
            if($move){
                var x=e.pageX-x_before;//移动时根据鼠标位置计算控件左边的绝对位置
                if(x<=0&&x>(w2-w1)){
                    div.css("left",x);//控件新位置
                    $("#select>div.rt>a:first").children().addClass("active");
                    $("#select>div.rt>a:nth-child(2)").children().addClass("active");
                }else if(x>=0){
                    div.css("left",0);
                    $("#select>div.rt>a:first").children().removeClass("active");
                }else{
                    div.css("left",w2-w1);
                    $("#select>div.rt>a:nth-child(2)").children().removeClass("active");
                }
            }
        })
    }).mouseup(function(){
        $move=false;
    }).mouseleave(function(){
        $move=false;
    });
}();
