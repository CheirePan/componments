/**
* @description 朦层模块js
* @author      Cherie
* @time        2016/12/1 15:39
* @version     1.0
*/

define(function(require,exports,module){	

	//引入modal样式
	require('./index.css');

	require('jquery');

	var tpl = require('./modal.tpl');  //模板

	$(document.body).append( $(tpl) );//加在html最后

	function modalInit (param){  //加载函数
		param = param || {};   // 刚进来作下判断,传进来的param,不存在则设为空对象
		var $elem = param.elem; //获取param的 elem属性的值
		if($elem === undefined){  
		//若为空对象的话，则没有elem属性 和值   所以是undefined  ,,,主要用于判断传进来的param为不为空
			throw 'no elem init when use Modal Components';  //抛出异常
			return;
		}
		//判断param的elem的值是不是Jquery对象$()
		if( param.elem instanceof jQuery){
			//
		}
		else{
			//不是的话直接设为是Jquery对象$()
			$elem = $( elem );
		}

		var $qfmodal = $('#qf-modal');   //tpl模板里的div
		var $qfmodalcontent = $('#qf-modal-content');   //tpl模板里的div

		//$qfmodalcontent.html($elem.remove());
		$qfmodalcontent.html($elem);  //
		console.log($elem)
		//设置css样式
		$qfmodalcontent.css({
			width:$elem.width(),
			height:$elem.height(),
			'margin-left':( 0 - $elem.width() / 2 ),
			'margin-top':( 0 - $elem.height() / 2 )
		});
		//返回结果   返回一个对象  有两个属性 show、hide
		return {
			show:function(){
				$qfmodal.show()
			},
			hide:function(){
				$qfmodal.hide()
			}
		}

	}
	//exports 是一个对象，用来向外提供模块接口。
	//exports.init=modalInit();   //在这里是错误的      init的值为modalInit()函数返回的值即return出来的值
	exports.init = modalInit;    //          init的值为modalInit(){}整个函数          
});