import React, { Component } from 'react';
import { connect } from "dva";
import { NavLink } from 'dva/router';
import { Pagination } from 'antd';
import Tags from "./productcomponents/Tags"
import "../styles/productpicker.less";
 class procudtPicker extends Component {
   constructor({fetchInit}) {
     super();
     fetchInit();
     this.state = {
      "typech": ["鲜花", "绿色植物", "庆典/婚庆", "盆景/假山", "仙人球", "多肉植物", "园艺辅材","时令花卉"],
      "price":["0-9.9","10-49.9",,"50-99.9","100-199.9","200-1000"],
      "value":"绿萝"
     }
   }
   showjoinshopcar(a) {
     this.refs[a].style.display = "block";
   }
   unshowjoinshopcar(a) {
     this.refs[a].style.display = "none";
   }
   showproduct(){
     var arr=[];
     var Arr = this.props.products;
     if(Arr){arr.push(Arr.map((item,index)=>{
       return (<li key={index}
         onClick={() => { this.props.showproductdetail({ item }) }}
         onMouseEnter={() => { this.showjoinshopcar.bind(this)(`j${index}`) }}
         onMouseLeave={() => { this.unshowjoinshopcar.bind(this)(`j${index}`) }}
       ><NavLink to={"/productDetail/" + item.id} key={index}>
           <div className="box" >
             <img src={`./images/${item.typeeng}/${item.image}`} />
           </div>
           <p>{item.name} </p>
           <p style={{ color: "#ea5404", fontSize: "16px", fontWeight: "bold" }}>￥{item.currentprice}</p>
         </NavLink ><div className="joinshopcar" ref={`j${index}`} 
         onClick={(e) => {
           e.stopPropagation();
           this.props.addshopcar({item})
         }}><span style={{ backgroundImage: "url(../../images/indexsprite.png)" }}></span>加入购物车</div></li>
            )
     }))}
     return arr;
     
   }
   showtype(){     
     var arr = [];
     arr.push(this.state.typech.map((item,index)=>{
       return <li key={index} 
        onClick={()=>{this.props.addtag("类型",item)}}
       >{item}</li>
     }))
     return arr
   }
   showprice(){

     var arr = [];
     arr.push(this.state.price.map((item, index) => {
       return <li key={index}
         onClick={() => { this.props.addtag("价格", item) }}
       >{item}</li>
     }))
     
     return arr
   }
   
  render() {


    return (
      <div className="productpicker">
      <div className="search"> <input type="text" className="input" ref="input" value={this.state.value} onChange={()=>this.setState({"value":this.refs.input.value})}/>
            <input  className="submit" type="button" value="搜索" onClick={()=>{this.props.addtag("商品名",this.refs.input.value)}} />                             
      <p className="tjsp"><a onClick={()=>{this.props.addtag("商品名","仙人掌")}}>仙人掌</a ><a onClick={()=>{this.props.addtag("商品名","绿萝")}}>绿萝</a><a onClick={()=>{this.props.addtag("商品名","吊兰")}}>吊兰</a><a onClick={()=>{this.props.addtag("商品名","发财树")}}>发财树</a><a onClick={()=>{this.props.addtag("商品名","幸福树")}}>幸福树</a><a onClick={()=>{this.props.addtag("商品名","滴水观音")}}>滴水观音</a></p>
      </div>
      <hr/>
      <div className="typech">
          <h3>类型:</h3><ul>{this.showtype()}</ul>
      </div>
        <div className="price">
          <h3>价格:</h3><ul>{this.showprice()}</ul>
        </div>
        
      <div className="cl"></div>
      <hr/>
          <Tags></Tags>
        <ul className="main">{this.showproduct()}</ul>
        <div className="cl"></div>
        <div className="pagination"><Pagination current={this.props.page} total={this.props.amount} pageSize={this.props.pagesize}
        onChange={(page)=>{this.props.changepage(page)}}
  
        /></div>
        <div className="cl"></div>
      </div>)
    }
  }
export default connect(
   ({productall})=>({
     products: productall.products,
     amount:productall.amount,
     filter:productall.filter,
     page: productall.page,
     pagesize: productall.pagesize
  }), 
  (dispatch) => ({
   
    fetchInit() { 
      dispatch({ "type": "productall/fetchInit"})
    },
    showproductdetail({item}) {

      dispatch({ "type": "productdetail/init", item })
    },
     addshopcar({item}) {
      dispatch({ "type": "shopcarshow/addshopcar", item })
    },
      addtag(tagname,words){
        dispatch({"type": "productall/addtag_asyn",tagname,words })
      },
      changepage(page){
        dispatch({ "type": "productall/changepage",page})
      }
  })
)(procudtPicker);
