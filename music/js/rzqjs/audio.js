//收藏、下载、详情按钮效果
var shou = $(".shou");
var down = $(".down");
var xiang = $(".xiang");
var xin=true;
touch.on(shou,"tap", function () {
    if(xin){
        this.style.color="#FFF";
        xin=false;
    }else{
        this.style.color="#FF295D";
        xin=true;
    }
})
var qing = true
touch.on(xiang,"tap", function () {
    if(qing){
        this.style.color="#FFF";
        qing=false;
    }else{
        this.style.color="#FF295D";
        qing=true;
    }
})
touch.on(down,"tap", function () {
        this.style.color="#FF295D";
})

//处理时间
function time(t){
    var diff = t%3600;
    var m = Math.floor(diff/60);
    diff%=60;
    var s = Math.floor(diff);
    m = m<=9?"0"+m:m;
    s = s<=9?"0"+s:s;
    return m+":"+s;
}


//操作行   循环  播放按钮等等主体部分
var audio = document.querySelector('audio');
//var zw = jdt.offsetWidth;
var zqXunhuan = document.querySelector(".zq-xunhuan");
var xunlibtn=document.querySelectorAll(".zq-xunhuan li");
var zqList = $(".zq-list");
                //循环播放按钮
var zqBoNum = 1;
zqXunhuan.addEventListener("touchstart",function () {
    for(var i = 0;i<xunlibtn.length;i++){
        xunlibtn[i].className=" ";
    }
    xunlibtn[zqBoNum].className = "iconfont active";
    zqBoNum++;
    if(zqBoNum==xunlibtn.length){
        zqBoNum=0;
    }
})
                //播放器播放按钮
function zqbian(sele,bgcolor,color){
    sele.style.background = bgcolor;
    sele.style.color = color;
}
var zqPre = document.querySelector(".zq-pre");
var zqBo = document.querySelector(".zq-bo");
var zqNext = document.querySelector(".zq-next");
zqPre.addEventListener("touchstart",function () {
    zqbian(this,"#FF295D","#fff");
    zqPre.addEventListener("touchend",function () {
        zqbian(this,"#fff","#FF295D");
    })
})
//console.dir(audio)

var zqBoNums = 0;
var zqBoLi = document.querySelectorAll(".zq-bo>li");
var zqRec = $(".rec-bg");

zqBo.addEventListener("touchstart",function () {
    var zqBoLiac = document.querySelector(".zq-bo>li[id='action']");
    zqbian(zqBoLiac,"#FF295D","#fff");
})
zqBo.addEventListener("touchend",function () {
    if(!audio.paused){
        audio.pause();
        zqRec.removeClass("action");
    }else{
        audio.play();
        zqRec.addClass("action");
    }
    var zqBoLiac = document.querySelector(".zq-bo>li[id='action']");
    for(var i = 0;i<zqBoLi.length;i++){
        zqBoLi[i].id=" ";
    }
    zqbian(zqBoLiac,"#fff","#FF295D");
    zqBoLi[zqBoNums].id = "action";
    zqBoNums++;
    if(zqBoNums==zqBoLi.length){
        zqBoNums=0;
    }
})
zqNext.addEventListener("touchstart",function () {
    zqbian(this,"#FF295D","#fff");
    zqNext.addEventListener("touchend",function () {
        zqbian(this,"#fff","#FF295D");
    })
})
//进度条
var zqBar = document.querySelector(".zq-bar-box");
var zqmucstart = document.querySelector(".zq-mucstart");
var zqmucend = document.querySelector(".zq-mucend");
var zqYi = document.querySelector(".zq-bar-yi");
var zqQiu = document.querySelector(".zq-bar-qiu");
var bili=null;
zqQiu.addEventListener("touchstart", function (e) {
    var conx = e.clientX-zqQiu.offsetLeft-10;
    var x = null;
    alert(1)
    document.addEventListener("touchmove",function(){
        var cx = e.clientX;
        x = cx-conx;
        bili = x/zqBar.offsetWidth;
        zqYi.style.width = bili;
        audio.currentTime = audio.duration*bili;
    })
})

audio.addEventListener("canplay", function(){
    zqmucend.innerHTML=time(audio.duration);
    audio.addEventListener("timeupdate",function(){
        var now = audio.currentTime;
        zqmucstart.innerHTML = time(now);
        zqYi.style.width = (now/audio.duration)*100+"%";
    })
})
//歌词部分
//    歌词下面的小话筒点击事件；
    var huatong = document.querySelector(".zq-huatong");
    var zqCi = document.querySelector(".zq-ci");
console.log(huatong);
huatong.addEventListener("touchstart",function () {
    console.log(this);
    zqbian(this,"rgba(255,255,255,0)","#FF295D");
    this.addEventListener("touchend",function () {
        zqbian(this,"rgba(255,255,255,0)","#A29AA8");
    })
})
zqCi.addEventListener("touchstart",function () {
    alert(2)
    zqbian(this,"rgba(255,255,255,0)","#FF295D");
    this.addEventListener("touchend",function () {
        zqbian(this,"rgba(255,255,255,0)","#A29AA8");
    })
})

