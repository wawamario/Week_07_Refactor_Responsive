// when user clicks any dt
	$('dt').on('click', function(){
	//hide currently active dd
	$('dd').slideUp(350);
	//remove the active class
	$('dt').removeClass('active');

	//add active class to the clicked on
	$(this).addClass('active');

	//expose the corresponding dd
	$(this).next().slideDown(350);

	});