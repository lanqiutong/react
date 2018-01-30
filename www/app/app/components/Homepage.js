import React from "react";
import {connect} from "dva";
import Product from "./productcomponents/Product";
import Lunbo from "./productcomponents/Lunbo";


import "../styles/homepage.less";
class Homepage extends React.Component{
    constructor({fetchInit}){
        super();
        fetchInit();
        
    }
    render(){
        return <div className="productDisplay">
            <Lunbo></Lunbo>
            <div className="img"><img src="./images/1451017834832083970.jpg"/></div>
            <Product typech="鲜花" typeEng="flower"></Product>
            <Product typech="绿色植物" typeEng="greenplant" ></Product>
            <Product typech="庆典/婚庆" typeEng="weddingcelebration" ></Product>
            <Product typech="盆景/假山" typeEng="miniaturegarden" ></Product>
            <Product typech="时令花卉" typeEng="seasonflower" ></Product>
            <Product typech="园艺辅材" typeEng="gardeningauxiliarymaterial" ></Product>
            <div className="img"><img src="./images/1452745448870444803.jpg"/></div>
        </div>
    }
};
export default connect(
   null
    ,
    (dispatch) => ({
        fetchInit() {
            dispatch({ "type": "productshow/fetchInit"})
        }
    })
)(Homepage);