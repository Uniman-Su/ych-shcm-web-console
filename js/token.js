layui.use(['layer'], function() { 
	
    var $ = layui.jquery;	
    var token = sessionStorage.getItem('token');
	var user = sessionStorage.getItem('user');
	alert(token);
	var exp = sessionStorage.getItem('exp');
	var now = new Date().getTime();
	var time = parseInt(((exp-now)/1000-600)*1000);
	//console.log(time);
	setTimeout(function(){
		$.ajax({
			type:"post",
			url:"http://192.168.1.145:8080/userinf/console/logon/refreshToken",
			data: token,
			contentType:"text/plain",
			dataType:"json",
			success:function(data){
				var token = data.data;
				var base64Str=token.split('.')[1];
				var base = new Base64();  
				var result2 = base.decode(base64Str);
				result2 = result2.substring(result2.indexOf("{"));
				result2 = result2.substring(0, result2.lastIndexOf("}") + 1);
				var result2 = JSON.parse(result2);
				var exp = new Date(result2.exp*1000).getTime();
				sessionStorage.setItem('exp',exp);
				sessionStorage.setItem('token',token);
				//console.log(token);
			}
		});
	},time);
	$("#user").html(user);
	if(!token){
		location.href='login.html';
	}
	
})
