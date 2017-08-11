layui.define(['layer', 'form'], function(exports) { 
	var layer = layui.layer;
	var form = layui.form();
	var $ = layui.jquery;
	
	var loginContent='<div class="update">'+
					'<form class="layui-form" action="">'+
					'<div class="layui-form-item">'+
					'<label class="layui-form-label">旧密码</label>'	+
					'<div class="layui-input-block">'+		
					'<input type="password" name="pass1" required lay-verify="required" autocomplete="off" class="layui-input"></div></div>	'+		
					'<div class="layui-form-item">'+				
					'<label class="layui-form-label">新密码</label>'	+		
					'<div class="layui-input-block">'+		
					'<input type="password" name="pass2" required lay-verify="required" autocomplete="off" class="layui-input"></div></div>'+
					'<div class="layui-form-item">'+				
					'<label class="layui-form-label">密码确认</label>'	+		
					'<div class="layui-input-block">'+		
					'<input type="password" name="pass3" required lay-verify="required" autocomplete="off" class="layui-input"></div></div>'+
					'<div class="layui-form-item">'+			
					'<div class="layui-input-block">'+			
					'<button class="layui-btn" lay-submit lay-filter="passForm">立即提交</button>'+			
					'<button type="reset" class="layui-btn layui-btn-primary">重置</button></div></div></form></div>';
	
	var index;
	$("#update-btn").click(function(){
		index = layer.open({
			type: 1,
			title: '修改密码',
			closeBtn: 2,
			area: ['500px'],
			shadeClose: true,
			content: loginContent
		});
	})
	
	form.on('submit(passForm)', function(data){
	    layer.msg(JSON.stringify(data.field));
	    
	    //layer.close(index);
	    return false;
	});
	
	exports('login', {});
})
