<?php
  header('Content-Type:application/json;charset=utf-8');
  require('init.php');
  /*获取网站基本信息*/
  $sql="SELECT * FROM mx_site_info";
  $result=mysqli_query($conn,$sql);
  $siteInfo=mysqli_fetch_assoc($result);

  /*获取导航条信息*/
  $sql="SELECT * FROM mx_navbar";
  $result=mysqli_query($conn,$sql);
  $navbar=mysqli_fetch_all($result,MYSQLI_ASSOC);

  /*获取底部导航栏信息*/
  $sql="SELECT * FROM mx_foot_navbar";
  $result=mysqli_query($conn,$sql);
  $foot_navbar=mysqli_fetch_all($result,MYSQLI_ASSOC);


  $output  = [
     'siteInfo'=>$siteInfo,
     'navbar'=>$navbar,
     'foot_navbar'=>$foot_navbar
   ];

   echo json_encode($output);
?>