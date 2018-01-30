import React, { Component } from 'react';
import {connect} from "dva";
import "../styles/productdetail.less";
class ProductDetail extends Component {
  constructor(){
    super();
    
    
    
  }
  componentWillMount(){
    // 
    //console.log(this.props.match.params)

    if (this.props.match.params){this.props.init(this.props.match.params.id)};
    // this.props.init();

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
    if (this.props.product.results){
      var {id,typech,typeeng,name,image,currentprice,marketprice,repertory,date,weight,
        number, detail, amount } = this.props.product.results[0];
      var item = this.props.product.results[0];
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
            <div className="price">活动价：<span className="currentprice"><b>￥</b>{currentprice}</span>市场价：<span className="marketprice">￥{marketprice}</span><div className="bian"></div></div>
              <div className="shopcar"><button onClick={() => this.changeshop({ item, amount: amount - 1 })}>-</button><input type="number" /><button onClick={() => this.changeshop({ item, amount: item.amount + 1 })}>+</button><span>加入购物车</span></div>
            </div>
          </div>
         
        </div>
        <div className="txtdetail"><ul><li><img src="./images/productattr1.png" /></li><li><img src="./images/productattr2.png" /></li><li><img src="./images/productattr3.png" /></li></ul>
          <div className="info"><p>上架时间：{time}</p><p>商品重量：{weight/1000}千克</p><p>商屏编号：{number}</p></div>
          <div className="hpd">好评度<span></span><p>100%</p></div>
          <div><i>0</i>条评论</div>
          <div className="showpl"><span></span></div>
          
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
          <div className="bleft">
            <div className="relative">
              <h3>相关分类</h3>
              <ul>
                <li>绿色植物</li>
                <li>庆典/婚庆</li>
                <li>盆景/假山</li>
                <li>创意盆栽</li>
                <li>多肉植物</li>
                <li>租赁租摆</li>
                <li>批发专区</li>
                <li>园艺课堂</li>
                <li>园艺辅材</li>
                <li>园艺工程</li>
                <li>积分商城</li>
                <li>时令花卉</li>
              </ul>
            </div>
            <div className="footprint">
              <h3>浏览此商品的顾客还浏览了</h3>
              <ul>
                <li><img src="./images/weddingcelebration/705_thumb_G_1468526304977.jpg" /><p>开业庆典——红星组合，鸿星高照（三只载好）
</p><p>￥188.0</p></li>
                <li><img src="./images/weddingcelebration/705_thumb_G_1468526304977.jpg" /><p>开业庆典——红星组合，鸿星高照（三只载好）
</p><p>￥188.0</p></li>
                <li><img src="./images/weddingcelebration/705_thumb_G_1468526304977.jpg" /><p>开业庆典——红星组合，鸿星高照（三只载好）
</p><p>￥188.0</p></li>
                <li><img src="./images/weddingcelebration/705_thumb_G_1468526304977.jpg" /><p>开业庆典——红星组合，鸿星高照（三只载好）
</p><p>￥188.0</p></li>
              </ul>
            </div>
          </div>
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
      console.log(id)
      dispatch({ "type": "productdetail/fetchInit",id})
    }, 
    fetchInit(){
      dispatch({ "type": "productdetail/init"})
    },
    del(item) {
      dispatch({ "type": "shopcarshow/del", item })
    },
    change(item) {
      dispatch({ "type": "shopcarshow/change", item })
    }
  })
)(ProductDetail)
