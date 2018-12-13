<?php 
     header("Content-type:text/html,charset=utf-8");
     $objj=$_GET['ojb'];
     $obj=json_decode($objj,true);
     $img=$obj['img'];
     $name=$obj['name'];
     $riqi=$obj["riqi"];
     $content=$obj["content"];
     $fen=$obj["fen"];
     $con=mysql_connect("localhost","root","root");
     if(!$con){
     	 echo "连接失败";
     }else {
     	 mysql_select_db("mydb1808",$con);
     	 $str="insert into onpluspl(one1,one2,one3,one4,one5)values('$img','$name','$riqi','$content','$fen')";
     	 $charu=mysql_query($str,$con);
     	 mysql_close($con);
     	 if($charu==1){
     	 	 echo "添加成功";
     	 }
     }

?>