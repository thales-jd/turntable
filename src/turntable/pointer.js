import 'latest-createjs';
/**
 *	指针
 */
var Pointer = function(){
	var _this = this;
  const X = -119,	//位置
    Y = -119;	//位置
  let __entity = null;  //主体
	_this.init = function(){
		_this.Container_constructor();
    __entity = createPointer();
    _this.addChild(__entity);
  };
  /**
   * 创建指针
   */
  function createPointer(){
    let container = new createjs.Container();
    let image = window.Preload.getResult('pointer');
    let bitmap = new createjs.Bitmap(image);
    bitmap.x = X;
    bitmap.y = Y;
    container.addChild(bitmap);
    return container;
  }
	_this.init();
};
Pointer.prototype = createjs.extend(Pointer, createjs.Container);
Pointer = createjs.promote(Pointer,"Container")
export default Pointer;