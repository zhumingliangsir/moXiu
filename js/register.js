$(function(){
    $("#header_d").load("header_d.php");
    $("#footer_d").load("footer_d.php");
    sessionStorage.setItem('selector','#header>ul.lf>li:first>a');
});
+function(){
    $form=$("form");
    $btn=$("#btn");
    var $inputs=$("input[type=text],input[type=password]");
    var $m={REG:"/\\w+@\\w+/",NULL:"邮箱不能为空",ERROR:"邮箱格式不正确，请重新输入"};
    var $n={REG:"/^\\w{6,30}$/",NULL:"用户名不能为空",ERROR:"用户名格式不正确，请重新输入"};
    var $p={REG:"/^\\w{6,20}$/",NULL:"密码不能为空",ERROR:"密码格式不正确，请重新输入"};
    var flag;
    function match($obj){
        flag=false;
        var $reg=eval($obj.REG);
        var $this=$(this);
        var b=$this.siblings("b");
        var span=$this.siblings("span:last");
        //var data='{'+$this.attr("name")+':'+$this.val()+'}';
        //console.log(data);
        if($this.val()==""){
            b.removeClass("ok").addClass("error");
            span.html($obj.NULL).addClass("error");
        }else if(!$reg.test($this.val())){
            b.removeClass("ok").addClass("error");
            span.html($obj.ERROR).addClass("error");
        }else{
            flag=true;
        }
    };
    $("#Usermail input").blur(function(){
        match.call(this,$m);
        $this=$(this);
        var b=$this.siblings("b");
        var span=$this.siblings("span:last");
        if(flag===true){
            $.ajax({
                type:"POST",
                url:"data/register_reg.php",
                data:{umail:$this.val(),uname:""},
                success:function(data){
                    if(data.code==-1){
                        b.removeClass("ok").addClass("error");
                        span.html(data.msg).addClass("error");
                    }else{
                        b.removeClass("error").addClass("ok");
                        span.html("").removeClass("error");
                    }
                },
                error:function(){
                    console.log("响应失败，请查看network");
                }
            });
        }
    });
    $("#Username input").blur(function(){
        match.call(this,$n);
        $this=$(this);
        var b=$this.siblings("b");
        var span=$this.siblings("span:last");
        if(flag===true){
            $.ajax({
                type:"POST",
                url:"data/register_reg.php",
                data:{uname:$this.val(),umail:""},
                success:function(data){
                    console.log(1);
                    if(data.code==-1){
                        b.removeClass("ok").addClass("error");
                        span.html(data.msg).addClass("error");
                    }else{
                        b.removeClass("error").addClass("ok");
                        span.html("").removeClass("error");
                    }
                },
                error:function(){
                    console.log("响应失败，请查看network");
                }
            });
        }

    });
    $("#Userpwd input").blur(function(){
        match.call(this,$p);
        $this=$(this);
        var b=$this.siblings("b");
        var span=$this.siblings("span:last");
        if(flag===true){
            b.removeClass("error").addClass("ok");
            span.html("").removeClass("error");
        }
    });
    $("#Userpwdnext input").blur(function(){
        $this=$(this);
        var b=$this.siblings("b");
        var span=$this.siblings("span:last");
        if($this.val()==""){
            b.removeClass("ok").addClass("error");
            span.html("请确认密码").addClass("error");
        }else if($this.val()!=$("input[name=u_pwd]").val()){
            b.removeClass("ok").addClass("error");
            span.html("密码不符，请重新输入").addClass("error");
        }else{
            b.removeClass("error").addClass("ok");
            span.html("").removeClass("error");
        }
    });
    $("input[type=checkbox]").click(function() {
        if ($("input[type=checkbox]").is(":checked")) {
            $btn.removeAttr("disabled").removeClass("disabled");
        } else {
            $btn.attr("disabled","true").addClass("disabled");
        }
    });
    $("#btn").click(function(){
        for(var i=0;i<$inputs.length;i++) {
            if ($($inputs[i]).val() == "") {
                $($inputs[i]).focus();
                $($inputs[i]).siblings("b").addClass("error").siblings("span:last").html("输入不能为空").addClass("error");
                break;
            }
            if ($($inputs[i]).siblings("b").hasClass("error")) {
                $($inputs[i]).focus();
                break;
            }
            if (i == 3&&$($inputs[i]).siblings("b").hasClass("ok")) {
                $.ajax({
                    type:"POST",
                    url:"data/register_insert.php",
                    data:{umail:$("#Usermail input").val(),uname:$("#Username input").val(),upwd:$("#Userpwd input").val()},
                    success:function(data){
                        if(data.code==1){
                            console.log("注册成功");
                        }else{
                            console.log("注册失败");
                        }
                    },
                    error:function(){
                        console.log("响应失败，请查看network");
                    }
                });
            }
        }
    });
}();