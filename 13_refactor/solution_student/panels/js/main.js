//hide all articles on page load.
$('.panel').hide();
//then show just the home article.
$('#home').show();


// user clicks on li in nav
$('nav li').on('click', function(){

	//remove active class from currently active li
	$('li.active').removeClass('active');
	//add the active class to the LI clicked on
	$(this).addClass('active');
	//fade out the article that is visible
	$('.panel').hide();
	//fade in the article with the id that corresponds to the data-attribute of the li clicked on.
	var thisArticle = $(this).find('a').data('panel');
	
	$('#' + thisArticle).fadeIn(500);

});