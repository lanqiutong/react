

/* 
 * 这个文件能够自动生成5000条数据（并且删除之前的数据），存储到数据库中！！
 * 只需要node mock.js即可！！
 * 考拉 2017年12月4日10:22:11
 */


var fs = require("fs");
var _ = require("underscore");
var mock = require("mockjs");
var mongoose = require("mongoose");
//使用Schema
var Product = require("./models/Product.js");

var Random = mock.Random;

//链接数据库
mongoose.connect("mongodb://localhost/productsystem");

var productform = {
    "鲜花": {
        "typeeng": "flower", 
        "name":["阳光海岸","和煦的爱","为爱相随","感激","巴黎恋人","情有独钟","温馨思念","暖暖情意"],
        "image":{
            "阳光海岸": "740_thumb_G_1471115379622.jpg",
            "和煦的爱":"741_thumb_G_1471116050876.jpg",
            "为爱相随":"742_thumb_G_1471117049463.jpg",
            "感激":"743_thumb_G_1471117916945.jpg",
            "巴黎恋人":"744_thumb_G_1471119153826.jpg",
            "情有独钟":"745_thumb_G_1471130936179.jpg",
            "温馨思念":"746_thumb_G_1471131758550.jpg",
            "暖暖情意":"747_thumb_G_1471132431828.jpg"
        }
    },
    "绿色植物": {
        "typeeng": "greenplant",
        "name": ["常春藤", "滴水观音", "吊兰", "白掌", "虎皮兰", "星点木", "袖珍椰子", "发财树"],
        "image": {
            "常春藤": "737_thumb_G_1471046065965.JPG",
            "滴水观音": "738_thumb_G_1471050405527.JPG",
            "吊兰": "739_thumb_G_1471112809442.JPG",
            "白掌": "751_thumb_G_1471374612138.JPG",
            "虎皮兰": "752_thumb_G_1471376668612.JPG",
            "星点木": "753_thumb_G_1471377512745.JPG",
            "袖珍椰子": "754_thumb_G_1471458802474.JPG",
            "发财树": "755_thumb_G_1471462236232.JPG"
        }
    },
    "庆典/婚庆": {
        "typeeng": "weddingcelebration",
        "name": ["婚庆花篮", "婚庆花盒", "开业庆典花篮", "精品花篮", "红星组合", "婚礼扎花", "开业庆典", "婚车扎花"],
        "image": {
            "婚庆花篮": "750_thumb_G_1471207606007.jpg",
            "婚庆花盒": "749_thumb_G_1471202554659.jpg",
            "开业庆典花篮": "702_thumb_G_1471132817776.jpg",
            "精品花篮": "701_thumb_G_1471133741158.jpg",
            "红星组合": "705_thumb_G_1468526304977.jpg",
            "婚礼扎花": "704_thumb_G_1468524841661.jpg",
            "开业庆典": "703_thumb_G_1468524043159.jpg",
            "婚车扎花": "421_thumb_G_1468353158573.jpg"
        }
    }, 
    "盆景/假山": {
        "typeeng": "miniaturegarden",
        "name": ["罗汉森林", "茶台小品", "隐居", "独秀", "幽静小溪", "文竹罄雅", "财源滚滚", "迷失在细叶森林"],
        "image": {
            "罗汉森林":"726_thumb_G_1471463218434.JPG",
            "茶台小品":"725_thumb_G_1471463251261.JPG",
            "隐居":"724_thumb_G_1471463264500.jpg", 
            "独秀":"723_thumb_G_1471463278016.jpg", 
            "幽静小溪":"722_thumb_G_1471463291787.jpg", 
            "文竹罄雅":"721_thumb_G_1471463311362.jpg", 
            "财源滚滚":"720_thumb_G_1471463331144.jpg", 
            "迷失在细叶森林":"719_thumb_G_1471463349896.JPG"
        }
    },
     "仙人球": {
        "typeeng": "ballactus",
        "name": ["趣味仙人球","星兜","大四组","小四组","万重山"],
        "image": {
            "趣味仙人球":"xrq.JPG", 
            "星兜":"xd.jpg", 
            "大四组":"dsz.JPG", 
            "小四组":"xsz.JPG", 
            "万重山":"wcs.JPG"
        }
    },
     "多肉植物": {
         "typeeng": "succulentplants",
        "name": ["龙雷", "金钱木", "雅乐之舞", "沙漠密语", "微型生态", "枯木逢春", "秘境森林"],
        "image": {
            "龙雷":"904_thumb_G_1475436025963.JPG", 
            "金钱木":"903_thumb_G_1475435195240.JPG", 
            "雅乐之舞":"782_thumb_G_1472776666076.JPG", 
            "沙漠密语":"892_thumb_G_1475259969998.JPG", 
            "微型生态":"891_thumb_G_1475259427141.JPG", 
            "枯木逢春":"890_thumb_G_1475258831857.JPG", 
            "秘境森林":"781_thumb_G_1472775268713.JPG"
        }
    },
    "园艺辅材": {
        "typeeng": "gardeningauxiliarymaterial",
        "name": ["花盆1", "花盆2", "花盆3", "花盆4", "花盆5", "花盆6", "花盆7","花盆8","花盆9","花盆10"],
        "image": {
            "花盆1":"825_thumb_G_1473620262804.JPG", 
            "花盆2":"827_thumb_G_1473701326032.JPG", 
            "花盆3":"829_thumb_G_1473706524311.JPG", 
            "花盆4":"834_thumb_G_1473812207428.JPG", 
            "花盆5":"838_thumb_G_1473882090465.JPG", 
            "花盆6":"846_thumb_G_1474070274451.JPG", 
            "花盆7":"855_thumb_G_1474412049179.JPG", 
            "花盆8":"862_thumb_G_1474660463743.JPG", 
            "花盆9":"874_thumb_G_1475086751043.JPG", 
            "花盆10":"875_thumb_G_1475087421598.JPG"
        }
    },
    "时令花卉": {
        "typeeng": "seasonflower",
        "name": ["长寿花", "造型水仙", "拱兰", "蝴蝶兰组合", "蝴蝶兰1", "蝴蝶兰2", "蝴蝶兰3","车厘星","君子兰","小红星"],
        "image": {
            "长寿花":"986_thumb_G_1484608091475.JPG", 
            "造型水仙":"985_thumb_G_1484161056040.jpg", 
            "拱兰":"984_thumb_G_1484160432851.JPG", 
            "蝴蝶兰组合":"983_thumb_G_1484158965818.JPG", 
            "蝴蝶兰1":"982_thumb_G_1484098257441.JPG", 
            "蝴蝶兰2":"981_thumb_G_1484097627541.JPG", 
            "蝴蝶兰3":"980_thumb_G_1484097359360.JPG", 
            "车厘星":"979_thumb_G_1484094991491.JPG",
            "小红星":"977_thumb_G_1484093766474.JPG",
            "君子兰":"976_thumb_G_1484093625543.JPG"
        }
    }
}
    
//5000条
var arr = [];

for (var i = 0; i < 5000; i++) {
    let typech = _.sample(Object.keys(productform));
    let typeeng = productform[typech].typeeng;
    let name = _.sample(productform[typech].name);
    let image = productform[typech].image[name];
    let currentprice = _.random(10, 200); 
    let marketprice = parseInt(currentprice*1.05);
    arr.push({
        "id": 100000 + i,
        "typech": typech,
        "typeeng": typeeng,
        "name": name,
        "image": image,
        "currentprice": currentprice,
        "marketprice": marketprice,
        "repertory": _.random(10, 1000),
        "date":new Date(),
        "weight": _.random(200, 50000),
        "number":"58HMl"+(100000+i),
        "detail": Random.cparagraph()
    });
}

Product.remove({}, function (err, data) {
    console.log("【删除了" + data.result.n + "条数据】");
    Product.insertMany(arr, function (err, data) {
        console.log("【添加了" + data.length + "条数据】");
    })
});



