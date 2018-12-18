import 'latest-createjs';
import Dial from './dial';
import Pointer from './pointer'
import Disc from './disc';
import './style.css';

const VER = "1.0";
const EVENT = {};

function main(canvas) {
  const _this = this;
  const FPS = 60;	//帧频
  const WIDTH = 800;
  const HEIGHT = 800;
  let __game = null;  //主体
  let __pointer = null; //表针
  let __dial = null; //表盘
  let __disc = null; //刻度
  _this.init = function () {
    _this.Stage_constructor(canvas);//继承stage
    createjs.Ticker.setFPS = FPS;	//帧频
    createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
    createjs.Touch.enable(_this);	//启用tauch
    __game = new createjs.Container()
    _this.addChild(__game);
  }
  _this.launch = function () {
    __disc = new Disc();
    __dial = new Dial();
    __pointer = new Pointer();
    __disc.x =__pointer.x = __dial.x = WIDTH/2;
    __disc.y = __pointer.y = __dial.y = HEIGHT/2;
    __game.addChild(__disc, __dial, __pointer);
  }
  _this.award = function (prop) {
    __dial.awardInit(prop);
  }
  _this.start = function(awardIndex) {
    __dial.run(awardIndex);
  }

  _this.init(canvas);
}
main.prototype = createjs.extend(main, createjs.Stage);
main = createjs.promote(main,"Stage");
export {
  VER,
  EVENT,
  main
}
