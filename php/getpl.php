<?php
  header("Content-type:text/html,charset=utf-8");
    $con=mysql_connect("localhost","root","root");
        if(!$con){
        	  echo "连接失败";
        }else{
        	  mysql_select_db("mydb1808",$con);
        	  $strr="select*from onpluspl";
        	  $biaoge=mysql_query($strr,$con);
        	  $hang=mysql_num_rows($biaoge);
        	  mysql_close($con);
        	  $xia=mysql_fetch_array($biaoge);
        	  $htmlstr="[";
        	  if(!$xia){
        	  	echo "null";
        	  }else{
        	  	 while($xia){
        	  	 	  $htmlstr=$htmlstr.'{"img":"'.$xia[0].'","name":"'.$xia[1].'","time":"'.$xia[2].'","neir":"'.$xia[3].'","fen":"'.$xia[4].'" }';
        	  $xia=mysql_fetch_array($biaoge);
        	  	 	  
        	  	 	  if($xia){
        	  	 	  	  $htmlstr=$htmlstr.",";
        	  	 	  }
        	  	 }
        	  	  $htmlstr=$htmlstr."]";
        	  	  echo $htmlstr;
        	  }

        }

?>