<?php
             header("Content-type:text/html;charset=utf-8");
             $con=mysql_connect("localhost","root","root");
             if(!$con){
             	echo "连接失败";
             }else{
              mysql_select_db("mydb1808",$con);
               $str="select*from onpluss order by one1";
               $biaoge=mysql_query($str,$con);
               mysql_close($con);
               // $hang=mysql_fetch_array($biaoge);
               $hang=mysql_num_rows($biaoge);

                  $xia=mysql_fetch_array($biaoge);
               $htmlstr="[";
                  if(!$xia){
                     echo "null";
                  }else{
                       while($xia){
                 $htmlstr=$htmlstr.'{"name":"'.$xia[0].'","danjia":"'.$xia[1].'","shuliang":"'.$xia[2].'","img":"'.$xia[3].'"} ';
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