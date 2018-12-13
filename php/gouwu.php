<?php
             header("Content-type:text/html;charset=utf-8");
             $objj=$_GET['obj'];
             $obj=json_decode($objj,true);
             $name=$obj["name"];
             $danjia=$obj['danjia'];
             $shuliang=$obj['shuliang'];
             $img=$obj["img"];
        $con=mysql_connect("localhost","root","root");
        if(!$con){
        	  echo "连接失败";
        }else{
            mysql_select_db("mydb1808",$con);
            $str="insert into onpluss(one1,one2,one3,one4)values('$name','$danjia','$shuliang','$img')";
            $charu=mysql_query($str,$con);
            mysql_close($con);
             if($charu==1){
             	 echo "添加成功！";
             }else{
             	 echo "亲！服务器过于忙碌，添加失败";
             }
        }
               

?>