import React, { Component } from 'react';
import { connect } from "dva";
import { NavLink } from 'dva/router';
import "../styles/login.less";
class Regist extends Component {
    constructor() {
        super();   
        
       
    }
    check(k,v){
        this.props.check(k,v);
    }
    checkphonenum(k,v){
        if (/^1[3|4|5|8][0-9]\d{8}$/.test(this.refs.phonenum.value)) {
            this.props.check(k, v);
        } else {
            alert("请填写11位数正确的电话")
        }   
    }
    checkemail(k,v){  
        if (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,}$/.test(this.refs.email.value)){
            this.props.check(k, v);
        }else{
            alert("请填写符合规范的email")
        }             
    }
    checkpassword(){
        if (this.refs.password2.value != this.refs.password1.value){
            alert("两次输入的密码不一致")
        }
    }
    regist(){
        if ((this.refs.username.value != "") && (/^1[3|4|5|8][0-9]\d{8}$/.test(this.refs.phonenum.value)) && (this.refs.password2.value == this.refs.password1.value) && (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]{2,}$/.test(this.refs.email.value))){
           
            var obj = { "username": this.refs.username.value, "email": this.refs.email.value, "phonenum": this.refs.phonenum.value, "password1": this.refs.password1.value}
            this.props.regist(obj);
        }else{
            alert("请完整您的信息")
        }
     
    }
    showloginorregist(){
        if (this.props.islogin){
            return <div className="input">您已经登录</div>
        }else{
            if (this.props.isregist){
                return <NavLink to="/login"><button>您已注册请点击登录</button></NavLink>
            }else{
                return  <div className="biaodan">
                        <p><span>用户名：</span><input type="text" ref="username" onBlur={() => this.check("username", this.refs.username.value)} /></p>
                        <p><span>邮箱：</span><input type="text" ref="email" onBlur={() => this.checkemail("email", this.refs.email.value)} /></p>
                        <p><span>手机号：</span><input type="text" ref="phonenum" onBlur={() => this.checkphonenum("phonenum", this.refs.phonenum.value)} /></p>
                        <p><span>登录密码：</span><input type="password" ref="password1" /></p>
                        <p><span>确认密码：</span><input type="password" ref="password2" onBlur={() => this.checkpassword()} /></p>
                        <div className="submit"><input type="submit" value="立即注册"
                            onClick={() => { this.regist() }}
                        /></div>
                        <NavLink to="/login"><div className="login">已有账号，立即<i>登录</i></div></NavLink>
                    </div>
            }
        }
    }
    render() {
        console.log(this.props.isregist,this.props.islogin)
        return (
            <div className="regist">
                {this.showloginorregist()}
                <div className="img" style={{background:"url(../images/pic2.jpg)"}}></div>
            </div>
        )
    }
}
export default connect(
    ({ login: { username, islogin,isregist}}) => ({
        username,
        islogin,
        isregist
       
    }),
    (dispatch) => ({
        check(k,v) {
            dispatch({"type":"login/check",k,v})
        },
        regist(obj){
            console.log(obj)
            dispatch({ "type": "login/regist", obj })
        }
    })
)(Regist)