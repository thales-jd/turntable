import 'latest-createjs';
import Sector from './sector';
/**
 *	转盘
 *	@param	prop	参数
 */
var Dial = function(){
	var _this = this;
  const RING_SIZE = 8,  //圆环尺寸
    RING_RADIUS = 296,  //圆环半径
		DURATION = 5000;	//自转周期
  var _tween = null;
  let _corect = -22.5;
  let _awardConfig = [];//奖品数据
  let __entity = null;  //主体
  let __award = null; //奖品
	_this.init = function(){
		_this.Container_constructor();
    __entity = new createjs.Container();
    _this.addChild(__entity);
    __award = new createjs.Container();
    __entity.addChild(__award, createRing());
  };
  _this.awardInit = function(prop){
    _awardConfig = prop;
    const unit = Math.PI*2 / prop.length;
    prop.forEach((v, i) => {
      let award = new Sector(v, i, unit);
      //let award = createAwardSingle(v, color,RADIUS, unit);
      award.rotation = i * 360/prop.length;
      __award.addChild(award);
    });
  }
  /**
   * 运行
   * @param {int} awardIndex  奖品索引
   */
  _this.run = function(awardIndex){
    const unit = 360/_awardConfig.length;
    let degree = unit * awardIndex + _corect + Math.random()*(unit/2)-unit/4;
    createjs.Tween.get(__entity).to({rotation:360*5 - degree}, DURATION, createjs.Ease.sineInOut).call(()=>{__entity.rotation = -degree});
  }
  /**
   * 创建圆环
   */
  function createRing() {
    let container = new createjs.Container();
    let s = new createjs.Shape();
    s.graphics
      .beginStroke("#FFBAD7")
      .setStrokeStyle(RING_SIZE)
      .drawCircle(0,0, RING_RADIUS - RING_SIZE)
      .endFill();
    container.addChild(s);
    container.shadow = new createjs.Shadow("#FF90B8", 0, 0, 21);
    return container;
  }
	_this.init();
};
Dial.prototype = createjs.extend(Dial, createjs.Container);
Dial = createjs.promote(Dial,"Container")
export default Dial;