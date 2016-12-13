

define(function(require,exports,module){

	require('./index.css');

	require('jquery');

	require('handlebars');


	var tpl = require('./tab.tpl');

	tpl = Handlebars.compile(tpl);//编译一下tpl

	
	function tabInit(param){

		var $container = $(param.container);//拿到用户指定的容器
		//console.log($container)   //div[#news]
		//定义一个变量装要插入容器的内容
		var htmlTpl = tpl({
			tabstitle : param.tabstitle,
			tabcontent : param.contents
		});
		//console.log(htmlTpl)
		$container.html(htmlTpl);   // 插入
		var $tabtitles = $container.find('.tab-title');
		//console.log($tabtitles);
		var $tabcontents = $container.find('.tab-content').hide();
		$tabcontents.eq(0).show();
		$tabtitles.click(function(){
			$tabcontents.hide().eq($(this).index()).show();
		});
		$.each(param.contents,function(i,dom){
			$tabcontents.eq(i).append(dom);
		});
	}

	//对外提供init方法
	exports.init=tabInit;




});