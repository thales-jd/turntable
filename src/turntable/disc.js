import 'latest-createjs';
import Instrument from './instrument';
/**
 *	底部表盘
 *	@param	prop	参数
 */
var Disc = function(){
	var _this = this;
  const RADIUS_GRADATION = 339;	//半径
  const RADIUS_INSTRUMENT = 310;	//半径
  let __entity = null;  //主体
	_this.init = function(){
		_this.Container_constructor();
    __entity = new createjs.Container();
    _this.addChild(__entity);
    __entity.addChild(createBackground());
    for(let i = 0; i < 24; i++){
      let instrument = new Instrument();
      instrument.run(i%2===0?1000:0);
      instrument.x = Math.cos(i * Math.PI/12) * RADIUS_INSTRUMENT;
      instrument.y = Math.sin(i * Math.PI/12) * RADIUS_INSTRUMENT;
      __entity.addChild(instrument);
    }
  };
  /**
   * 画背景
   */
  function createBackground(){
    let s = new createjs.Shape();
    s.graphics
      .beginLinearGradientFill(["#FF6293", "#7A31F2"], [0, 1], 0, -RADIUS_GRADATION, 0, RADIUS_GRADATION)
      .drawCircle(0,0, RADIUS_GRADATION);
    return s;
  }
	_this.init();
};
Disc.prototype = createjs.extend(Disc, createjs.Container);
Disc = createjs.promote(Disc,"Container")
export default Disc;