<?php
   header("Content-type:text/html;charset=utf-8");
    $chong=$_GET['onnn'];
     $con=mysql_connect("localhost","root","root");
   if(!$con){
   	  echo "连接失败";
   }
      // echo "连接正常";
      // echo $chong;
     mysql_select_db("mydb1808",$con);
     $str="select * from onplus where onname='$chong'";
     $biao=mysql_query($str,$con);
     $row=mysql_num_rows($biao);
     echo $row;
?>