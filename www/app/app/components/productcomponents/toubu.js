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
     shouldComponentUpdate(nextProps, nextState){
         if (nextProps.username != this.props.username) { 
             return true;
        }else{
            return false;
        }
        


   }
    render() {
        var username = sessionStorage.getItem('username');
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
                        <li>欢迎来到58花木兰!&nbsp;&nbsp;&nbsp;&nbsp;
                            {username ? (<i>欢迎你！{username}</i>):(<div><NavLink to="/login"><i className="register">请登录&nbsp;&nbsp;&nbsp;&nbsp;</i></NavLink><NavLink to="/regist"><i className="login">免费注册</i></NavLink></div>)}
                        
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                我的订单
                        </a>
                        </li>
                        <li onMouseEnter={()=>{return this.refs.my58.style.display="block"}}><a href="javascript:void(0)" className="my58" >
                            我的58<span></span>
                        </a>
                            <div className="my58div" ref="my58" onMouseLeave={() => { return this.refs.my58.style.display = "none" }}>
                                <p>我的58<span></span></p>
                                <p>我的订单</p>
                                <p>我的积分</p>
                                <p>积分商城</p>
                                <p>我的收藏</p>
                            </div>
                        </li>
                        <li onMouseEnter={() => { return this.refs.help.style.display = "block" }}>
                            <a href="javascript:void(0)" className="help"
                            >
                                帮助中心<span></span>
                        </a>
                            <div className="helpdiv" ref="help" onMouseLeave={() => { return this.refs.help.style.display = "none" }}>
                                <p>帮助中心<span></span></p>
                                <p>购物指南</p>
                                <p>配送服务</p>
                                <p>支付方式</p>
                                <p>售后服务</p>
                            </div>

                        </li>
                        <li style={{
                            backgroundImage: 'url(../../images/header.png)'
                        }}></li>
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
    ({ shopcarshow,productall,login}) => ({
        shopcar: shopcarshow.shopcar,
        username:login.username
       
        
    }),
    (dispatch) => ({
        fetchInit() {
            dispatch({ "type": "shopcarshow/fetchInit" })
            

        }


    })
)(Toubu);
