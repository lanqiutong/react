var express = require("express");
var webpack = require("webpack");
var formidable = require("formidable");
var mongoose = require("mongoose");
var Product = require("./models/Product.js");
var Shopcar = require("./models/Shopcar.js")
var fs = require("fs");
var url = require("url");


var app = express();
mongoose.connect("mongodb://localhost/productsystem");
app.use(express.static("www"));
app.get("/api",(req,res)=>{
    var page = url.parse(req.url, true).query.page;
    var pagesize = url.parse(req.url, true).query.pagesize;
    var typech = url.parse(req.url, true).query.typech ;
    
    Product.count({}, function (err, amount) {
        Product.find({}).exec((err, results) => {
            res.json({ "amount": amount, "results": results });
        });
    });  
});
app.get("/api/:id", function (req, res) {
    var id = req.params.id; 
    console.log(id)
        // Product.count(searchJSON, function (err, amount) {
        //     Product.find(searchJSON).skip((page - 1) * pagesize).limit(pagesize).lean().exec((err, results) => {
        //         res.json({ "amount": amount, "results": results });
        //     });
        // });    
          
});
app.get("/shopcar",(req,res)=>{ 
    Shopcar.count({}, function (err, amount) {
        Shopcar.find({}).exec((err, results) => {
            res.json({ "amount": amount, "results": results });
        });
    });  
})
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