$(document).foundation();
$(document).ready(function(){
  var myPopup = $('.orbit').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

  $('.view-gallery').click(function(){
    myPopup.magnificPopup('open');
  });
});

$(window).on('load', function(){
  setTimeout(function(){
    $('.preloader').fadeOut();
  }, 100);
});
