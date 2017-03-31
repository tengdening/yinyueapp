var footer=document.querySelector("footer");
var hys=document.querySelector(".hys");
var mask=document.querySelector(".mask");
hys.addEventListener("touchstart",function(){
	if(footer.style.display == "block"){
			footer.style.display="none";
			mask.style.display="none";
		}else{
			footer.style.display="block";
			mask.style.display="block";
		}
})
mask.addEventListener("touchstart",function(){
	footer.style.display="none";
	mask.style.display="none";
})
