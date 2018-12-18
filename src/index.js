import * as Turntable from './turntable/main';
import * as Preload from './turntable/preload';
window.Preload = Preload;


function resLoading(e){
  console.log(e);
}
function resLoaded(e) {
  __game.launch();
  let arr = [
    {"activityInfoId":"10061811280003","itemCode":"10061543807566335","itemName":"拍币","itemType":2,"itemDesc":"20","itemPic":"jfs/t1/6/4/4161/1091/5c04f123E04aedfad/808d86861e09d94e.jpg","awardNum":20},
    {"activityInfoId":"10061811280003","itemCode":"10061543807566357","itemName":"商品2","itemType":0,"itemDesc":"电脑","itemPic":"jfs/t1/6/28/4240/1092/5c04f14bE34eae862/808d86861e09d94e.jpg","awardNum":1},
    {"activityInfoId":"10061811280003","itemCode":"10061543807480100","itemName":"拍币","itemType":2,"itemDesc":"10","itemPic":"jfs/t1/10/20/4186/1091/5c04f17bEdbba3d49/662b2cdfe4f23f69.jpg","awardNum":10},
    {"activityInfoId":"10061811280003","itemCode":"10061543588326659","itemName":"优惠券","itemType":1,"itemDesc":"满99减1","itemPic":"jfs/t1/8/12/4231/11944/5c04f1c0E479a47b8/da533166b9322cb0.jpg","awardNum":1},
    {"activityInfoId":"10061811280003","itemCode":"10061543588141685","itemName":"京豆","itemType":3,"itemDesc":"2","itemPic":"jfs/t1/5/2/4223/1093/5c04f1dcE3742d3e4/3577d2b8502edf87.jpg","awardNum":2},
    {"activityInfoId":"10061811280003","itemCode":"10061543587680281","itemName":"拍币","itemType":2,"itemDesc":"5","itemPic":"jfs/t1/5/16/4205/1091/5c04f1edEb7bac05d/3577d2b8502edf87.jpg","awardNum":5},
    {"activityInfoId":"10061811280003","itemCode":"10061543563404751","itemName":"商品","itemType":0,"itemDesc":"饮水机","itemPic":"jfs/t1/5/35/4221/1092/5c04f1f8E3fdbccad/3577d2b8502edf87.jpg","awardNum":1},
    {"activityInfoId":"10061811280003","itemCode":"10061543563404751","itemName":"没中奖","itemType":0,"itemDesc":"饮水机","itemPic":"jfs/t1/5/35/4221/1092/5c04f1f8E3fdbccad/3577d2b8502edf87.jpg","awardNum":1}
  ];
  __game.award(arr);
  
}

function canvas() {
  let element = document.createElement('canvas');
  element.width="800";
  element.height="800";
  element.style="width:100%";
  element.addEventListener("click", onCanvasClick);
  element.addEventListener("touchend", onCanvasClick);
  return element; 
}
function onCanvasClick(e) {
  console.log(e);
  __game.start(1);
}
const __canvas = canvas();
let __game= new Turntable.main(__canvas);
Preload.load(resLoading, resLoaded);

document.body.appendChild(__canvas);