import * as Turntable from './turntable/main';
import * as Preload from './turntable/preload';
window.Preload = Preload;


function resLoading(e){
  console.log(e);
}
function resLoaded(e) {
  __game.launch();
  let arr = [
    {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622454",
      "itemName": "4999元",
      "itemType": 0,
      "itemDesc": "锦鲤礼包",
      "itemPic": "jfs/t1/19895/12/2013/1220/5c186167Efdd5149b/a6a5456d126496d6.jpg",
      "awardNum": 1
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622467",
      "itemName": "500",
      "itemType": 2,
      "itemDesc": "拍币",
      "itemPic": "jfs/t1/29188/15/1959/1236/5c186177E5227777e/c8ec812b8eafa13a.jpg",
      "awardNum": 500
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622472",
      "itemName": "50",
      "itemType": 2,
      "itemDesc": "拍币",
      "itemPic": "jfs/t1/12243/28/2002/995/5c186184E31f7007b/1250caf4bde959d6.jpg",
      "awardNum": 50
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622476",
      "itemName": "100",
      "itemType": 3,
      "itemDesc": "京豆",
      "itemPic": "jfs/t1/14290/17/1967/1250/5c186191E059bbdae/a40e017fd4345213.jpg",
      "awardNum": 100
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622480",
      "itemName": "50",
      "itemType": 3,
      "itemDesc": "京豆",
      "itemPic": "jfs/t1/16465/39/1972/1104/5c18619cE867014b4/8e489e1789320d9e.jpg",
      "awardNum": 50
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622484",
      "itemName": "10",
      "itemType": 3,
      "itemDesc": "京豆",
      "itemPic": "jfs/t1/15449/10/1999/1250/5c1861a6E4967698c/d82af716cabd082f.jpg",
      "awardNum": 10
    }, {
      "activityInfoId": "10061812170267",
      "itemCode": "10061545023622489",
      "itemName": "10元",
      "itemType": 1,
      "itemDesc": "优惠券",
      "itemPic": "jfs/t1/6429/27/9888/1073/5c1861b2E9365808f/17d956ae160be379.jpg",
      "awardNum": 1
    },
    {
      "activityInfoId":"10061811280003",
      "itemCode":"10061543563404751",
      "itemName":"没中奖",
      "itemType":0,
      "itemDesc":"没中奖",
      "itemPic":"jfs/t1/5/35/4221/1092/5c04f1f8E3fdbccad/3577d2b8502edf87.jpg",
      "awardNum":1
    }
  ];
  arr.forEach(o => {
    o.itemPic = `http://img11.360buyimg.com/test/s50x50_${o.itemPic}`;
  })
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