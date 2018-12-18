import 'latest-createjs';
let _images = [];
var imgContext = require.context("./res/images/", true, /^.*\.(png|jpg|gif)$/);
const imgPattern = /\/(\w*)\.(png|jpg|gif)$/;
imgContext.keys().map(imgContext).forEach((src) => {
  let o = {};
  let arr = src.match(imgPattern);
  let name = arr[1];
  o.id = name;
  o.src = src;
  _images.push(o);
});

/**
 *	预先加载
 */
var _queue = null;	//loder
/**
 *	初始化
*/
var init = function(){  
  _queue = new createjs.LoadQueue(false);
  _queue.loadManifest(_images, false);
  //_queue.loadManifest(_sounds, false);
  //createjs.Sound.registerSounds(_sounds);
};
/**
 *	加载
*/
var load = function(progress, complete){
  if(!_queue) init();
  if(progress)_queue.on("progress", progress, this);//资源载入中
  if(complete)_queue.on("complete", complete, this);//资源载入完毕
  _queue.load();
};
/**
 * 添加
 * @param {*} arr 图片数组
 */
var add = function(arr){
  _queue.loadManifest(arr, false);
  _queue.load();
};
/**
 *	获取loader
*/
var getQueue = function(){
  return _queue;
};
/**
 *	获取文件实体
*/
var getResult = function(id){
  return _queue.getResult(id);
};
export {load,getResult};