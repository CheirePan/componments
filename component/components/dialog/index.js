
//弹框
define(function(require,exports,module){

	require('./index.css');

	require('jquery');

	require('handlebars');

	var tpl = require('./dialog.tpl');

	tpl = Handlebars.compile(tpl);

	var interface={}  //定义一个对象
	interface.alert = function(msg,callback){
		msg = msg || '确认信息提示';
		if($('#qf-dialog-alert').lenght>0){
			
		} else{
			$(document.body).append(tpl({msg:msg}));
			$('#qf-dialog-alert-btn').click(function(){
				$('#qf-dialog-alert').hide();
				callback();
			});
		}
		$('#qf-dialog-alert').show();
	}

	module.exports = interface;

});