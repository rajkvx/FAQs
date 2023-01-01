jQuery(document).ready(function($) {

	var iconshow; 
	var iconhide; 

	if(plusicon_ !== ''){
		iconshow = '<span class="iconshow '+plusicon_+'"></span>';
	}else{
		iconshow = '<span class="iconshow">&plus;</span>';
	}
	if(minusicon_ !== ''){
		iconhide = '<span class="iconhide '+minusicon_+'"></span>';
	}else{
		iconhide = '<span class="iconhide">&ndash;</span>';
	}


	$('.faq:first-of-type').addClass('active');
	$('.faq:first-of-type .answer').show();


	$('.faq').each(function() {
		var selectchild = $(this).children('.question');
		selectchild.append('<div class="icons">'+iconshow+iconhide+'</div>');
	});
	$('body').on('click', '.faq .question', function(){
		$(this).siblings('.answer').slideToggle();
		$(this).parent('.faq').toggleClass('active');
		$(this).parent('.faq').siblings('.faq').removeClass('active');
		$(this).parent('.faq').siblings('.faq').children('.answer').slideUp();
	});
});
/* ENDS */