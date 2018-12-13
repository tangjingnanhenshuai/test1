<?php
   header("Content-type:text/html;charset=utf-8");
   // $name=$_GET['name'];
   $name=$_GET['username'];
   // $mima=$_GET['mima'];
   $mima=$_GET['psd'];

   // echo $name;
   // echo $mima;
   $con=mysql_connect("localhost","root","root");
   if(!$con){
   	echo "连接失败";
   }else{
      mysql_select_db("mydb1808",$con);
      $str="select*from onplus where onname='$name'and onmima='$mima'";
      $biao=mysql_query($str,$con);
      mysql_close($con);
   
      if(mysql_num_rows($biao)==0){
          echo "您输入的账号或密码有误，请重新 <a href='../login.html'> 登录 </a>";
          echo "<script type='text/javascript'>setTimeout(function(){
            document.location='../login.html'
         },2500) </script>";
          // echo "no";
      }else{
            echo "登录成功，七天之内免登录，正在   <a href='../oneplus.html'>跳转首页</a>";
            echo "<script type='text/javascript'>setTimeout(function(){
            document.location='../oneplus.html';
         },2500) </script>";
         // echo "ok";
      }

   }
  
?>