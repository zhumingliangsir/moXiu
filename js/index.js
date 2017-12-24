$(function(){
  $("#header_d").load("header_d.php");
  $("#footer_d").load("footer_d.php");
    sessionStorage.setItem('selector','#header>ul.lf>li:first>a');
});
/*banner图按钮控制切换部分*/
+function(){
    //获取第一个a，设置其初始样式
    var $con_a=$("#control>li>a");
    $con_a.first().addClass("hover");
    $con_a.click(function(){//添加鼠标点击事件
        var $this=$(this);
        $this.addClass("hover").parent().siblings().children().removeClass("hover");
        var n=$this.parent().index("#control>li");
        $("#banner>div:eq("+n+")").css("display","block").siblings("div").css("display","none");
})
}();
//介绍部分
+function(){
	$(window).scroll(function(){
		var $top=$("body").scrollTop();
		var $imgs=$("#main p img"),$divs=$("#main div.introduce"),$p=$("#main p");
		if($top>=500){
			$imgs.addClass("scroll");
			$divs.addClass("scroll");
			$p.addClass("scroll");
		}else{
			$imgs.removeClass("scroll");
			$divs.removeClass("scroll");
			$p.removeClass("scroll");
		}
	});
}();