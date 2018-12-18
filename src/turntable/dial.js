import 'latest-createjs';
/**
 *	转盘
 *	@param	prop	参数
 */
var Dial = function(){
	var _this = this;
  const RADIUS = 287,	//半径
    RING_SIZE = 8,  //圆环尺寸
    RING_RADIUS = 296,  //圆环半径
    DELAY = 1000,	//间隔
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
      let color = i%2==0?"#FFBAD7":'#FFFFFF';
      let award = createAwardSingle(v, color, RADIUS, unit);
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
   * 绘制单个奖励
   * @param {Object} obj 奖品参数
   * @param {String} color 颜色
   * @param {int} radius 扇形半径
   * @param {radians} radians 扇形弧度
   */
  function createAwardSingle(obj, color, radius, radians){
    let container = new createjs.Container();
    let shape = new createjs.Shape();
    shape.graphics
      .beginFill(color)
      .moveTo(0,0)
      .arc(0,0, radius, -Math.PI/2-radians/2,-Math.PI/2+radians/2)
      .lineTo(0,0)
      .endFill();
    let text = new createjs.Text(obj.itemName, "40px Arial", "#000000");
    text.textAlign = "center";
    //text.x = 50;
    text.y = -radius * 3/4;
    container.addChild(shape, text);
    return container;
  }
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