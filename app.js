// import { Number } from "core-js/library/web/timers";

var express = require("express");
var webpack = require("webpack");
var formidable = require("formidable");
var mongoose = require("mongoose");
var fs = require("fs");
var url = require("url");
var crypto = require("crypto");
var Product = require("./models/Product.js");
var Shopcar = require("./models/Shopcar.js");
var User=require("./models/User.js")



var app = express();
mongoose.connect("mongodb://localhost/productsystem");
app.use(express.static("www"));
app.get("/api",(req,res)=>{
    var id = url.parse(req.url, true).query.id;  
    var typech = url.parse(req.url, true).query.typech;
    var name = url.parse(req.url, true).query.name;  
    var page = url.parse(req.url, true).query.page;
    var pagesize = url.parse(req.url, true).query.pagesize;
    var currentprice = url.parse(req.url, true).query.price;

    //最终要在数据中查找的条件
    var searchJSON = {}

    //这个查找条件存在了，我们就加上这个条件
    if (id) {
        searchJSON["id"] =id;
    }
    if (typech) {
        searchJSON["typech"] =typech;
    }
    if (currentprice) {
        var pricearr = currentprice.split(/,/)
        searchJSON["currentprice"] = { "$gte": parseInt(pricearr[0]), "$lte": parseInt(pricearr[1]) };
    }
    if(name){
        searchJSON["name"] = name;
    }
    console.log(searchJSON)
    Product.count(searchJSON, function (err, amount) {
        Product.find(searchJSON).skip((page-1) * pagesize).limit(pagesize).lean().exec((err, results) => {
            res.json({ "amount": amount, "results": results });
        });
    });  
});
app.checkout("/regist",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files){
       var k= fields.k ;
        var v=fields.v;
        User.count({k: v}, function (err, count) {
            res.json({ "result": count });
        });
       
    })
});
app.post(
    "/regist", (req, res) => {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var username = fields.username;
            var email = fields.email;
            var phonenum = fields.phonenum;
            var password = fields.password1;
            password = crypto.createHash('SHA256').update(password + "我是小可爱").digest("hex");
            User.count({ "username": username}, function (err, count) {
               
                if (count == 0) {
                    User.count({ "email": email }, function (err, count1) {
                        if(count1==0){
                            User.count({ "phonenum": phonenum }, function (err, count2) {
                                if(count2==0){
                                    User.create({
                                        "username":username,
                                        "email": email,
                                        "phonenum":phonenum,
                                        "password": password
                                    }, function (err) {
                                        //返回值：
                                        //1 成功
                                        //-1 错误
                                        res.json({ "result": err ? -1 : 1 });
                                    });
                                }else{
                                    //电话已被注册
                                    res.json({ "result": -4 }); 
                                }
                            })
                        }else{
                            //email已被注册
                            res.json({ "result": -3 }); 
                        }
                    })

                } else {
                    //-2用户名被占用
                    res.json({ "result": -2 });
                }
            });
            

        })
});
app.post("/login",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var username = fields.username;
        var password = fields.password;
        password = crypto.createHash('SHA256').update(password + "我是小可爱").digest("hex");
        User.find({ "username": username, "password": password }, function (err, results) {
            if (results.length > 0) {
                res.json({ "result": 1 });
            } else {
                res.json({ "result": -1 });
            }
        });

    })
})
app.get("/shopcar",(req,res)=>{ 
    Shopcar.count({}, function (err, amount) {
        Shopcar.find({}).exec((err, results) => {
            res.json({ "amount": amount, "results": results });
        });
    });  
});
app.post("/shopcar",function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var userid = fields.userid;
        var id = fields.id;
        var typech = fields.typech;
        var typeeng = fields.typeeng;
        var name = fields.name;
        var image = fields.image;
        var currentprice = fields.currentprice;
        var marketprice = fields.marketprice;
        var repertory = fields.repertory;
        var date = fields.date;
        var weight = fields.weight;
        var number = fields.number;
        var detail = fields.detail;
        var amount = 1;
        Shopcar.count({"id" : id} , function(err , count){
			
			if(count == 0){
				//写入数据库
				Shopcar.create({
					"userid":userid,
                    "id": id,
                    "typech": typech,
                    "typeeng":typeeng,
                    "name": name,
                    "image": image,
                    "currentprice":currentprice ,
                    "marketprice":marketprice,
                    "repertory": repertory,
                    "date": date,
                    "weight": weight,
                    "number": number,
                    "detail": detail, 
                    "amount":amount
				},function(err,data){
                        Shopcar.find((err, data) => {
                            res.json(data);
                        })
                    
				});
			}else{
                Shopcar.find({"id":id},(err,data)=>{
                    
                Shopcar.update({ "id": id }, { $set: { "amount": data[0].amount+1 }},function(err,data){
                    Shopcar.find( (err, data) => {
                        res.json(data);
                        })
                    })
				});
			
				
			}
		});
       
            

    });
});
app.get("/shopcar/:id",function(req,res){
    
    var id = req.params.id; 
    
    Shopcar.remove({"id":id},function(err,data){
       Shopcar.find(function(err,data){
           res.json(data);
       })
    })
});
app.patch("/shopcar",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var id=fields.item.id;
        var amount=fields.amount;
        Shopcar.update({ "id": id }, { $set: { "amount": amount } }, function (err, data) {
                Shopcar.find((err,data)=>{
                    res.json(data);
                })
        })
    })
})



app.listen(3000);
var webpackconfigjs = require("./webpack.config.js");
webpack(webpackconfigjs,(err,state)=>{
    if(err) console.log(err);
    console.log("webpack已经运行");
})