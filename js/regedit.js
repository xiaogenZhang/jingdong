$(function  () {
	$('.left-content form .everLine').click(function  () {
		// $('.left-content form p span').removeClass('a')
		$('.left-content form p span').hide();
		// console.log($(this).index()/2)
		// $('.left-content form p span').eq($(this).index()).addClass('a')
		$('.left-content form p span').eq($(this).index()/2).show()
	})

	var p1=/^[A-z0-9-_]{4,20}$/
	var p2=/^\w{6,20}$/
	var p3=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
	var p4=/^1[34578][0-9]{9}$/
	$('#user').blur(function  fun1() {
		if (p1.test($(this).val())) {
			// alert('ok')
			$('.left-content form .everLine').eq(0).css("border","1px solid green")
			return true;
		}else{
			$('.left-content form .everLine').eq(0).css("border","1px solid red")
			return false;
		}
	})

	$('#password').blur(function  () {
		if (p2.test($(this).val())) {
			// alert('ok')
			$('.left-content form .everLine').eq(1).css("border","1px solid green")
			
		}else{
			$('.left-content form .everLine').eq(1).css("border","1px solid red")
		}
	})	

    $('#re_password').blur(function  () {
		if ($('#password').val()==$(this).val()) {
			// alert('ok')
			$('.left-content form .everLine').eq(2).css("border","1px solid green")
		}else{
			$('.left-content form .everLine').eq(2).css("border","1px solid red")
		}
	})	

	$('#email').blur(function  () {
		if (p3.test($(this).val())) {
			// alert('ok')
			$('.left-content form .everLine').eq(3).css("border","1px solid green")
		}else{
			$('.left-content form .everLine').eq(3).css("border","1px solid red")
		}
	})	

	$('#phone').blur(function  () {
		if (p4.test($(this).val())) {
			// alert('ok')
			$('.left-content form .everLine').eq(4).css("border","1px solid green")
		}else{
			$('.left-content form .everLine').eq(4).css("border","1px solid red")
		}
	})

	$('.regedit').click(function  () {
		if (fun1()=="true") {
			alert('注册成功')
		};
	})	
})
