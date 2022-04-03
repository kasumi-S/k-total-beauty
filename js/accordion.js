$(function(){
	$('.question').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});