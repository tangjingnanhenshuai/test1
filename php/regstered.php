<?php
  
	header("Content-type:text/html;charset=utf-8");
	$onname=$_GET['username'];
	$onmima=$_GET['psd'];
   $con=mysql_connect("localhost","root","root");
   if(!$con){
   	  echo "连接失败";
   }
       mysql_select_db("mydb1808",$con);
      $str="insert into onplus(onname,onmima)values('$onname','$onmima')";
      $strr=mysql_query($str,$con);
      mysql_close($con);
      if($strr==1){
      	echo "亲!恭喜您注册成功！请 <a href='../login.html'>  登录  </a>  两秒后自动跳转到登录页面";
         echo "<script type='text/javascript'>setTimeout(function(){
            document.location='../login.html'
         },2500) </script>";
      }else{
      	echo "亲!服务器好像出问题了，请 <a href='../regtered.html'> 重新注册</a>";
      }


?>