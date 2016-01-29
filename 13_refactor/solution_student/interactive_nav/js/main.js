// when nav li is clicked
$('nav ul li').on('click', function(){
	$('nav ul li.active').removeClass('active');
	$(this).addClass('active');
});
// show section of which LI is clicked. (section> li)
// toggle the section to SLIDE DOWN.

// when other NAV>LI is clicked. just switch the SECTION>li
