import 'latest-createjs';
/**
 *	刻度
 */
var Instrument = function() {
	var _this = this;
  const RADIUS = 10;	//半径
  let __entity = null;  //主体
  let _tween = null;
	_this.init = function(){
		_this.Container_constructor();
    __entity = createEntity();
    _tween = createjs.Tween.get(__entity, {bounce:true, loop:-1, pause:true}).to({alpha:0}, 1000);
    _this.addChild(__entity);
  };
  _this.run = function(delay) {
    //createjs.Tween.get({}).wait(delay).play(_tween);
    _tween.gotoAndPlay(delay);
  }
  /**
   * 创建刻度
   */
  function createEntity() {
    let s = new createjs.Shape();
    s.graphics
      .beginLinearGradientFill(["#FFF8F8", "#EDB1BC", "#FFFBF9"], [0,0.68, 1], 0, -RADIUS, 0, RADIUS)
      .drawCircle(0,0, RADIUS);
    return s;
  }
	_this.init();
};
Instrument.prototype = createjs.extend(Instrument, createjs.Container);
Instrument = createjs.promote(Instrument,"Container")
export default Instrument;