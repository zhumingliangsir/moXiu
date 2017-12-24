SET NAMES UTF8;
DROP DATABASE IF EXISTS moxiu;
CREATE DATABASE moxiu CHARSET=UTF8;
USE moxiu;

/**网站基本信息表**/
CREATE TABLE mx_site_info(
  ino INT PRIMARY KEY AUTO_INCREMENT,
  logo VARCHAR(64),
  siteName VARCHAR(32),
  adminMail VARCHAR(64),
  qqgroup VARCHAR(20),
  webchat VARCHAR(32),
  weibo VARCHAR(32),
  icpzheng VARCHAR(64),
  copyright VARCHAR(64),
  bjpolice VARCHAR(32),
  bjicp VARCHAR(32),
  address VARCHAR(100),
  jingwangwen VARCHAR(32),
  home VARCHAR(32)
);
INSERT INTO mx_site_info VALUES
(null, 'images/index/logo.png', '魔秀网', '1435832077@qq.com', '415160942','liyun1435832077','魔秀网','京ICP证150474号', '©2015 魔秀','京公网安备 11010502027111号','京ICP备14006571号-1','魔秀科技（北京）股份有限公司 北京市朝阳区双营路6号院1号楼 （86-10）64465918','京网文[2012]0007-006号','index.html');

/**导航条栏目表**/
CREATE TABLE mx_navbar(
  nno INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(64),
  url VARCHAR(64)
);
INSERT INTO mx_navbar VALUES
(NULL, '首页','index.html'),
(NULL, '精品主题','jingpin_subject.html'),
(NULL, '制作主题','zhizuo_subject.html'),
(NULL, '精彩展示','wonderful_show.html'),
(NULL, '帮助说明','help.html'),
(NULL, '官方微博','#.html'),
(NULL, '登录','login.html'),
(NULL, '注册','register.html');

/**底部导航条栏目表**/
CREATE TABLE mx_foot_navbar(
  fno INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(64),
  url VARCHAR(64)
);
INSERT INTO mx_foot_navbar VALUES
(NULL, '关于魔秀','footer_details.html'),
(NULL, '魔秀合作','footer_details.html'),
(NULL, '招贤纳士','footer_details.html'),
(NULL, '联系我们','footer_details.html'),
(NULL, '版权声明','footer_details.html'),
(NULL, '友情链接','footer_details.html');

/**用户注册表**/
CREATE TABLE mx_register_info(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(64),
  upwd VARCHAR(64),
  umail  VARCHAR(64)
);
INSERT INTO mx_register_info VALUES
(null,'aaaaaa','123456','142523@sadfads'),
(null,'bbbbbb','123456','854215@sadfads'),
(null,'cccccc','123456','965820@sadfads'),
(null,'dddddd','123456','458127@sadfads');