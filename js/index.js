$(function(){
	$('.video_show').click(function(){
		$('#tab > div').css('display','none');
		var  i=$(this).index();
		i=i-2;
		$('#tab > div').eq(i).css('display','block');
		$('.video_show').removeClass('active');
		$(this).addClass('video_show active');
	})
})
