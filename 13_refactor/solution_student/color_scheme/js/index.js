$('#switcher li').on('click', function(){
	// change body class to correspond with this button ID
	//clear out classes that are already on the selected item.
	$('body').removeClass();
	var thisButton = $(this).attr('id');
	$('body').addClass(thisButton);
});




//$('#grayButton').click(switchGray);
//$('#whiteButton').click(switchWhite);
//$('#blueButton').click(switchBlue);
//$('#yellowButton').click(switchYellow);

//function switchGray() {
 // $('body').attr('class', 'gray');
//}

//function switchWhite() {
//  $('body').attr('class', 'white');
//}

//function switchBlue() {
//  $('body').attr('class', 'blue');
//}

//function switchYellow() {
//  $('body').attr('class', 'yellow');
//}