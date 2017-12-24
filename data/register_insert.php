<?php
  header("Content-Type:application/json;charset=utf-8");
  require("init.php");
  $umail=$_REQUEST['umail'];
  $uname=$_REQUEST['uname'];
  $upwd=$_REQUEST['upwd'];
  $sql="INSERT INTO mx_register_info VALUES(null,'$uname','$upwd','$umail')";
  $result=mysqli_query($conn,$sql);
  if($result){
    echo '{"code":1,"msg":"зЂВсГЩЙІ"}';
  }else{
    echo '{"code":-1,"msg":"зЂВсЪЇАм"}';
  }
?>