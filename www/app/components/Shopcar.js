import React, { Component } from 'react';
import {connect} from "dva";
import { NavLink } from 'dva/router';
import "../styles/shopcar.less";

class Shopcar extends Component {
   constructor({fetchInit}){
        super();
        fetchInit();
    }
    delshop(item){
      this.props.del(item);
    }
    changeshop(item){
      if(item.amount<=0){
        var r=confirm("确定要删除该商品么")
        if(r==true){
         this.props.del(item.item);
        
        };
      }else{
      this.props.change(item);
    }
    }
    
    showshopcar(){
      var Arr=[];
      if(this.props.shopcar){Arr.push(this.props.shopcar.map((item,index)=>{
        return <tr key={index}>
          <td><input type="checkbox"/></td>
          <td><NavLink to={"/productDetail/" + item.id} key={index}>{item.name}</NavLink ></td>
          <td><NavLink to={"/productDetail/" + item.id} key={index}><img src={`./images/${item.typeeng}/${item.image}`}/></NavLink ></td>
          <td>{item.currentprice}</td>
          <td><button onClick={() => this.changeshop({ item, amount: item.amount - 1 })}>-</button><input type="number" value={item.amount} onChange={() => this.changeshop({ item, amount: this.value })} /><button onClick={() => this.changeshop({ item, amount: item.amount + 1}) }>+</button></td>
          <td>{item.currentprice * item.amount}</td>
          <td><button className="delbtn" onClick={()=>this.delshop(item)}>删除</button></td>
        </tr>
      })
    )}
     
      
    return Arr;
    }
  render() {
    //console.warn(this.props.shopcar)
    return (
      <div className="shopcar">
      <div></div>
        <table>
          <thead><tr><th><input type="checkbox"/>全选</th><th>商品信息</th><th>商品图</th><th>单价</th><th>数量</th><th>金额</th><th>操作</th></tr></thead>
        <tbody>{this.showshopcar()}</tbody>
        </table>
      </div>
    )
  }
}
export default  connect(
  ({shopcarshow:{shopcar}})=>({
    shopcar:shopcar
 }),
 (dispatch) => ({
        fetchInit() { 
            dispatch({ "type": "shopcarshow/fetchInit"})
        },
        del(item){
          dispatch({"type":"shopcarshow/del",item})
        },
        change(item){
          dispatch({"type":"shopcarshow/change",item})
        }
  })
)(Shopcar);