// 性别
var click=document.querySelector(".click");
var zyh_xb=document.querySelector(".zyh_xb");
var mask=document.querySelector(".mask");
click.addEventListener("touchstart",function(){
	if(zyh_xb.style.display == "block"){
			zyh_xb.style.display="none";
			mask.style.display="none;"
		}else{
			zyh_xb.style.display="block";
			mask.style.display="block";
		}
})
// 遮罩
mask.addEventListener("touchstart",function(e){
	zyh_xb.style.display="none";
	zyh_emali.style.display="none";
	mask.style.display="none";
	e.stopPropagation();
})
// 邮箱
var zyh_emali=document.querySelector(".zyh_emali");
var emali=document.querySelector(".emali");
emali.addEventListener("touchstart",function(){
	if(zyh_emali.style.display == "block"){
			zyh_emali.style.display="none";
			mask.style.display="none;"
		}else{
			zyh_emali.style.display="block";
			mask.style.display="block";
		}
})
// 昵称
// var nc=document.querySelector(".nc");
// var ncs=nc.innerHTML;



