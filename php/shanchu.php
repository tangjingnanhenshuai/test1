<?php
             header("Content-type:text/html;charset=utf-8");
            $name=$_GET['name'];
            $con=mysql_connect("localhost","root","root");
            if(!$con){
            	 echo "连接失败";
            }else{
                  echo "连接ok";
            	 mysql_select_db("mydb1808",$con);
            	 $str="delete from onpluss where one1='$name'";
            	 $shan=mysql_query($str,$con);
            	 mysql_close($con);
            	 if($shan==1){
            	 	 echo "删除成功";
            	 }
            }
?>