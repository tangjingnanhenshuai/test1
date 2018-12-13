	

function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	

// 获取随机颜色

	function getColor(){
		var resu='';
		for(var i=0;i<10;i++){
			var a=String.fromCharCode(random(48,57));
			var b=String.fromCharCode(random(65,70));
			var c=String.fromCharCode(random(97,102));
		  resu+=a+b+c;
		}
		   var resul='#';
		 for(var j=0;j<6;j++){
		 	var sj=parseInt(Math.random()*resu.length);
		 	resul+=resu[sj];
		 }
		     return resul; 
	}
		function random(min,max){
			return Math.floor(Math.random()*(max-min+1)+min);
		}


   
//添加cookie
//参数：
//  键
//  值
//  有效期（单位：天）
//返回值：无
//addCookie("username","jzm",7);

function addCookie(key,value,dayCount,path){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);	
	var str = key+"="+escape(value)+";expires="+d.toGMTString();	
	if(path!=undefined){
		str+=";path="+path;	
	}	
	document.cookie = str;
}

//获取cookie(根据键获取值)
//参数:
// 键
//返回值：值；

function getCookie(key){
	var str=unescape(document.cookie);// "userpass=123; username=jzm; city=xian"
	//1、字符串分割成数组
	var arr = str.split("; ");
	
	//2、遍历数组，查找键
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	
	return null;	
}

//删除cookie
//参数：
//键
//返回值：无
function removeCookie(key){
	addCookie(key,"hi",-1);
}
//功能：发送ajax请求
//参数：
//   请求方式
//   请求地址
//   请求参数
//   是否异步
//   回调函数
//返回值：无

function ajax1(method,url,param,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = url;
	if(method.toLowerCase()=="get" && param!=""){
		urlAndParam +="?"+param;
	}	
	//2、
	xhr.open(method,urlAndParam,isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func&&func(xhr.responseText);
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}else{
		xhr.send();
	}
}

function ajax2(obj){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = obj.url;
	if(obj.method.toLowerCase()=="get" && obj.param!=""){
		urlAndParam +="?"+obj.param;
	}	
	//2、
	xhr.open(obj.method,urlAndParam,obj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}else{
		xhr.send();
	}
}



function ajax(obj){
	let defaultObj= {
		url:"#",
		method:"get",
		param:"",
		isAsync:true,
		func:null
	};
	/*
	for(let key in obj){  // "url"
		defaultObj[key] = obj[key];
	}	
	*/
	for(let key in defaultObj){  // "url"
		//obj[key]&&(defaultObj[key]=obj[key]);
		if(obj[key]){
			defaultObj[key]=obj[key];
		}
	}
	//1、创建对象
	let xhr = new XMLHttpRequest();
	let urlAndParam = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam +="?"+defaultObj.param;
	}	
	//2、
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}

 // 返回当时的时间字符串
  	   function getTime(){
     var t=new Date();

	  let year=t.getFullYear();
	  let montha=t.getMonth();
	  let datea=t.getDate();
	  let hoursa=t.getHours();
	  let minutesa=t.getMinutes();
	  let secondsa=t.getSeconds();
	  let month=montha<10?"0"+montha:montha;
	  let date=datea<10?"0"+datea:datea;
	  let hours=hoursa<10?"0"+hoursa:hoursa;
	  let minutes=minutesa<10?"0"+minutesa:minutesa;
	  let seconds=secondsa<10?"0"+secondsa:secondsa;
	  var end=year+'-'+(montha+1)+'-'+datea+'  '+hoursa+':'+minutesa+':'+secondsa+'';
	  return end;
   }