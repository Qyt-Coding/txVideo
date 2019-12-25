function submit1() {
	//txt文件里的数据
	var user_username;
	var user_password;
	$.get(
		"user.txt",
		"GET",
		function(data) {
			user_username = data.user_username;
			user_password = data.user_password;
			/*这两个是框内的值*/
			var inputText = $('#inputcf').val();
			var inputPassword = $('#inputda').val();
			if (inputText == user_username && inputPassword == user_password) {
				window.location.href = "index.html";

			} else {

				$('#pover1').show('slow');
			}
		},
		"json"
	);
}
/*把关闭变成隐藏*/
function alert_click() {
	$('#pover1').hide('slow');
}

function register() {
	window.location.href = "register.html";
}