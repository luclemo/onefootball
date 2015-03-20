$(function() {
	
	// ==================================
	// Tabbed buttons in features section
	// ==================================
	
	// caching buttons and sections
	var news = $('.news');
	var matches = $('.matches');
	var browse = $('.browse');
	var btn = $('.tab-btn');

	// ios buttons & backgrounds
	$('a.ios').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-browse-ios.png)');
		matches.css('background-image', 'url(images/back-matches-ios.png)');
		browse.css('background-image', 'url(images/back-browse-ios.png)');
	});

	// android buttons & backgrounds
	$('a.android').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-news-and.png)');
		matches.css('background-image', 'url(images/back-matches-and.png)');
		browse.css('background-image', 'url(images/back-browse-and.png)');
	});

	// windows buttons & backgrounds
	$('a.windows').on('click', function(e){
		e.preventDefault();
		btn.removeClass('active-state');
		$(this).addClass('active-state');
		news.css('background-image', 'url(images/back-news-win.png)');
		matches.css('background-image', 'url(images/back-matches-win.png)');
		browse.css('background-image', 'url(images/back-browse-win.png)');
	});

	// ==================================
	// Press Section
	// ==================================

	


}); // end jQuery