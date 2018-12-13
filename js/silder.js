
     var currIndex=0;
  	 var myTimer=null;
  	 window.onload=function(){
                aotoPlay();
            $("#box").onmouseover=stopPlay;
            $("#box").onmouseout=aotoPlay;
  	   	 var lis=$("#box").lastElementChild.children;
  	   	   for(let i =0 ;i <lis.length;i++){
  	   	   	lis[i].setAttribute('index',i);
  	   	   	  lis[i].onclick=function(){
                var abs=(parseInt(this.getAttribute('index')));
                     goimg(abs);
  	   	   	  }
  	   	   }

  	 }
      
 



  	 function aotoPlay(){
  	 		if(myTimer!=null){
		      return;
	       }


  	 	myTimer=setInterval(function(){
  	 		    let outIndex = currIndex;
  	 	         currIndex++;
  	 	   if(currIndex>5||currIndex<0){
  	 	   	     currIndex=0;
  	 	   }

  	 	   shou(outIndex,currIndex);
  	 	},2000);
  	 	 
  	 }



     function goimg(inde){
      	  let outIndex = currIndex;
      	     currIndex=inde;
             	   if(currIndex>5||currIndex<0){
  	 	   	  currIndex=0;
  	 	   }
            
            shou(outIndex,currIndex);
      }

  	   function shou(outIndex,inIndex){
  	   	   let imgs=$("#box").children;
        
  	for(let i = 0;i < imgs.length-1 ;i++){
		imgs[i].style.zIndex = 0;
  	}   

           imgs[inIndex].style.zIndex = 1;
	 fadeInOut(imgs[outIndex],imgs[inIndex],1000);
         
  	   	   let lis=$("#box").lastElementChild.children;
       for( let j =0;j<lis.length;j++){
  		  lis[j].style.backgroundColor='white';

       }
  	      lis[inIndex].style.backgroundColor='red';

         	   }
         	   
      function stopPlay(){
      	if(myTimer!=null){

      	  clearInterval(myTimer);
      	  myTimer=null;
      	}
      }
