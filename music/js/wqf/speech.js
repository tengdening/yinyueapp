var center_box = $('.center-section');  
var footer = $('footer');  
var wqf_bg = $('.wqf_bg');  // 蒙板
wqf_bg.height(center_box.height()+footer.height());

var wqf_return = $('.wqf_return');   // 最小化
var bg2 = $('.bg2','.wqf_bg');    //蒙板下方黑色块
var wqf_st = 0;

var v_btn = $('.v_btn');  // 声音按钮
v_btn.click(function(){
	setTimeout(function(){
		wqf_bg.css({display:"block",opacity:1});
		setTimeout(function(){
			bg2.css({height:"5.91rem",padding:".14rem .25rem"})
		},300)
	},0)

})

var voice_time = $('.voice_time','.wqf_bg');   // 时间
var bott = $('.bott','.wqf_bg');   // 三块
var time_str = "" , wqf_m = 0 , wqf_s = 0;

wqf_return.click(function(){
	bg2.css({height:0,padding:0})
	setTimeout(function(){
		wqf_bg.css({opacity:0});
		setTimeout(function(){
			wqf_bg.css({display:"none"});
		},300)
	},300)
	// 清除计算时间的setInterval
	voice_time[0].innerHTML = "0'00''";
	bott.eq(1).css({display:"none"});
	bott.eq(2).css({display:"none"});
	bott.eq(0).css({display:"flex"});
	wqf_m = 0 , wqf_s = 0;
	if (wqf_st) {
		clearInterval(wqf_st);
	}
})

var voice_btn = $('.voice_btn');	// 开始说话按钮
var round = $('.round','.wqf_bg');   // 旋转的圆
var voice_line = $('.voice_line','.wqf_bg');   // 音波
var voice_t;

// 时间
voice_btn.click(function(){
	bott.eq(0).css({display:"none"});
	bott.eq(1).css({display:"flex"});
	// 两个圆旋转
	round.css({animationPlayState:"running"})

	// 音波震动
	voice_t = setTimeout(one,0)	
	function one(){
		voice_line.eq(0).css({left:"-.92rem"})
		voice_line.eq(1).css({right:"-.92rem"});
		clearTimeout(one);
		voice_t = setTimeout(two,1000)
	}
	function two(){
		voice_line.eq(0).css({left:0})
		voice_line.eq(1).css({right:0})
		clearTimeout(two);
		voice_t = setTimeout(one,1000)
	}
	wqf_st = setInterval(function(){
		wqf_s++;
		if (wqf_s%60<10&&wqf_s%60>0) {
			time_str = wqf_m+"'0"+wqf_s+"''";
		}else if (wqf_s%60==0) {
			wqf_m++;
			wqf_s=0;
			time_str = wqf_m+"'00''";
		}else{
			time_str = wqf_m+"'"+wqf_s+"''";
		}
		voice_time[0].innerHTML = time_str;
	},1000)
})



// 重说
var again = $('.again','.wqf_bg');
again.click(function(){
	wqf_m = 0; wqf_s = 0;
	var time_str = "0'00''"
	voice_time[0].innerHTML = time_str;
})

// 说完了
var end = $('.end','.wqf_bg');
end.click(function(){
	clearInterval(wqf_st);
	clearTimeout(voice_t);

	bott.eq(1).css({display:"none"});
	bott.eq(2).css({display:"flex"});
	$('.voice_time').eq(1)[0].innerHTML = time_str;
})