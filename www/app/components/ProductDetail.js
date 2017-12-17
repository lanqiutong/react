import React, { Component } from 'react';
import {connect} from "dva";
import "../styles/productdetail.less";
class ProductDetail extends Component {
  constructor(){
    super();
    
    
    
  }
  componentDidMount(){
    // 
    console.log(this.props.match.params)
    this.props.init({id:this.props.match.params.id})

  }
  changeshop(item) {
    if (item.amount <= 0) {
      var r = confirm("确定要删除该商品么")
      if (r == true) {
        this.props.del(item.item);

      };
    } else {
      this.props.change(item);
    }
  }

  showProduct(){
    
    var arr=[];
    var getdate=(a)=>{
          var y=(new Date(a)).getFullYear();
          var m=(new Date(a)).getMonth();
          var d=(new Date(a)).getDay();
         
        return y+"-"+m+"-"+d;
    }
    if (this.props.product.item){
      var {id,typech,typeeng,name,image,currentprice,marketprice,repertory,date,weight,
      number,detail,amount}=this.props.product.item;
      var item=this.props.item;
      var time=getdate(date)
      arr.push(<div key={id} className="pics">
        <h3>商品详情</h3>
        <hr/>
        <div className="main">
          <div className="mainpic">
            <div className="smallpic"><img src={`./images/${typeeng}/${image}`} /></div>
            <div className="bigpic"><img src={`./images/${typeeng}/${image}`} /></div>
          
          <div className="productdetail">
              <h3>{name}</h3>
              <h4>{detail}</h4>
            <div className="price">活动价：<span className="currentprice"><b>￥</b>{currentprice}</span>市场价：<span className="marketprice">￥{marketprice}</span></div>
              <div><button onClick={() => this.changeshop({ item, amount: amount - 1 })}>-</button><input type="number" /><button onClick={() => this.changeshop({ item, amount: item.amount + 1 })}>+</button></div>
            </div>
          </div>
         
        </div>
        <div className="txtdetail"><ul><li><img src="./images/productattr1.png" /></li><li><img src="./images/productattr2.png" /></li><li><img src="./images/productattr3.png" /></li></ul>
          <div><p>上架时间：{time}</p><p>商品重量：{weight/1000}千克</p><p>商屏编号：{number}</p></div>
          <div>好评度</div>
          </div>   
      </div>)
    }
    return arr;
  }
  render() {
   
    return (
      
      <div className="detail">           
        {this.showProduct()} 
       
        <div className="cl"></div>
        <div className="bottom">
          <div className="bleft"><div>相关分类</div><div>浏览此商品的顾客还浏览了</div></div>
          <div className="bright"><img src="./images/nuannuanqingyi.jpg"/></div>
        </div>
        <div className="cl"></div>
      </div>
    )
  }
}
export default connect(
  ({productdetail: {product} }) => ({
    product: (() => {
      if (product) {
        return product;
      }
      return "";
    })()
  }),
  (dispatch) => ({
      init(id){
        
        dispatch({"type": "productdetail/fetchInit",id})
    }, 
    del(item) {
      dispatch({ "type": "shopcarshow/del", item })
    },
    change(item) {
      dispatch({ "type": "shopcarshow/change", item })
    }
  })
)(ProductDetail)
