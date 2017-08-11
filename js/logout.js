layui.define(['layer'], function(exports) { 
	var layer = layui.layer;
	var $ = layui.jquery;
	
	$("#logout").click(function(){
		sessionStorage.removeItem('exp');
		sessionStorage.removeItem('token');
		location.href='login.html';
	})
	
	exports('logout', {});
})
