$(function(){
    $.ajax({
        url:'data/header.php',
        success:function(data){
            /*生成网站logo*/
            var html="";
            html+=`
                    <a href="${data.siteInfo.home}" target="_blank">
                        <img src="${data.siteInfo.logo}">
                    </a>
                `;
            $("#logo").html(html);
            /*生成底部网站基本信息*/
            var html_foot1="";
            html_foot1+=`
                ${data.siteInfo.copyright}
                <a href="">${data.siteInfo.bjicp}</a>
                <a href="">${data.siteInfo.jingwangwen}</a>
                ${data.siteInfo.bjpolice}
                <a href="">营业执照</a>
                <a href="">${data.siteInfo.icpzheng}</a>
                <br>
               ${data.siteInfo.address}
           `;
            $("p.content").html(html_foot1);
            /*添加网页微信和微博账号*/
            $("ul.media>li:first-child span").append(data.siteInfo.webchat);
            $("ul.media>li:nth-child(2) span a").html(data.siteInfo.weibo);
            $("p.code span").html(data.siteInfo.bjpolice);
            /*生成网站头部导航栏信息*/
            var nav_content="";
            for(var i=0;i<data.navbar.length-2;i++){
                nav_content+=`
                    <li>
                        <a href="${data.navbar[i].url}" target="_blank">${data.navbar[i].name}</a>
                    </li>
                `;
            }
            $("#header>ul").html(nav_content);
            /*导航条中的下划线的生成*/
            var selector=sessionStorage.getItem('selector');
            $(selector).addClass('hover');
            /*动态生成注册登录按钮*/
            var register="";
            register+=`
                <a href="${data.navbar[data.navbar.length-2].url}" target="_blank" class="login lf">${data.navbar[data.navbar.length-2].name}</a>
				<a href="${data.navbar[data.navbar.length-1].url}" target="_blank" class="rt">${data.navbar[data.navbar.length-1].name}</a>
            `;
            $("#register").html(register);
            /*生成网站底部导航栏信息*/
            var foot_navbar="";
            for(var item of data.foot_navbar){
                foot_navbar+=`
                    <li>
                        <a href="${item.url}" target="_blank
                        ">${item.name}</a>
                    </li>
                `;
            }
            $("div.information>div.lf>ul").html(foot_navbar);
        },
        error:function(){
            console.log('异步请求发生错误！请检查Network中的响应消息！');
        }
    });
});