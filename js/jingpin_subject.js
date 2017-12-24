$(function(){
    $("#header_d").load("header_d.php");
    $("#footer_d").load("footer_d.php");
    sessionStorage.setItem('selector','#header>ul.lf>li:nth-child(2)>a');
});
//轮播
+function() {
    var arr = ["images/jingpin-subject/banner1.jpg", "images/jingpin-subject/banner2.jpg"];
    var $ul = $("#banners ul");
    var $html = "";
    for (var i = 0; i < arr.length; i++) {
        $html += "<li><a href='#'><img src='" + arr[i] + "'/></a></li>";
    }
    $ul.html($html);
    var $liWidth = parseFloat($("#banners").css("width"));
    var $ulWidth = $liWidth * (arr.length + 1);
    $ul.css("width", $ulWidth + "px");
    $ul.children("li").css("float", "left");
    $ul.append($ul.children(":first").clone());
    var timer = null;
    var SPEED = 500;
    var WAIT = 2000;
    var n = 0;
    var flag = true;

    function autoMove() {
        timer = setTimeout(function () {
            n++;
            $ul.animate({
                left: -n * $liWidth + "px"
            }, SPEED, function () {
                $this = $("#banners div>a:eq(" + (n - 1) + ")");
                $this.removeClass("hover");
                $this.siblings().addClass("hover");
                if (n == arr.length) {
                    n = 0;
                    $ul.css("left", 0);
                }
                if (flag) {
                    autoMove();
                }
            })

        }, WAIT);

    }

    autoMove();
    $("#banners").mouseenter(function () {
        flag = false;
        clearTimeout(timer);
    }).mouseleave(function () {
        flag = true;
        autoMove();
    });

    $("#banners>div").on("click", "a", function () {
        $ul.stop(true);
        var r = $("#banners>div>a").index(this);
        $ul.animate({
            left: -r * $liWidth + "px"
        }, SPEED, function () {
            $("#banners>div>a:eq(" + r + ")").addClass("hover").siblings().removeClass("hover");
            if (r == 0) {
                n = 0;
            }
        })
    })
}();
//手风琴效果
+function(){
    $("div.ranking div.min:first").css("display","none");
    $("div.ranking div.max:first").addClass("hover");
    $("div.ranking div.max:not(:first)").css("display","none");
    $("div.ranking ol li").mouseenter(function(){
        var $this=$(this);
        $this.children("div.max").css("display","block");
        $this.children("div.min").css("display","none");
        $this.siblings("li").children("div.max").css("display","none");
        $this.siblings("li").children("div.min").css("display","block");
    });
    $("div.ranking .max").mouseenter(function(){
        $(this).addClass("hover").parent().siblings("li").children("div.ranking .max").removeClass("hover");
    });
}();