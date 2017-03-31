$(".tab-area li").on("click",function(){
	var classname = $(this).attr("class");
	
	
	$(this)
	.addClass("active")
	.siblings("li")
	.removeClass("active");
	
	
	
	$(".fjj-service")
	.children("."+classname)
		.addClass("active")
	.siblings()
		.removeClass("active")
	
})
