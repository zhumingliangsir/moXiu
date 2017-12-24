<?php
header('Content-Type: text/html;charset=UTF-8');
?>
		<header id="header">
			<!--logo-->
			<div id="logo" class="lf">
				<a href="index.html" target="_blank">
					<img src="images/index/logo.png">
				</a>
			</div>
			<!-- 项目列表 -->
			<ul class="lf">
				<li>
					<a href="index.html" target="_blank">首页</a>
				</li>
				<li>
					<a href="jingpin_subject.html" target="_blank">精品主题</a>
				</li>
				<li>
					<a href="zhizuo_subject.html" target="_blank">制作主题</a>
				</li>
				<li>
					<a href="wonderful_show.html" target="_blank">精彩展示</a>
				</li>
				<li>
					<a href="help.html" target="_blank">帮助说明</a>
				</li>
				<li>
					<a href="#" target="_blank">官方微博</a>
				</li>
			</ul>
			<!-- 登录注册 -->
			<div id="register" class="rt">
				<a href="login.html" target="_blank" class="login lf">登录</a>
				<a href="register.html" target="_blank" class="rt">注册</a>
			</div>
					<script src="js/jquery-1.11.3.js"></script>
      		<script>
      			+function(){
      				var $a=$("#header>ul>li>a");
      				$a.first().addClass("hover");
      				$a.click(function(){
      					$this=$(this);
      					$this.addClass("hover");
      					$this.parent().siblings().children(".hover").removeClass("hover");
      				});
      			}();
      		</script>
		</header>
