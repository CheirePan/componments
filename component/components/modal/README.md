

#modal组件

##组件描述

##组件应用
1.var CptModal = require('modal');
2.var modal = CptModal.init($(dom));
$(dom) 就是Modal中间要显示的内容

##应用举例
...html
<div class="content">
	Modal中间显示的内容
</div>
....
....js

var CptModal = require('modal');
var modal = CptModal.init($('.conyent'));
modal.show();
modal.hide();


##所有API
show 显示 Modal
hide 隐藏 Modal

