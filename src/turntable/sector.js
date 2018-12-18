import 'latest-createjs';
/**
 *	扇形
 */
var Sector = function(obj, index, radians) {
	var _this = this;
  const RADIUS = 287;	//半径
  const IMG_Y = -140;  //图片位置
  const DESC_Y = -200;  //描述位置
  const NAME_Y = -260;  //名称位置
  const NAME_FONT = "54px jdzh";
  const UNIT_FONT = "28px Arial";
  const DESC_FONT = "22px Arial";
  const COLOR_YELLOW = "#FFB004";
  const COLOR_RED = "#F82969";
  const COLOR_BLACK = "#000000";
  const COLOR_PINK = "#FFBAD7";
  const COLOR_WHITE = '#FFFFFF';
  let _prop;  //参数
  let _index = 0; //索引
  let __entity = null;  //主体
	_this.init = function(obj, index, radians){
    _this.Container_constructor();
    _prop = obj;
    _index = index;
    __entity = new createjs.Container();
    createBg(radians);
    createImg();
    createDesc();
    createName();
    _this.addChild(__entity);
  };
  /**
   * 创建背景
   */
  function createBg(radians) {
    let shape = new createjs.Shape();
    let color = _index%2==0? COLOR_PINK:COLOR_WHITE;
    shape.graphics
      .beginFill(color)
      .moveTo(0,0)
      .arc(0,0, RADIUS, -Math.PI/2-radians/2,-Math.PI/2+radians/2)
      .lineTo(0,0)
      .endFill();
    __entity.addChild(shape);
  }
  /**
   * 创建名字
   */
  function createName(){
    let container = new createjs.Container();
    const unit = "元";
    let index = _prop.itemName.indexOf(unit);
    let str = _prop.itemName;
    if(index >= 0){
      str = str.substring(0, index);
    }
    let text = new createjs.Text(str);
    text.font = NAME_FONT;
    let color = _index%2==0? COLOR_RED:COLOR_YELLOW;
    text.color = color;
    container.addChild(text);
    if(index >= 0){
      let pos = text.getMeasuredWidth();
      let sign = new createjs.Text(unit, UNIT_FONT, color);
      sign.x = pos;
      sign.y = 20;
      container.addChild(sign);
    }
    let rect = container.getBounds();
    container.x = -rect.width/2;
    container.y = NAME_Y;
    __entity.addChild(container);
  }
  /**
   * 创建描述
   */
  function createDesc(){
    let text = new createjs.Text(_prop.itemDesc, DESC_FONT, COLOR_BLACK);
    text.textAlign = "center";
    text.y = DESC_Y;
    __entity.addChild(text);
  }
  /**
   * 创建图片
   */
  function createImg(){
    let bitmap = new createjs.Bitmap();
    let img;
    const adjust = res => {
      bitmap.x = -img.width/2;
      bitmap.y = IMG_Y - img.height/2;
    }
    if(_prop.itemName == "没中奖"){
      img = window.Preload.getResult('smile');
      adjust();
    }else{
      img = new Image();
      img.addEventListener("load", adjust);
      img.src = obj.itemPic;
    }
    bitmap.image = img;
    __entity.addChild(bitmap);
  }
	_this.init(obj, index, radians);
};
Sector.prototype = createjs.extend(Sector, createjs.Container);
Sector = createjs.promote(Sector,"Container")
export default Sector;