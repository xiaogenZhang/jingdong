$(function  () {
	$('.login1').click(function () {
		    // $('login1').css({'color':'#000','fontWeight':'400'})
			$('.login2').css('display','none')
			// $('.login2').eq($(this).index()).css('color','red')	
			$('.login2').eq($(this).index()).css('display','block')
	})
})