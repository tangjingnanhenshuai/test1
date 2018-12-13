 
 
 function geet(){
                 console.log("mmp");

         let str=getCookie("username");
         if(str!="null"){
         	   // $("#yonghu").innerHTML="用户："+str;
             $("#yonghu").html("用户："+str);
         	 // $("#denglv").style.display="none";
             $("#denglv").css("display",'none');
         	 // $("#yonghu").style.display="block";
             $("#yonghu").css("display","block");
         	 // $("#tuichu").style.display="block";
             $("#tuichu").css("display","block");
          

         }else{
         	 // $("#denglv").style.display="block";
             $("#denglv").css("display","block");
         	 // $("#yonghu").style.display="none";
             $("#yonghu").css("display","none");
         	 // $("#tuichu").style.display="none";
             $("#tuichu").css("display","none");
         }
      
        }



       $("#tuichu").click(function(){
                 console.log("mmp");

                  addCookie("username","?",-1);
              
                 $("#denglv").css("display",'block');
                 $("#yonghu").css("display","none");
                  $("#tuichu").css("display","none");
              geet();
             });
        



   function getgouwu(){
          console.log("onload");

   	    let ajx=new XMLHttpRequest();
   	    ajx.open("get","php/getgouwu.php",true)
   	    ajx.onreadystatechange=function(){
   	    	 if(ajx.readyState==4&&ajx.status==200){
   	    	 	showd(ajx.responseText);
   	    	 }
   	    }
   	    ajx.send();
   }




    function showd(ojb){
         if(ojb==null){
          $("#headermmd").css("display","block");
           $("#shangpin").css("display","none");
           $("#zongjia").css("display","none");
           $("#jiesuan").css("display","none");
         } else{

           $("#headermmd").css("display","none");
           $("#shangpin").css("display","block");
           $("#zongjia").css("display","block");
           $("#jiesuan").css("display","block");
           
             $("#shangpin").empty();
          
         let obj=JSON.parse(ojb);
          // console.log(obj[0]["name"]);
          let jiaq=0;
        for(let i in obj){
             let shanga= document.createElement("a");
               shanga.className="shang";
             let shangss=document.createElement("img");
              shangss.className="shangspan";
              // console.log(obj[i]['img']);
              shangss.src=obj[i]['img'];
             shanga.append(shangss); 
             let shangp=document.createElement("p");
             shangp.className="shangps";
             shanga.append(shangp);
             let shangps1=document.createElement("span");
             shangps1.className="shangps1";
             shangps1.innerHTML=obj[i]["name"]+"<br/>";
             shangp.append(shangps1);
             // shangp.append(<br/>);
             let shangg=document.createElement("span");
             shangg.className="shangg";
             shangg.innerHTML=" ￥ ";
             shangp.append(shangg);
             let shangps2=document.createElement("span");
             shangps2.className="shangpxdj";
             shangps2.innerHTML=obj[i]["danjia"];
             shangp.append(shangps2);
             let shangps3=document.createElement("span");
                shangps3.className="shangpxy";
               shangp.append(shangps3);
            let shangps31=document.createElement("button");
                shangps31.className="jian";
                shangps31.innerHTML="-";
              shangps3.append(shangps31);
              let shangps32=document.createElement('span');
              shangps32.className="shuzz";
              shangps32.innerHTML=obj[i]['shuliang'];
              shangps3.append(shangps32);
              let shangps33=document.createElement("button");
              shangps33.className="jia";
                shangps33.innerHTML="+";
                 shangps3.append(shangps33);
             $("#shangpin").append(shanga);
                   // console.log($("#shangpin").offsetHeight);
          // if($("#shangpin").css("height")>=300){
              $("#shangpin").css("height","300px");
          // }

            jiaq+=parseInt(obj[i]["danjia"]*obj[i]['shuliang']);
         }

        } 
      
          $("#zzong").html(jiaq);
          $(".jia").each(function(){
             $(this).click(()=>{
               // console.log($(this));
               let num= $(this).prev().text();
                    num++;
                $(this).prev().text(num);
           zongjiaa();
               
             })
          });
        $(".jian").each(function(){
              $(this).click(()=>{
                      let num=$(this).next().text();
                        num--;
                   if(num<=0){
                        num=0;
                      if(confirm("是否删除改商品")){
                         let yaoshan=$(this).parent().parent().parent();
                         let ming=$(this).parent().prev().prev().prev().text();

                         // console.log(ming);

                          // shanccc(yaoshan,ming);
                                 let ajx= new XMLHttpRequest();
                         ajx.open("get","php/shanchu.php?name="+ming,true);
                          ajx.onreadystatechange=function(){
                              if(ajx.readyState==4 && ajx.status==200){
                                // console.log(ajx.responseText);
                                    // yaoshan.hide();
                                    yaoshan.remove();
                                    // shanc(ajx.responseText);
                              }
                             }
                            ajx.send();
                      
                      }
                   }
                   $(this).next().text(num);
                   zongjiaa();
              })
        })
     }






     
     function zongjiaa(){
      let zong=0;
         $(".shangpxdj").each(function(){
             let danjia=$(this).text();
             let shuliang=parseInt($(this).next().children().eq(1).text());
             zong+=danjia*shuliang;
         })
         $("#zzong").html(zong);
     }
    

 
    function shanc(ojb){
       console.log(ojb);
    }