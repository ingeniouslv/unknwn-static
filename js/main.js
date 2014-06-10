$(function() {
	initMenu();
	setPostHeights();
	headerScroll();
});

$(window).load(function() {
	initPath();
	newsContentSetup();
	hideNav();
	loaded();
});

$(window).on("resize",function(){
  setPostHeights();
  newsContentSetup();
  hideNav();
});

function initMenu() {
	$('a.btn-open-menu').click(function(e) {
		$('.path-overlay').removeClass('is_hidden');
		$('.path-menu').removeClass('is_hidden');
		$('.scroller').addClass('menuactive');
		e.preventDefault();
	});
	
	$('.menuclose').click(function() {
		closemenu();
	});
	$('.path-overlay').click(function() {
		closemenu();
	});
	
	function closemenu() {
		$('.path-overlay').addClass('is_hidden');
		$('.path-menu').addClass('is_hidden');
		$('.scroller').removeClass('menuactive');
		e.preventDefault();
	}
}

function hideNav() {

	if ($(window).width() >= 768) {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var st = $(this).scrollTop();

			if (st > lastScrollTop && st > 60){
				$('#header').addClass('navbar-hide');
			} else {
				$('#header').removeClass('navbar-hide');
			}

			lastScrollTop = st;
		});

		$('#header').hover(function() {
			$(this).removeClass('navbar-hide');
		});
	}
	
}

/* initiate the packing script */
function initPath() {
	var $container = $('#path');
	
	$container.packery({
		itemSelector: '.post'
	});
}

function headerScroll() {
	var position = $(window).scrollTop();
	$(window).scroll(function() {
		position = $(window).scrollTop();
		console.log(position);
	
		if (position >= 100) {
			$('.path-logo').addClass('shrink');
			console.log('shrink the logo.');
		} else if (position < 100) {
			$('.path-logo').removeClass('shrink');
			console.log('un-shrink the logo.');
		}
	});
}

function setPostHeights() {
  var fullPagePostRatio = 1/2;
  var featureRatio = 2/3;
  var doubleTallRatio = 1/2;
  var doubleWideRatio = 2/3;
  var doubleWideRightRatio = 2/3;
  var superTallRatio = 3/2;

  var fullPagePost =$('.fullpage-post')
  var featurePost = $(".feature");
  var singleTallPost = $('.single-tall');
  var doubleTallPost = $(".double-tall");
  var doubleWidePost = $(".doublewide");
  var doubleWideRightPost = $(".doublewide.right");
  var superTallPost = $('.tall');

  var fullPagePostWidth = fullPagePost.width();
  var featurePostWidth = featurePost.width();
  var doubleTallPostWidth = doubleTallPost.width();
  var doubleWidePostWidth = doubleWidePost.width();
  var doubleWideRightPostWidth = doubleWideRightPost.width();
  var superTallPostWidth = superTallPost.width();

  var fullPagePostHeight = fullPagePostWidth * fullPagePostRatio;
  var featurePostHeight = featurePostWidth * featureRatio;
  var singleTallPostHeight = featurePostHeight * doubleTallRatio;
  var doubleTallPostHeight = featurePostHeight;
  var doubleWidePostHeight = featurePostHeight/2;
  var doubleWideRightPostHeight =  doubleWidePostHeight;
  var superTallPostHeight = superTallPostWidth * superTallRatio;


//    alert(doubleWidePostHeight);
    featurePost.css({'height': featurePostHeight});
    fullPagePost.css({'height': fullPagePostHeight});
    singleTallPost.css({'height': singleTallPostHeight});
    doubleTallPost.css({'height': doubleTallPostHeight});
    doubleWidePost.css({'height': doubleWidePostHeight});
    doubleWideRightPost.css({'height': doubleWideRightPostHeight});
    superTallPost.css({'height': superTallPostHeight});

  if($(window).width()>640){
    featurePost.css({'height': featurePostHeight});
    fullPagePost.css({'height': fullPagePostHeight});
    singleTallPost.css({'height': singleTallPostHeight});
    doubleTallPost.css({'height': doubleTallPostHeight});
    doubleWidePost.css({'height': doubleWidePostHeight});
    doubleWideRightPost.css({'height': doubleWideRightPostHeight});
    superTallPost.css({'height': superTallPostHeight});
  } else {
    featurePost.css({'height': featurePostWidth});
    fullPagePost.css({'height': fullPagePostWidth});
    doubleTallPost.css({'height': doubleTallPostWidth});
    doubleWidePost.css({'height': doubleWidePostWidth});
    doubleWideRightPost.css({'height': doubleWidePostHeight});
    superTallPost.css({'height': superTallPostHeight});
  }
}

function newsContentSetup() {
	var footerH = $('#site-footer').height(),
		winH = $(window).height();
	$('section.post-content').css({ 'height': winH });
	$('section.product-info').css({ 'height': winH });
}

function loaded() {
	$('#preloader').delay(400).fadeOut(400);
}