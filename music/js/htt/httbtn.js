//按钮
var btnbox=document.querySelector('.btnbox');//获取按钮盒子
var baibtn=document.querySelector('.baibtn');//获取按钮

var flag=false;
baibtn.addEventListener("touchstart",function(){
    flag=!flag;
    if(flag==true){
        kai();
    }else{
        guan();
    }

})

function kai(){
    baibtn.style.transform="translateX(0.5rem)";
    // btnbox.style.background="#fff";
    // baibtn.style.background="#fff";
}
function guan(){
    baibtn.style.transform="translateX(0rem)";
    // btnbox.style.background="#fff";
    // baibtn.style.background="#EE686B";
}

