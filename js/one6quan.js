
 $(".onesk").each(function(i){
 	 $(this).click(function(i){
 	 	$("#zoby").children("div").each(function(){
 	 		  $(this).children().first().css('display',"block");
 	 		  $(this).children().last().css('display',"none");
 	 	})
 	 	 $(this).children().first().css('display',"none");
 	 	 $(this).children().last().css('display',"block");
 	 })
 })
 $(".onesxx").each(function(){
 	$(this).click(function(){
 		event.stopPropagation();
 		  $("#zoby").children("div").each(function(){
 	 		  $(this).children().first().css('display',"block");
 	 		  $(this).children().last().css('display',"none");
 	 	})
 	})
 })
 $(".jiabtn").each(function(){
 	$(this).click(function(){
 		   let obj={
                "name":$(this).parent().parent().children().first().text(),
              "shuliang":1,
                "danjia":$(this).parent().children().children().next().children().text(),
              "img":$(this).parent().parent().prev().children("img")[0].src
          }
             let str=JSON.stringify(obj);

            let ajx = new XMLHttpRequest();
            ajx.open("get","php/gouwu.php?obj="+str,"true");
            ajx.onreadystatechange=function(){
               if(ajx.readyState==4&&ajx.status==200){
                    console.log(ajx.responseText);
                    getgouwu(ajx.responseText);
               }
            }
            ajx.send();
 	})
 })
 $("#kedian").click(function(){
 	    if($("#pjy").css("display")=="none"){
 	    	 $("#pjy").css("display","block");
 	    	 $("#zh21np2").css("transform","rotate(180deg)")
 	    }else{
 	    	 $("#pjy").css("display","none");
 	    	 $("#zh21np2").css("transform","rotate(0deg)")
 	    }
 
 })
 function  xingxing(){
 	   var shu=0;
           let lis=$("#xingul").children();
 	 lis.each(function(i){
          $(this).mouseover(function(){
          	  let sep=shu>i+1?shu:i+1;
          	  for(let j =0;j<sep;j++){
          	 		$("#xingul").children().eq(j).css("backgroundPosition","0px -27px");
          	 	}
          	 	for(let j=sep;j<lis.length;j++){
          	 		$("#xingul").children().eq(j).css("backgroundPosition","0px 0px");
          	 	}
          });

          $(this).mouseout(()=>{
          	   for(let j =0;j<shu;j++){
                    $("#xingul").children().eq(j).css("backgroundPosition","0px  -27px");
                         } 
                       for(let j =shu;j<lis.length;j++){
          	 		$("#xingul").children().eq(j).css("backgroundPosition","0px  0px");
                         }
          });
          $(this).click(()=>{
          	   shu=i+1;
              	    $("#scorep").text(shu);
              	    for(let j =0;j<=shu;j++){
                     $("#xingul").children().eq(j).css("backgroundPosition","0px  -27px");
              	       };
              	    for(let j=shu;j<lis.length;j++){
                      $("#xingul").children().eq(j).css("backgroundPosition","0px  0px");
              	    }
          })
 	  })
 }

 $("#xiepl").click(function(){
 	  $("#pjqu").css("display","block");
 });
 $("#pjtj").click(function(){
 	 let str=getCookie("username");
 	 let nei=document.getElementById('pjweb').value;
 	 let fenn=$("#scorep").text();
 	    let obj={
 	    	img:"img/img/yhtx.png",
 	    	name:str,
 	    	riqi:getTime(),
 	    	content:nei,
 	    	fen:fenn
 	    }
 	    let str2=JSON.stringify(obj);
 	    let ajx=new XMLHttpRequest();
 	    ajx.open("get","php/plcy.php?ojb="+str2,true);
 	    ajx.onreadystatechange=function(){
 	    	 if(ajx.readyState==4&&ajx.status==200){
 	    	 	  console.log(ajx.responseText);
 	    	 	alert("添加成功");
 	    	 	 $("#pjqu").css("display","none");
 	    	 	getpl();
 	    	 }
 	    }
 	    ajx.send();
     
 })
  function getpl(){
       let ajx=new XMLHttpRequest();
 	     ajx.open("get","php/getpl.php",true);
 	     ajx.onreadystatechange=function(){
 	    	 if(ajx.readyState==4&&ajx.status==200){
 	    	 	  showpl(ajx.responseText);
 	    	 }
 	    }
 	    ajx.send();
  }
  function showpl(objj){
       let obj=JSON.parse(objj);
               $("#ypjd").empty();
       for(let i in obj){
       	   let ddiv=document.createElement('div');
       	   ddiv.className="yhpj";
       	   $("#ypjd").append(ddiv);
       	   let img=document.createElement("img");
       	   img.className="yhtx";
       	   img.src="img/yhtx.png";
       	   ddiv.append(img);
       	   let span1=document.createElement("span");
           span1.className="yhxx";
            ddiv.append(span1);
            let span1p1=document.createElement("p");
            span1p1.className="yhxxs";
            span1p1.innerHTML=obj[i].name;
             span1.append(span1p1);
            let span1p2=document.createElement("p");
            span1p2.className="yhxxx";
            span1p2.innerHTML=obj[i].time;
            span1.append(span1p2);
            let ul=document.createElement("ul");
            ul.className="yhxxul";
            ddiv.append(ul);
            let fen=obj[i].fen;
            for(let i=0;i<fen;i++){
            	 let li=document.createElement("li");
            	 li.className="yhxxli2";
            	 ul.append(li);
            }
            let spanp=document.createElement('p');
            spanp.className="yhdpj";
            spanp.innerHTML=obj[i].neir;
            ddiv.append(spanp);
       }
  }