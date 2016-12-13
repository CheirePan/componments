
define(function(require,exports,module){

	require('jquery');

	require('button');    //按钮

	require('handlebars');

	//朦层
	var ComponentModal = require('modal');

	//弹框
	var Dialog = require('dialog');

	$('#alerttest').click(function(){
		Dialog.alert('这是提示信息',function(){
			//回调
			console.log('123');
		});
	});



	//tab
	var ComponentTab = require('tabs');

	var tpl = require('./../tpl/newitem.tpl');    

	var itemtpl = Handlebars.compile(tpl);//编译一下tpl

	//console.log(itemtpl({content:'hello'}));

	var tabstitle =['足球','篮球','乒乓球','排球'];  //定义标题

	//定义一个数组装对应的内容
	var contents = [
		'Content1',
		'Content2',
		'Content3',
		'Content4'
	];  

	var contenttpls = [];	
	for(var i=0;i<contents.length;i++){
		contenttpls.push(itemtpl({content:contents[i]}));
	}

	//初始化
	ComponentTab.init({
		container:'#news',//指定容器
		tabstitle:tabstitle, //标题
		contents:contenttpls //内容		
	});



	//modal朦层

	$(function(){
		var modal = ComponentModal.init({
			elem:$('#abc')  //获取id为abc的div      现在elem的值为一个jquery方法(函数)
		});
		$('#showmodal').click(function(){
			modal.show();
		});
		$('#close-btn').click(function(){
			modal.hide();
		});
	});
});