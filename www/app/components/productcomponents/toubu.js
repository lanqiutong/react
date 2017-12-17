import React from "react";
import { Row, Col } from 'antd';
import { connect } from "dva";
import { NavLink } from 'dva/router';
import Nav from "./Nav.js";
import "../../styles/header.less";
class Toubu extends React.Component {
    constructor({ fetchInit}) {
        super();
        fetchInit();
    }
    render() {
        const shopCarAmount=(n)=>{
            var count=0;
            n.forEach(element => {
                if (element.amount) count += element.amount;
            });
            return count;
        }
        var amount = shopCarAmount(this.props.shopcar);
        return <div className="headerNav">
            <div className="header">
                <div className="headerMeau">
                    <div className="topTel">
                        客服热线：400-027-2891
                </div>
                    <ul className="topNav">
                        <li>欢迎来到58花木兰!
                        <a href="javascript:void(0)" className="register">请登录</a>
                            <a href="javascript:void(0)" className="login">免费注册</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                我的订单
                        </a>
                        </li>
                        <li><a href="javascript:void(0)" className="my58">
                            我的58
                        </a>
                            <div className="my58div">
                                <p>我的订单</p>
                                <p>我的积分</p>
                                <p>积分商城</p>
                                <p>我的收藏</p>
                            </div>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="help">
                                帮助中心
                        </a>
                            <div className="helpdiv">
                                <p>购物指南</p>
                                <p>配送服务</p>
                                <p>支付方式</p>
                                <p>售后服务</p>
                            </div>

                        </li>
                        <li></li>
                    </ul>
                    <div className="cl">
                    </div>
                </div>
            </div>
            <div className="headerinner">
                <div>
                   
                    <Row>
                        <Col span={10}>
                            <NavLink to="/">< div className="logo" style={{
                                backgroundImage: 'url(../../images/indexImg20130307.png)'
                            }}>
                                <h1>58 花木兰， 专业鲜花绿植O2O配送平台</h1></div></NavLink >
                        </Col>
                        <Col span={10}>
                            <div className="search"> <input type="text" className="input"/><input  className="submit"
                            type="button" value="搜索" />
                                <p className="tjsp"><a>绿萝</a><a>绿萝</a><a>吊兰</a><a>发财树</a><a>幸福树</a><a>滴水观音</a></p></div>
                        </Col>
                        <Col span={4}><NavLink to="/shopcar"><div className="myshoppingcar">
                            <div style={{backgroundImage: 'url(../../images/header.png)'}}></div>
                            <div>我的购物车</div>
                        <div>{amount}</div>
                        </div></NavLink></Col>
                    </Row>
                </div>   
            </div>
            <div className="cl"></div>
            <Nav></Nav>
        </div>
    }
}
export default connect(
    ({ shopcarshow: { shopcar } }) => ({
        shopcar: shopcar
    }),
    (dispatch) => ({
        fetchInit() {
            dispatch({ "type": "shopcarshow/fetchInit" })
        }
    })
)(Toubu);
