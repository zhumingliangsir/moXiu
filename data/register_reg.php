<?php
  header("Content-Type:application/json;charset=utf-8");
  require("init.php");
  @$umail=$_REQUEST['umail'];
  @$uname=$_REQUEST['uname'];
  if($umail!==""){
    $sql1="SELECT * FROM mx_register_info WHERE umail='$umail'";
    $result1=mysqli_query($conn,$sql1);
    $row1=mysqli_fetch_assoc($result1);
    if($row1!==null){
      echo '{"code":-1,"msg":"该邮箱已被注册"}';
    }else{
      echo '{"code":1}';
    }
  }
  if($uname!==""){
    $sql2="SELECT * FROM mx_register_info WHERE uname='$uname'";
    $result2=mysqli_query($conn,$sql2);
    $row2=mysqli_fetch_assoc($result2);
    if($row2!==null){
      echo '{"code":-1,"msg":"该用户名已被注册"}';
    }else{
      echo '{"code":1}';
    }
  }
?>