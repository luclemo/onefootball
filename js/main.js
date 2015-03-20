$(function() {

	var news = $('.news');
	var matches = $('.matches');
	var browse = $('.browse');
	var btn = $('.tab-btn');


	$('a.ios').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-browse-ios.png)');
		matches.css('background-image', 'url(images/back-matches-ios.png)');
		browse.css('background-image', 'url(images/back-browse-ios.png)');
	});

	$('a.android').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-news-and.png)');
		matches.css('background-image', 'url(images/back-matches-and.png)');
		browse.css('background-image', 'url(images/back-browse-and.png)');
	});

	$('a.windows').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-news-win.png)');
		matches.css('background-image', 'url(images/back-matches-win.png)');
		browse.css('background-image', 'url(images/back-browse-win.png)');
	});

});