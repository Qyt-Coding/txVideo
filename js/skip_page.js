window.onload = function() {
	getTime();
}
str = 5;

function getTime() {
	$('#span1').html(str.toString());
	time = setTimeout("getTime()", 1000);
	if (str == 0) {
		clearInterval(time);
		window.location.href = "login3.html"
	}
	str--;

}