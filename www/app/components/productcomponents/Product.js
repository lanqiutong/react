import React from "react";
import {connect} from "dva";
import classnames from "classnames";
import { NavLink } from 'dva/router';

class Product extends React.Component{
    constructor(){
        super();
        this.state={
            page:1,
            pagesize:8,
           
        }
    }
 
    
    showjoinshopcar(a) { 
        this.refs[a].style.display="block";
    }
    unshowjoinshopcar(a) {
        this.refs[a].style.display = "none";
    }
    showproductsul() {
        var Arr = [];
        var Arrtype = this.props.products.filter((item) => {
            return item.typech == this.props.typech;
        })
        var Arrtypesy = Arrtype.slice(0, 8);
        Arr.push(
            Arrtypesy.map((item, index) => {
                return <li key={index}
                    onClick={() => { this.props.showproductdetail({ item }) }}
                    onMouseEnter={() => { this.showjoinshopcar.bind(this)(`j${index}`) }}
                    onMouseLeave={() => { this.unshowjoinshopcar.bind(this)(`j${index}`) }}
                ><NavLink to={"/productDetail/" + item.id} key={index}>
                        <div className="box" >
                            <img src={`./images/${item.typeeng}/${item.image}`} />
                        </div>
                        <p>{item.name} </p>
                        <p style={{ color: "#ea5404", fontSize: "16px", fontWeight: "bold" }}>￥{item.currentprice}</p>
                    </NavLink ><div className="joinshopcar" ref={`j${index}`} onClick={(e) => {
                        e.stopPropagation();
                        this.props.addshopcar({item})
                    }}><span style={{ backgroundImage: "url(../../images/indexsprite.png)" }}></span>加入购物车</div></li>
            })
        )
      return Arr;
        
        
    
    }
    render(){
        return <div className="products">
            <div className="cl"></div>
        <div className="title">
            <h3><a herf="javascript:void(0)">{this.props.typech}</a></h3>
            <span className="more">更多＞＞</span>
        </div> 
            <div className="main">
                <div className="leftPart">
                    <img src={`./images/leftside/${this.props.typeEng}.jpg`} />
                </div>
                <div className="rightPart">
                    <ul>{this.showproductsul()}</ul>
                    <div className="cl"></div>
                </div>  
            </div>
            <div className="cl"></div>
        </div>
    }
}
export default connect(
 ({productshow:{products}})=>({
    products:(()=>{
        if (products) {
            return products;
        }
        return [];
    })()
 }),
    (dispatch) => ({
        addshopcar({item}) { 
            dispatch({ "type": "shopcarshow/addshopcar", item})
        },
        showproductdetail({item}){
            
            dispatch({"type":"productdetail/init",item})
        }
    })
)(Product);