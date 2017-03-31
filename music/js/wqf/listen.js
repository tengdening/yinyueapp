var round = $('.round');   // 旋转的圆
var time = $('.time');   // 时间


round.css({animationPlayState:"running"});
var s = 0;
var t = setInterval(function(){
	s++;
	time[0].innerHTML = s+"s";
},1000);
