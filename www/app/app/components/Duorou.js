import React from "react";
import { connect } from "dva";
import Product from "./productcomponents/Product";
import Lunbo2 from "./productcomponents/Lunbo2";
import "../styles/homepage.less";
class Duorou extends React.Component {
    constructor({ fetchInit }) {
        super();
        fetchInit();

    }
    render() {
        return <div className="productDisplay">
            <Lunbo2></Lunbo2>
            <Product typech="仙人球" typeEng="ballactus" ></Product>
            <Product typech="多肉植物" typeEng="succulentplants" ></Product>
        </div>
    }
};
export default connect(
    null
    ,
    (dispatch) => ({
        fetchInit() {
            dispatch({ "type": "productshow/fetchInit" })
        }
    })
)(Duorou);