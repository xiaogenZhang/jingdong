 
$(function  () {
	$('.goods-left .pic1').mouseover(function() {
		// 获取小图的位置
		var minP = $(this).offset();
		// 显示放大的图片
		$('.show').show();
		// 显示 大图的位置
		// $('.show').css({top:minP.top,left:minP.left+$(this).width()+5});

		$('.z').show();


	}).mouseout(function() {
		// 鼠标移出小图
		$('.show').hide();	
		$('.z').hide();

	// 鼠标移动事件
	}).mousemove(function(e){
		// 鼠标相对于小图的位置
		var minTop = e.pageY-$(this).offset().top;
		var minLeft= e.pageX-$(this).offset().left;

		// 设置 大图滚动条的位置
		$('.show').scrollTop(minTop*2-275)
			     .scrollLeft(minLeft*2-275);

		// 设置遮罩的位置
		var x = 0;
		var y = 0;

		// console.log(minLeft+'--'+minLeft);
		// 设置遮罩的边界
		if(minLeft<75){
			x = 0;
		}else if(minLeft>275){
			x = 200;
		}else{
			x = e.pageX-75;
		}


		if(minTop<75){
			y = 0;
		}else if(minTop>305){
			y = 230;
		}else{
			y = e.pageY-260;
		}

		$('.z').css({top:y,left:x})
	});
})